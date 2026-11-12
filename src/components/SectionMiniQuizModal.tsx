import { useState } from 'react';
import { X, Sparkles, CheckCircle, HelpCircle, Trophy, RotateCcw, ArrowRight, Volume2, VolumeX, ThumbsUp, Heart } from 'lucide-react';
import { MINI_QUIZZES, SectionMiniQuiz, MiniQuizQuestion } from '../data/miniQuizzes';
import { Language } from '../data/subjects';
import { playSuccessSound, playHintSound, playCelebrationSound, playTapSound } from '../utils/soundEffects';

interface SectionMiniQuizModalProps {
  sectionId: number;
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  onGoToNextSection: () => void;
}

export default function SectionMiniQuizModal({
  sectionId,
  language,
  isOpen,
  onClose,
  onGoToNextSection
}: SectionMiniQuizModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [attemptsOnCurrent, setAttemptsOnCurrent] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  if (!isOpen) return null;

  const quizData: SectionMiniQuiz = MINI_QUIZZES[sectionId] || MINI_QUIZZES[1];
  const currentQuestion: MiniQuizQuestion = quizData.questions[currentIndex];

  const handleSelectOption = (letter: string) => {
    if (isAnswered && isCorrect) return;
    playTapSound();
    setSelectedOption(letter);
  };

  const handleVerify = () => {
    if (!selectedOption) return;

    if (selectedOption === currentQuestion.correctAnswer) {
      playSuccessSound();
      setIsCorrect(true);
      setIsAnswered(true);
      if (attemptsOnCurrent === 0) {
        setScore((prev) => prev + 1);
      }
    } else {
      playHintSound();
      setIsCorrect(false);
      setIsAnswered(true);
      setAttemptsOnCurrent((prev) => prev + 1);
    }
  };

  const handleRetryCurrent = () => {
    playTapSound();
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
  };

  const handleNext = () => {
    playTapSound();
    if (currentIndex + 1 < quizData.questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
      setAttemptsOnCurrent(0);
    } else {
      playCelebrationSound();
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    playTapSound();
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setScore(0);
    setAttemptsOnCurrent(0);
    setIsCompleted(false);
  };

  // Text-to-speech for the question
  const handleReadQuestion = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const targetLang = language === 'gl' ? 'gl-ES' : 'es-ES';
    utterance.lang = targetLang;
    utterance.rate = 0.9;
    utterance.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices();
    const matchingVoice =
      voices.find((v) => v.lang.toLowerCase() === targetLang.toLowerCase()) ||
      voices.find((v) => v.lang.toLowerCase().startsWith(language)) ||
      voices.find((v) => v.lang.toLowerCase().startsWith('es'));
    if (matchingVoice) utterance.voice = matchingVoice;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const t = {
    modalTitle: quizData.badgeTitle[language],
    progressOf: {
      gl: `Pregunta ${currentIndex + 1} de ${quizData.questions.length}`,
      es: `Pregunta ${currentIndex + 1} de ${quizData.questions.length}`
    },
    checkBtn: {
      gl: "Comprobar resposta!",
      es: "¡Comprobar respuesta!"
    },
    nextBtn: {
      gl: "Seguinte pregunta",
      es: "Siguiente pregunta"
    },
    retryBtn: {
      gl: "Tentar de novo",
      es: "Intentar de nuevo"
    },
    finishBtn: {
      gl: "Ver estrelas!",
      es: "¡Ver estrellas!"
    },
    congratsTitle: {
      gl: "¡Excelente traballo! 🌟",
      es: "¡Excelente trabajo! 🌟"
    },
    congratsText: {
      gl: `Completaches as 5 preguntas de repaso deste punto! Conseguiches ${score} de 5 estrelas.`,
      es: `¡Completaste las 5 preguntas de repaso de este punto! Conseguiste ${score} de 5 estrellas.`
    },
    repeatBtn: {
      gl: "Volver repetir este punto",
      es: "Volver a repetir este punto"
    },
    nextSectionBtn: {
      gl: "Seguinte punto ➡️",
      es: "Siguiente punto ➡️"
    },
    closeBtn: {
      gl: "Pechar",
      es: "Cerrar"
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 md:p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-5 md:p-7 shadow-2xl border border-slate-200 overflow-hidden relative max-h-[95vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <div>
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                {t.modalTitle}
              </span>
              <span className="text-sm font-extrabold text-slate-900">
                {isCompleted
                  ? language === 'gl' ? 'Punto completado!' : '¡Punto completado!'
                  : t.progressOf[language]}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isCompleted && (
              <button
                onClick={() =>
                  handleReadQuestion(
                    `${currentQuestion.question[language]}. ${currentQuestion.options
                      .map((o) => `${o.letter}: ${o.text[language]}`)
                      .join('. ')}`
                  )
                }
                title="Escoitar en voz alta"
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                  isSpeaking
                    ? 'bg-rose-100 text-rose-700 animate-pulse'
                    : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                }`}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            )}

            <button
              onClick={() => {
                playTapSound();
                if (isSpeaking) window.speechSynthesis.cancel();
                onClose();
              }}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto flex-1 py-3">
          {isCompleted ? (
            /* Celebration Screen */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto ring-8 ring-amber-50">
                <Trophy className="w-8 h-8 text-amber-600 animate-bounce" />
              </div>

              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 font-display">
                {t.congratsTitle[language]}
              </h3>

              <p className="text-xs md:text-sm text-slate-600 max-w-sm mx-auto">
                {t.congratsText[language]}
              </p>

              {/* Stars badge */}
              <div className="flex items-center justify-center gap-1.5 text-3xl py-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="animate-scale-up" style={{ animationDelay: `${i * 100}ms` }}>
                    {i < score ? '⭐' : '✨'}
                  </span>
                ))}
              </div>

              <div className="bg-emerald-50 p-3.5 rounded-2xl border border-emerald-200 text-xs text-emerald-800 font-medium">
                {score === 5
                  ? language === 'gl'
                    ? '🌟 Pleno total! Coñeces este punto á perfección!'
                    : '🌟 ¡Pleno total! ¡Dominas este punto a la perfección!'
                  : language === 'gl'
                  ? '👏 Moi bo traballo! Estás repasando xenial!'
                  : '👏 ¡Muy buen trabajo! ¡Estás repasando genial!'}
              </div>

              {/* Navigation buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.repeatBtn[language]}</span>
                </button>

                {sectionId < 6 ? (
                  <button
                    onClick={() => {
                      playTapSound();
                      onGoToNextSection();
                      onClose();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>{t.nextSectionBtn[language]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      playTapSound();
                      onClose();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-sm cursor-pointer"
                  >
                    <span>{t.closeBtn[language]}</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Active Question */
            <div className="space-y-4">
              {/* Progress bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / quizData.questions.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <div className="flex items-start gap-2.5 pt-1">
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  {currentIndex + 1}
                </span>
                <h4 className="text-sm md:text-base font-bold text-slate-900 font-display leading-snug">
                  {currentQuestion.question[language]}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-2 mt-3">
                {currentQuestion.options.map((opt) => {
                  const isSelected = selectedOption === opt.letter;
                  let style = "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800";

                  if (isSelected) {
                    if (isAnswered) {
                      if (isCorrect) {
                        style = "border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/30";
                      } else {
                        style = "border-amber-500 bg-amber-50 text-amber-950 ring-2 ring-amber-500/30";
                      }
                    } else {
                      style = "border-emerald-600 bg-emerald-50/50 text-slate-900 ring-2 ring-emerald-500/20";
                    }
                  }

                  return (
                    <button
                      key={opt.letter}
                      onClick={() => handleSelectOption(opt.letter)}
                      className={`w-full p-3 rounded-2xl border-2 text-left flex items-center justify-between transition-transform active:scale-98 cursor-pointer ${style}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-7 h-7 rounded-xl font-bold flex items-center justify-center text-xs shrink-0 ${
                            isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {opt.letter}
                        </span>
                        <span className="text-xs md:text-sm font-medium">{opt.text[language]}</span>
                      </div>

                      {isSelected && isAnswered && (
                        <span>
                          {isCorrect ? (
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <HelpCircle className="w-4 h-4 text-amber-600" />
                          )}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Feedback */}
              {isAnswered && (
                <div
                  className={`p-3 rounded-2xl border flex items-start gap-2.5 animate-fade-in ${
                    isCorrect
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}
                >
                  <div className="shrink-0 mt-0.5">
                    {isCorrect ? <ThumbsUp className="w-4 h-4 text-emerald-600" /> : <Heart className="w-4 h-4 text-amber-600" />}
                  </div>
                  <div className="text-xs leading-relaxed space-y-0.5">
                    <span className="font-bold block">
                      {isCorrect
                        ? language === 'gl' ? '¡Moi ben! Resposta correcta!' : '¡Muy bien! ¡Respuesta correcta!'
                        : language === 'gl' ? '¡Case! Repasa a explicación:' : '¡Casi! Repasa la explicación:'}
                    </span>
                    <p>{currentQuestion.explanation[language]}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {!isCompleted && (
          <div className="pt-3 border-t border-slate-100 shrink-0">
            {!isAnswered ? (
              <button
                onClick={handleVerify}
                disabled={!selectedOption}
                className={`w-full py-3 rounded-xl font-bold text-xs transition-transform active:scale-95 flex items-center justify-center gap-1.5 shadow-sm ${
                  selectedOption
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span>{t.checkBtn[language]}</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            ) : isCorrect ? (
              <button
                onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-xs bg-slate-900 text-white hover:bg-slate-800 transition-transform active:scale-95 shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>
                  {currentIndex + 1 < quizData.questions.length ? t.nextBtn[language] : t.finishBtn[language]}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleRetryCurrent}
                className="w-full py-3 rounded-xl font-bold text-xs bg-amber-500 text-white hover:bg-amber-600 transition-transform active:scale-95 shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.retryBtn[language]}</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
