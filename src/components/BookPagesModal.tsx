import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { BOOK_PAGES } from '../data/learningContent';
import { Language } from '../data/subjects';
import { playTapSound } from '../utils/soundEffects';

interface BookPagesModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookPagesModal({ language, isOpen, onClose }: BookPagesModalProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  const currentPage = BOOK_PAGES[currentPageIndex];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 md:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
              {language === 'gl'
                ? 'Páxinas do Libro de Ciencias (3.º Primaria)'
                : 'Páginas del Libro de Ciencias (3.º Primaria)'}
            </span>
            <h3 className="text-base md:text-lg font-bold text-slate-900 font-display">
              {language === 'gl'
                ? `Páxina ${currentPage.pageNumber}: ${currentPage.title[language]}`
                : `Página ${currentPage.pageNumber}: ${currentPage.title[language]}`}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { playTapSound(); setIsZoomed(!isZoomed); }}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-xl text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
              title={language === 'gl' ? 'Aumentar / Reducir' : 'Ampliar / Reducir'}
            >
              <ZoomIn className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isZoomed
                  ? language === 'gl' ? 'Reducir' : 'Reducir'
                  : language === 'gl' ? 'Ampliar' : 'Ampliar'}
              </span>
            </button>
            <button
              onClick={() => { playTapSound(); onClose(); }}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Container with Scroll & Zoom */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-100 min-h-[300px]">
          <img
            src={currentPage.imageSrc}
            alt={currentPage.title[language]}
            referrerPolicy="no-referrer"
            className={`rounded-xl shadow-md object-contain transition-all duration-200 ${
              isZoomed ? 'max-w-none w-[140%] cursor-zoom-out' : 'max-h-[62vh] max-w-full cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
        </div>

        {/* Footer with page navigation */}
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-200 bg-white">
          <button
            onClick={() => {
              playTapSound();
              if (currentPageIndex > 0) setCurrentPageIndex((prev) => prev - 1);
            }}
            disabled={currentPageIndex === 0}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
              currentPageIndex === 0
                ? 'opacity-30 cursor-not-allowed text-slate-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{language === 'gl' ? 'Páxina anterior' : 'Página anterior'}</span>
          </button>

          <span className="text-xs text-slate-600 font-medium">
            {currentPageIndex + 1} de {BOOK_PAGES.length} {language === 'gl' ? 'fotos do libro' : 'fotos del libro'}
          </span>

          <button
            onClick={() => {
              playTapSound();
              if (currentPageIndex < BOOK_PAGES.length - 1) setCurrentPageIndex((prev) => prev + 1);
            }}
            disabled={currentPageIndex === BOOK_PAGES.length - 1}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
              currentPageIndex === BOOK_PAGES.length - 1
                ? 'opacity-30 cursor-not-allowed text-slate-400'
                : 'bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer'
            }`}
          >
            <span>{language === 'gl' ? 'Seguinte páxina' : 'Siguiente página'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
