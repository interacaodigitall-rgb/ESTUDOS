import { useState } from 'react';
import { BookOpen, Sparkles, PenTool, CheckCircle, GraduationCap, Home, ArrowLeft } from 'lucide-react';
import SectionViewer from './components/SectionViewer';
import DrawingGuide from './components/DrawingGuide';
import QuizMode from './components/QuizMode';
import BookPagesModal from './components/BookPagesModal';
import HomeScreen from './components/HomeScreen';
import PWAInstallBanner from './components/PWAInstallBanner';
import { Language } from './data/subjects';
import { UI_STRINGS } from './data/learningContent';
import { playTapSound } from './utils/soundEffects';

type TopicMode = 'repaso' | 'debuxo' | 'quiz';

export default function App() {
  const [language, setLanguage] = useState<Language>('gl');
  const [currentView, setCurrentView] = useState<'home' | 'topic'>('home');
  const [topicMode, setTopicMode] = useState<TopicMode>('repaso');
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const toggleLanguage = (newLang: Language) => {
    playTapSound();
    setLanguage(newLang);
  };

  const handleSelectTopic = (subjectId: string, topicId: string) => {
    if (subjectId === 'ciencias-natureza' && topicId === 'tema-1-plantas') {
      setCurrentView('topic');
      setTopicMode('repaso');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900 pb-24 md:pb-6">
      {/* Top Bar with 3 zones: Brand - Navigation - Actions + Language Selector */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
          {/* Zone 1: Brand Wordmark / Home Action */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => {
                playTapSound();
                setCurrentView('home');
              }}
              className="flex items-center gap-2 text-slate-900 hover:text-emerald-700 transition-transform active:scale-95 cursor-pointer"
            >
              <img
                src="/icon-192.png"
                alt="Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover shadow-2xs border border-emerald-300"
              />
              <div className="flex flex-col text-left">
                <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight font-display whitespace-nowrap leading-tight text-slate-900">
                  Estudo
                </span>
                <span className="text-[10px] text-emerald-700 font-semibold leading-none">
                  3.º Primaria
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Desktop/Tablet Navigation Links (hidden on mobile, uses bottom bar) */}
          <nav className="hidden md:flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
            <button
              onClick={() => {
                playTapSound();
                setCurrentView('home');
              }}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95 ${
                currentView === 'home'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>{UI_STRINGS.homeBtn[language]}</span>
            </button>

            {currentView === 'topic' && (
              <>
                <button
                  onClick={() => {
                    playTapSound();
                    setTopicMode('repaso');
                  }}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95 ${
                    topicMode === 'repaso'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{UI_STRINGS.tabSummary[language]}</span>
                </button>

                <button
                  onClick={() => {
                    playTapSound();
                    setTopicMode('debuxo');
                  }}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95 ${
                    topicMode === 'debuxo'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <PenTool className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{UI_STRINGS.tabDrawing[language]}</span>
                </button>

                <button
                  onClick={() => {
                    playTapSound();
                    setTopicMode('quiz');
                  }}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95 ${
                    topicMode === 'quiz'
                      ? 'bg-amber-50 text-amber-900 border border-amber-200 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{UI_STRINGS.tabQuiz[language]}</span>
                </button>
              </>
            )}
          </nav>

          {/* Zone 3: Language Selector Switcher + Book photos */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Big, Touch-Friendly Language Switcher (GL / ES) */}
            <div className="flex items-center p-1 bg-slate-100 rounded-2xl border border-slate-200 shadow-2xs">
              <button
                onClick={() => toggleLanguage('gl')}
                className={`min-h-[38px] px-3 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer active:scale-90 ${
                  language === 'gl'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Galego"
              >
                GL
              </button>
              <button
                onClick={() => toggleLanguage('es')}
                className={`min-h-[38px] px-3 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer active:scale-90 ${
                  language === 'es'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Castellano"
              >
                ES
              </button>
            </div>

            {/* Book Photos Button */}
            <button
              onClick={() => {
                playTapSound();
                setIsBookModalOpen(true);
              }}
              className="min-h-[42px] px-3 sm:px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 rounded-xl hover:bg-slate-200 transition-transform active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">{UI_STRINGS.bookPhotosBtn[language]}</span>
              <span className="sm:hidden">{language === 'gl' ? 'Libro' : 'Libro'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Router */}
      {currentView === 'home' ? (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-8 flex-1 w-full">
          <HomeScreen
            language={language}
            onSelectTopic={handleSelectTopic}
          />
        </main>
      ) : (
        <>
          {/* Topic Hero Banner */}
          <section className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 md:py-8">
              {/* Return to Home breadcrumb */}
              <button
                onClick={() => {
                  playTapSound();
                  setCurrentView('home');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-200 hover:text-white transition-colors mb-2 sm:mb-3 cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>
                  {language === 'gl' ? '← Volver ao menú de materias' : '← Volver al menú de asignaturas'}
                </span>
              </button>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-emerald-100">
                      {UI_STRINGS.heroBadge[language]}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-200">
                      {UI_STRINGS.heroTopic[language]}
                    </span>
                  </div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-display leading-tight text-white">
                    {UI_STRINGS.heroTitle[language]}
                  </h1>
                  <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                    {UI_STRINGS.heroDesc[language]}
                  </p>
                </div>

                {/* Quick actions in topic hero */}
                <div className="flex flex-wrap items-center gap-2 pt-1 md:pt-0 shrink-0">
                  <button
                    onClick={() => {
                      playTapSound();
                      setTopicMode('debuxo');
                    }}
                    className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95 ${
                      topicMode === 'debuxo'
                        ? 'bg-amber-400 text-slate-900'
                        : 'bg-white text-emerald-900 hover:bg-emerald-50'
                    }`}
                  >
                    <PenTool className="w-4 h-4 text-emerald-700" />
                    <span>{UI_STRINGS.openDrawingBtn[language]}</span>
                  </button>
                  <button
                    onClick={() => {
                      playTapSound();
                      setTopicMode('quiz');
                    }}
                    className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95 ${
                      topicMode === 'quiz'
                        ? 'bg-amber-400 text-slate-900'
                        : 'bg-amber-400 text-slate-900 hover:bg-amber-300'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-amber-800" />
                    <span>{language === 'gl' ? 'Facer o Quiz (20)!' : '¡Hacer el Quiz (20)!'}</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Topic Content Area */}
          <main className="max-w-6xl mx-auto px-3 sm:px-6 py-6 md:py-8 flex-1 w-full">
            {topicMode === 'repaso' && (
              <SectionViewer
                language={language}
                onGoToDrawing={() => {
                  playTapSound();
                  setTopicMode('debuxo');
                }}
                onGoToQuiz={() => {
                  playTapSound();
                  setTopicMode('quiz');
                }}
                onOpenBookPages={() => setIsBookModalOpen(true)}
              />
            )}

            {topicMode === 'debuxo' && (
              <DrawingGuide language={language} />
            )}

            {topicMode === 'quiz' && (
              <QuizMode
                language={language}
                onFinish={() => setTopicMode('repaso')}
              />
            )}
          </main>
        </>
      )}

      {/* Modal with original book pages */}
      <BookPagesModal
        language={language}
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />

      {/* PWA In-App Install Banner / Button */}
      <PWAInstallBanner language={language} />

      {/* Mobile Fixed Bottom Navigation Bar (Bottom Navigation Bar) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-around shadow-lg">
        <button
          onClick={() => {
            playTapSound();
            setCurrentView('home');
          }}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] rounded-xl py-1 px-2 transition-transform active:scale-90 ${
            currentView === 'home' ? 'text-emerald-700 font-extrabold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-tight">
            {language === 'gl' ? 'Inicio' : 'Inicio'}
          </span>
        </button>

        <button
          onClick={() => {
            playTapSound();
            if (currentView !== 'topic') setCurrentView('topic');
            setTopicMode('repaso');
          }}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] rounded-xl py-1 px-2 transition-transform active:scale-90 ${
            currentView === 'topic' && topicMode === 'repaso'
              ? 'text-emerald-700 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-tight">
            {language === 'gl' ? 'Resumo' : 'Resumen'}
          </span>
        </button>

        <button
          onClick={() => {
            playTapSound();
            if (currentView !== 'topic') setCurrentView('topic');
            setTopicMode('debuxo');
          }}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] rounded-xl py-1 px-2 transition-transform active:scale-90 ${
            currentView === 'topic' && topicMode === 'debuxo'
              ? 'text-emerald-700 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <PenTool className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-tight">
            {language === 'gl' ? 'Debuxo' : 'Dibujo'}
          </span>
        </button>

        <button
          onClick={() => {
            playTapSound();
            if (currentView !== 'topic') setCurrentView('topic');
            setTopicMode('quiz');
          }}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] rounded-xl py-1 px-2 transition-transform active:scale-90 ${
            currentView === 'topic' && topicMode === 'quiz'
              ? 'text-amber-600 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Sparkles className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-tight">
            Quiz (20)
          </span>
        </button>
      </nav>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-slate-500 text-xs mt-12 hidden md:block">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-emerald-700" />
            <span className="font-semibold text-slate-700">
              {language === 'gl'
                ? 'Titor Escolar de 3.º de Primaria en Galicia'
                : 'Tutor Escolar de 3.º de Primaria en Galicia'}
            </span>
            <span>·</span>
            <span>
              {language === 'gl'
                ? 'App instalable (PWA) deseñada para tableta e móbil'
                : 'App instalable (PWA) diseñada para tablet y móvil'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {language === 'gl'
                ? 'Fiel aos contidos do libro de Ciencias'
                : 'Fiel a los contenidos del libro de Ciencias'}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
