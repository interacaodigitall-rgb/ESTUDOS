import { useState } from 'react';
import { Volume2, VolumeX, CheckCircle2, Lightbulb, ChevronRight, BookOpen, ArrowRight, Sparkles, Target } from 'lucide-react';
import { STUDY_SECTIONS, StudySection, UI_STRINGS } from '../data/learningContent';
import { Language } from '../data/subjects';
import SectionMiniQuizModal from './SectionMiniQuizModal';
import { playTapSound } from '../utils/soundEffects';

interface SectionViewerProps {
  language: Language;
  onGoToDrawing: () => void;
  onGoToQuiz: () => void;
  onOpenBookPages: () => void;
}

export default function SectionViewer({
  language,
  onGoToDrawing,
  onGoToQuiz,
  onOpenBookPages
}: SectionViewerProps) {
  const [activeSectionId, setActiveSectionId] = useState<number>(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMiniQuizOpen, setIsMiniQuizOpen] = useState(false);

  const activeSection: StudySection =
    STUDY_SECTIONS.find((s) => s.id === activeSectionId) || STUDY_SECTIONS[0];

  // Bilingual Text-to-speech
  const handleReadAloud = (textToRead: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToRead);

    const targetLang = language === 'gl' ? 'gl-ES' : 'es-ES';
    utterance.lang = targetLang;
    utterance.rate = 0.9;
    utterance.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices();
    const matchingVoice =
      voices.find((v) => v.lang.toLowerCase() === targetLang.toLowerCase()) ||
      voices.find((v) => v.lang.toLowerCase().startsWith(language)) ||
      voices.find((v) => v.lang.toLowerCase().startsWith('es'));
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const getFullSectionText = (sec: StudySection) => {
    let full = `${sec.title[language]}. ${sec.summary[language]}. `;
    sec.cards.forEach((c) => {
      full += `${c.title[language]}: ${c.points[language].join('. ')}. `;
    });
    full += `${UI_STRINGS.examTipTitle[language]} ${sec.examTip[language]}`;
    return full;
  };

  const t = {
    miniQuizBtn: {
      gl: "🎯 Practicar este punto (5 preguntas)",
      es: "🎯 Practicar este punto (5 preguntas)"
    },
    miniQuizDesc: {
      gl: "Comproba agora mesmo se aprendiches ben este apartado!",
      es: "¡Comprueba ahora mismo si has aprendido bien este apartado!"
    }
  };

  return (
    <div className="space-y-6">
      {/* 6 Section Horizontal Navigator - Optimized for Mobile Touch */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-xs overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-1.5 min-w-max">
          {STUDY_SECTIONS.map((sec) => {
            const isActive = sec.id === activeSectionId;
            return (
              <button
                key={sec.id}
                onClick={() => {
                  playTapSound();
                  if (isSpeaking) {
                    window.speechSynthesis.cancel();
                    setIsSpeaking(false);
                  }
                  setActiveSectionId(sec.id);
                }}
                className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className="text-base">{sec.emoji}</span>
                <span>{sec.id}. {sec.shortTitle[language]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Section Content Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm space-y-5 md:space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-1">
              {language === 'gl'
                ? `Punto Clave ${activeSection.id} de 6`
                : `Punto Clave ${activeSection.id} de 6`}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 font-display">
              {activeSection.title[language]}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-1 max-w-2xl leading-relaxed">
              {activeSection.summary[language]}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            {/* Bilingual Read aloud button */}
            <button
              onClick={() => handleReadAloud(getFullSectionText(activeSection))}
              title={isSpeaking ? UI_STRINGS.stopVoice[language] : UI_STRINGS.listenAloud[language]}
              className={`min-h-[42px] px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 ${
                isSpeaking
                  ? 'bg-rose-100 text-rose-700 border border-rose-200 animate-pulse'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isSpeaking ? UI_STRINGS.stopVoice[language] : UI_STRINGS.listenAloud[language]}</span>
            </button>

            {/* View book photo */}
            <button
              onClick={onOpenBookPages}
              className="min-h-[42px] px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer active:scale-95"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">{UI_STRINGS.seeBookPage[language]}</span>
              <span className="sm:hidden">{language === 'gl' ? 'Libro' : 'Libro'}</span>
            </button>
          </div>
        </div>

        {/* Exam Tip Callout */}
        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-200/60 text-amber-900 flex items-center justify-center shrink-0 text-base">
            💡
          </div>
          <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong className="block font-bold mb-0.5">{UI_STRINGS.examTipTitle[language]}</strong>
            {activeSection.examTip[language]}
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeSection.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-slate-200 rounded-2xl p-4 sm:p-5 hover:bg-white hover:border-emerald-300 transition-all space-y-3"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{card.icon}</span>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 font-display">
                  {card.title[language]}
                </h3>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {card.points[language].map((p, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              {card.highlight && (
                <div className="mt-3 pt-2.5 border-t border-slate-200/60 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{card.highlight[language]}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Special comparison table for section 2 */}
        {activeSection.comparisonTable && (
          <div className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-5 overflow-x-auto space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">📊</span>
              <h4 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 font-display">
                {language === 'gl'
                  ? 'Táboa de Repaso: Outros Seres Vivos'
                  : 'Tabla de Repaso: Otros Seres Vivos'}
              </h4>
            </div>

            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                  {activeSection.comparisonTable.headers[language].map((h, i) => (
                    <th key={i} className="py-2.5 px-3 font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {activeSection.comparisonTable.rows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/60">
                    <td className="py-2.5 px-3 font-bold text-slate-900">{row.name[language]}</td>
                    <td className="py-2.5 px-3">{row.feature[language]}</td>
                    <td className="py-2.5 px-3">{row.example[language]}</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-medium">{row.example2[language]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Quick link button to the drawing tool when on section 5 or 6 */}
        {(activeSection.id === 5 || activeSection.id === 6) && (
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-bold text-sm sm:text-base md:text-lg flex items-center justify-center sm:justify-start gap-2">
                <span>🎨</span>
                <span>{UI_STRINGS.drawingBannerTitle[language]}</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100">
                {UI_STRINGS.drawingBannerDesc[language]}
              </p>
            </div>
            <button
              onClick={onGoToDrawing}
              className="min-h-[44px] px-5 py-2.5 bg-white text-emerald-800 rounded-xl font-bold text-xs sm:text-sm hover:bg-emerald-50 transition-transform active:scale-95 shadow-sm shrink-0 cursor-pointer flex items-center gap-2"
            >
              <span>{UI_STRINGS.openDrawingBtn[language]}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ============================================================== */}
        {/* NEW FEATURE: SPECIFIC MINI-QUIZ (5 QUESTIONS) PER SECTION CARD */}
        {/* ============================================================== */}
        <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-emerald-50 border-2 border-amber-300 rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
              🎯
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-amber-800 uppercase tracking-wider block">
                {language === 'gl' ? 'Xogo de comprobación rápida' : 'Juego de comprobación rápida'}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                {language === 'gl'
                  ? `Mini-Quiz deste punto (${activeSection.id} de 6)`
                  : `Mini-Quiz de este punto (${activeSection.id} de 6)`}
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                {t.miniQuizDesc[language]}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playTapSound();
              setIsMiniQuizOpen(true);
            }}
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>{t.miniQuizBtn[language]}</span>
          </button>
        </div>

        {/* Bottom Navigation between sections */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={() => {
              playTapSound();
              if (activeSectionId > 1) setActiveSectionId((prev) => prev - 1);
            }}
            disabled={activeSectionId === 1}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeSectionId === 1
                ? 'opacity-40 cursor-not-allowed text-slate-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer active:scale-95'
            }`}
          >
            {UI_STRINGS.prevPoint[language]}
          </button>

          <div className="text-xs text-slate-500 font-medium">
            {UI_STRINGS.pointIndicator[language].replace('{current}', String(activeSectionId))}
          </div>

          {activeSectionId < 6 ? (
            <button
              onClick={() => {
                playTapSound();
                setActiveSectionId((prev) => prev + 1);
              }}
              className="min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
            >
              <span>{UI_STRINGS.nextPoint[language]}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onGoToQuiz}
              className="min-h-[44px] px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 text-slate-900 hover:bg-amber-400 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <span>{UI_STRINGS.takeQuizBtn[language]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Mini-Quiz Modal for current section */}
      <SectionMiniQuizModal
        sectionId={activeSection.id}
        language={language}
        isOpen={isMiniQuizOpen}
        onClose={() => setIsMiniQuizOpen(false)}
        onGoToNextSection={() => {
          if (activeSectionId < 6) {
            setActiveSectionId((prev) => prev + 1);
          }
        }}
      />
    </div>
  );
}
