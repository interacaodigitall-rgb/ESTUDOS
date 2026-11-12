import { useState } from 'react';
import { Volume2, VolumeX, CheckCircle2, Lightbulb, ChevronRight, BookOpen, ArrowRight } from 'lucide-react';
import { STUDY_SECTIONS, StudySection, UI_STRINGS } from '../data/learningContent';
import { Language } from '../data/subjects';
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

  const activeSection: StudySection =
    STUDY_SECTIONS.find((s) => s.id === activeSectionId) || STUDY_SECTIONS[0];

  // Bilingual Text-to-speech for accessible listening in tablet
  const handleReadAloud = (textToRead: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToRead);
    
    // Configure voice & language
    const targetLang = language === 'gl' ? 'gl-ES' : 'es-ES';
    utterance.lang = targetLang;
    utterance.rate = 0.9; // Friendly gentle pace for child
    utterance.pitch = 1.05;

    // Search for matching voice if available
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

  return (
    <div className="space-y-6">
      {/* 6 Section Horizontal Pill Navigator for Tablet / Desktop */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2.5 shadow-xs overflow-x-auto scrollbar-none">
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
                className={`px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
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
      <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-8 shadow-sm space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-1">
              {language === 'gl'
                ? `Punto Clave ${activeSection.id} de 6`
                : `Punto Clave ${activeSection.id} de 6`}
            </span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 font-display">
              {activeSection.title[language]}
            </h2>
            <p className="text-sm md:text-base text-slate-600 mt-1 max-w-2xl">
              {activeSection.summary[language]}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            {/* Bilingual Read aloud button */}
            <button
              onClick={() => handleReadAloud(getFullSectionText(activeSection))}
              title={isSpeaking ? UI_STRINGS.stopVoice[language] : UI_STRINGS.listenAloud[language]}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
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
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>{UI_STRINGS.seeBookPage[language]}</span>
            </button>
          </div>
        </div>

        {/* Exam Tip Callout */}
        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-200/60 text-amber-900 flex items-center justify-center shrink-0 text-base">
            💡
          </div>
          <div className="text-xs md:text-sm text-amber-900 leading-relaxed">
            <strong className="block font-bold mb-0.5">{UI_STRINGS.examTipTitle[language]}</strong>
            {activeSection.examTip[language]}
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeSection.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-slate-200 rounded-2xl p-5 hover:bg-white hover:border-emerald-300 hover:shadow-xs transition-all space-y-3"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{card.icon}</span>
                <h3 className="text-base md:text-lg font-bold text-slate-900 font-display">
                  {card.title[language]}
                </h3>
              </div>

              <ul className="space-y-2 text-xs md:text-sm text-slate-700">
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
          <div className="bg-white border border-slate-200 rounded-2xl p-4 md:p-5 overflow-x-auto space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">📊</span>
              <h4 className="text-sm md:text-base font-bold text-slate-900 font-display">
                {language === 'gl'
                  ? 'Táboa de Repaso: Outros Seres Vivos (Moito ollo no exame!)'
                  : 'Tabla de Repaso: Otros Seres Vivos (¡Mucho ojo en el examen!)'}
              </h4>
            </div>

            <table className="w-full text-left text-xs md:text-sm border-collapse">
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
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-bold text-base md:text-lg flex items-center justify-center sm:justify-start gap-2">
                <span>🎨</span>
                <span>{UI_STRINGS.drawingBannerTitle[language]}</span>
              </div>
              <p className="text-xs md:text-sm text-emerald-100">
                {UI_STRINGS.drawingBannerDesc[language]}
              </p>
            </div>
            <button
              onClick={onGoToDrawing}
              className="px-5 py-2.5 bg-white text-emerald-800 rounded-xl font-bold text-xs md:text-sm hover:bg-emerald-50 transition-colors shadow-sm shrink-0 cursor-pointer flex items-center gap-2"
            >
              <span>{UI_STRINGS.openDrawingBtn[language]}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Bottom Navigation between sections */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={() => {
              playTapSound();
              if (activeSectionId > 1) setActiveSectionId((prev) => prev - 1);
            }}
            disabled={activeSectionId === 1}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
              activeSectionId === 1
                ? 'opacity-40 cursor-not-allowed text-slate-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer'
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
              className="px-4 py-2 rounded-xl text-xs md:text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>{UI_STRINGS.nextPoint[language]}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onGoToQuiz}
              className="px-5 py-2 rounded-xl text-xs md:text-sm font-bold bg-amber-500 text-slate-900 hover:bg-amber-400 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <span>{UI_STRINGS.takeQuizBtn[language]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
