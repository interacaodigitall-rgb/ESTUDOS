import { useState } from 'react';
import { Sparkles, Trophy, ArrowRight, HelpCircle, CheckCircle, RotateCcw, ThumbsUp, Heart, Shuffle } from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/learningContent';
import { Language } from '../data/subjects';
import { playSuccessSound, playHintSound, playCelebrationSound, playTapSound } from '../utils/soundEffects';

interface QuizModeProps {
  language: Language;
  onFinish?: () => void;
}

export default function QuizMode({ language, onFinish }: QuizModeProps) {
  // Shuffled questions order
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => [...QUIZ_QUESTIONS]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [attemptsOnCurrent, setAttemptsOnCurrent] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion: QuizQuestion = questions[currentIndex] || questions[0];

  const handleSelectOption = (letter: string) => {
    if (isAnswered && isCorrect) return;
    playTapSound();
    setSelectedOption(letter);
  };

  const handleVerifyAnswer = () => {
    if (!selectedOption) return;

    if (selectedOption === currentQuestion.correctAnswer) {
      playSuccessSound();
      setIsCorrect(true);
      setIsAnswered(true);
      setShowHint(false);
      if (attemptsOnCurrent === 0) {
        setScore((prev) => prev + 1);
      }
    } else {
      playHintSound();
      setIsCorrect(false);
      setIsAnswered(true);
      setAttemptsOnCurrent((prev) => prev + 1);
      setShowHint(true);
    }
  };

  const handleRetryCurrent = () => {
    playTapSound();
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
  };

  const handleNextQuestion = () => {
    playTapSound();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
      setAttemptsOnCurrent(0);
      setShowHint(false);
    } else {
      playCelebrationSound();
      setIsCompleted(true);
    }
  };

  const handleRestartQuiz = (shuffle: boolean = false) => {
    playTapSound();
    let newQ = [...QUIZ_QUESTIONS];
    if (shuffle) {
      // Fisher-Yates shuffle
      for (let i = newQ.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newQ[i], newQ[j]] = [newQ[j], newQ[i]];
      }
    }
    setQuestions(newQ);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setAttemptsOnCurrent(0);
    setShowHint(false);
    setScore(0);
    setIsCompleted(false);
  };

  const t = {
    badge: {
      gl: "Quiz Interactivo de Repaso (20 Preguntas)",
      es: "Quiz Interactivo de Repaso (20 Preguntas)"
    },
    questionOf: {
      gl: `Pregunta ${currentIndex + 1} de ${questions.length}`,
      es: `Pregunta ${currentIndex + 1} de ${questions.length}`
    },
    starsEarned: {
      gl: `${score} estrelas acadadas`,
      es: `${score} estrellas conseguidas`
    },
    checkAnswerBtn: {
      gl: "Comprobar a miña resposta!",
      es: "¡Comprobar mi respuesta!"
    },
    nextQuestionBtn: {
      gl: "Seguinte Pregunta",
      es: "Siguiente Pregunta"
    },
    seeResultsBtn: {
      gl: "Ver Resultado Final",
      es: "Ver Resultado Final"
    },
    retryBtn: {
      gl: "Tentar outra vez coa pista!",
      es: "¡Intentar otra vez con la pista!"
    },
    correctTitle: {
      gl: "¡MOI BEN! RESPOSTA CORRECTA! 🎉",
      es: "¡MUY BIEN! ¡RESPUESTA CORRECTA! 🎉"
    },
    wrongTitle: {
      gl: "¡Case o tes! Imos probar de novo! 💪",
      es: "¡Casi lo tienes! ¡Vamos a probar de nuevo! 💪"
    },
    hintPrefix: {
      gl: "🧭 Pista de axuda:",
      es: "🧭 Pista de ayuda:"
    },
    didYouKnow: {
      gl: "💡 Sabías que?",
      es: "💡 ¿Sabías que?"
    },
    congratsTitle: {
      gl: "¡PARABÉNS, CAMPIOA! 🌟",
      es: "¡ENHORABUENA, CAMPEONA! 🌟"
    },
    congratsSubtitle: {
      gl: "Remataches as 20 preguntas do exame! Demostraches que coñeces moi ben as plantas e os seres vivos. Estás preparadísima para sacar unha gran nota!",
      es: "¡Completaste las 20 preguntas del examen! Has demostrado que dominas las plantas y los seres vivos. ¡Estás preparadísima para triunfar!"
    },
    finalScoreTitle: {
      gl: "A túa puntuación final",
      es: "Tu puntuación final"
    },
    shuffleBtn: {
      gl: "Mesturar e repetir o Quiz",
      es: "Barajar y repetir el Quiz"
    },
    restartBtn: {
      gl: "Repetir na mesma orde",
      es: "Repetir en el mismo orden"
    },
    backToSummaryBtn: {
      gl: "Volver ao Resumo de Repaso",
      es: "Volver al Resumen de Repaso"
    }
  };

  // Completion screen
  if (isCompleted) {
    return (
      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 text-center max-w-2xl mx-auto shadow-sm">
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-amber-50">
          <Trophy className="w-10 h-10 text-amber-600 animate-bounce" />
        </div>

        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
          {language === 'gl' ? 'Proba completada con éxito!' : '¡Prueba completada con éxito!'}
        </span>

        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display mt-3">
          {t.congratsTitle[language]}
        </h3>

        <p className="text-slate-600 mt-2 max-w-md mx-auto text-sm md:text-base leading-relaxed">
          {t.congratsSubtitle[language]}
        </p>

        {/* Score banner */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 rounded-2xl p-5 border border-emerald-200 my-6">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
            {t.finalScoreTitle[language]}
          </div>
          <div className="text-4xl md:text-5xl font-black text-emerald-600 font-display my-1">
            {score} / {questions.length}
          </div>
          <div className="flex items-center justify-center gap-1 text-amber-400 mt-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl">
                {i < Math.round((score / questions.length) * 5) ? '⭐' : '✨'}
              </span>
            ))}
          </div>
          <p className="text-xs text-emerald-700 mt-2 font-medium">
            {score >= 18
              ? language === 'gl'
                ? '🏆 Matrícula de honra! Eres unha auténtica experta en botánica e microbioloxía!'
                : '🏆 ¡Matrícula de honor! ¡Eres una auténtica experta en botánica y seres vivos!'
              : score >= 14
              ? language === 'gl'
                ? '👏 Notable alto! Coñeces practicamente todo o temario do libro!'
                : '👏 ¡Notable alto! ¡Conoces casi todo el temario del libro!'
              : language === 'gl'
              ? '💪 Moi bo esforzo! Facendo un segundo repaso vas sacar un 10!'
              : '💪 ¡Muy buen esfuerzo! ¡Repasando un poquito más vas a sacar un 10!'}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => handleRestartQuiz(true)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs md:text-sm hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <Shuffle className="w-4 h-4" />
            <span>{t.shuffleBtn[language]}</span>
          </button>
          <button
            onClick={() => handleRestartQuiz(false)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs md:text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t.restartBtn[language]}</span>
          </button>
          {onFinish && (
            <button
              onClick={onFinish}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold text-xs md:text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>{t.backToSummaryBtn[language]}</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-8 max-w-3xl mx-auto shadow-sm">
      {/* Progress header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              {t.badge[language]}
            </span>
            <span className="text-sm font-extrabold text-slate-900">
              {t.questionOf[language]}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick shuffle toggle */}
          <button
            onClick={() => handleRestartQuiz(true)}
            title={t.shuffleBtn[language]}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg text-xs flex items-center gap-1 cursor-pointer"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px] font-medium">
              {language === 'gl' ? 'Mesturar' : 'Barajar'}
            </span>
          </button>

          {/* Stars count */}
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/60 px-3 py-1.5 rounded-full text-xs font-bold text-amber-800">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.starsEarned[language]}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden my-5">
        <div
          className="bg-emerald-500 h-full rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* The Question Card */}
      <div className="py-2">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">
            {currentIndex + 1}
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug font-display">
            {currentQuestion.question[language]}
          </h3>
        </div>

        {/* Options List */}
        <div className="space-y-3 mt-6">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOption === option.letter;
            let optionStyle = "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70 text-slate-800";

            if (isSelected) {
              if (isAnswered) {
                if (isCorrect) {
                  optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/30";
                } else {
                  optionStyle = "border-amber-500 bg-amber-50 text-amber-950 ring-2 ring-amber-500/30";
                }
              } else {
                optionStyle = "border-emerald-600 bg-emerald-50/50 text-slate-900 ring-2 ring-emerald-500/20";
              }
            }

            return (
              <button
                key={option.letter}
                onClick={() => handleSelectOption(option.letter)}
                className={`w-full p-4 rounded-2xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${optionStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-sm shrink-0 transition-colors ${
                      isSelected
                        ? isAnswered && isCorrect
                          ? 'bg-emerald-600 text-white'
                          : isAnswered && !isCorrect
                          ? 'bg-amber-600 text-white'
                          : 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {option.letter}
                  </span>
                  <span className="text-sm md:text-base font-medium">
                    {option.text[language]}
                  </span>
                </div>

                {isSelected && isAnswered && (
                  <div>
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <HelpCircle className="w-5 h-5 text-amber-600" />
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback Messages */}
      {isAnswered && (
        <div className="mt-5 space-y-3">
          {isCorrect ? (
            /* Enthusiastic Praise */
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="font-extrabold text-emerald-900 font-display text-base">
                  {t.correctTitle[language]}
                </span>
                <p className="text-xs md:text-sm text-emerald-800 leading-relaxed">
                  {currentQuestion.explanation[language]}
                </p>
                {currentQuestion.funFact && (
                  <p className="text-xs text-emerald-700 font-medium pt-1">
                    <strong>{t.didYouKnow[language]}</strong> {currentQuestion.funFact[language]}
                  </p>
                )}
              </div>
            </div>
          ) : (
            /* Gentle motivating hint */
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="font-extrabold text-amber-900 font-display text-base">
                  {t.wrongTitle[language]}
                </span>
                <p className="text-xs md:text-sm text-amber-800">
                  {showHint && (
                    <span>
                      <strong>{t.hintPrefix[language]}</strong> {currentQuestion.hint[language]}
                    </span>
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Action Footer Buttons */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        {!isAnswered ? (
          <button
            onClick={handleVerifyAnswer}
            disabled={!selectedOption}
            className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2 ${
              selectedOption
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span>{t.checkAnswerBtn[language]}</span>
            <Sparkles className="w-4 h-4" />
          </button>
        ) : isCorrect ? (
          <button
            onClick={handleNextQuestion}
            className="w-full py-3.5 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>
              {currentIndex + 1 < questions.length
                ? t.nextQuestionBtn[language]
                : t.seeResultsBtn[language]}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleRetryCurrent}
            className="w-full py-3.5 rounded-xl font-bold text-sm bg-amber-500 text-white hover:bg-amber-600 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t.retryBtn[language]}</span>
          </button>
        )}
      </div>
    </div>
  );
}
