import { useState, useEffect } from 'react';
import { Download, X, Smartphone, Sparkles, CheckCircle2, MoreVertical } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Language } from '../data/subjects';
import { playTapSound, playSuccessSound } from '../utils/soundEffects';

interface PWAInstallBannerProps {
  language: Language;
}

export default function PWAInstallBanner({ language }: PWAInstallBannerProps) {
  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();
  const [isDismissed, setIsDismissed] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);

  // Check if dismissed previously in session
  useEffect(() => {
    const dismissed = sessionStorage.getItem('pwa_banner_dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    playTapSound();
    setIsDismissed(true);
    sessionStorage.setItem('pwa_banner_dismissed', 'true');
  };

  const handleInstallClick = async () => {
    playTapSound();
    if (isInstallable) {
      const ok = await install();
      if (ok) playSuccessSound();
    } else {
      // Show manual guide for Android Chrome or iOS
      setShowGuideModal(true);
    }
  };

  if (isInstalled || isDismissed) {
    return null;
  }

  const t = {
    installBtn: {
      gl: "📲 Instalar App Estudo",
      es: "📲 Instalar App Estudo"
    },
    subtext: {
      gl: "Instálaa na tableta ou móbil coma unha app real!",
      es: "¡Instálala en la tablet o móvil como una app real!"
    },
    guideTitle: {
      gl: "Como instalar a app «Estudo»",
      es: "Cómo instalar la app «Estudo»"
    },
    androidSteps: {
      gl: [
        "1. No navegador Google Chrome, preme no botón dos tres puntiños (⋮) arriba á dereita.",
        "2. Escolle a opción «Instalar aplicación» ou «Engadir á pantalla de inicio».",
        "3. Preme en «Instalar» e xa terás a icona verde de Estudo na pantalla!"
      ],
      es: [
        "1. En el navegador Google Chrome, pulsa en los tres puntos (⋮) arriba a la derecha.",
        "2. Elige la opción «Instalar aplicación» o «Añadir a pantalla de inicio».",
        "3. Pulsa en «Instalar» ¡y ya tendrás el icono verde de Estudo en tu pantalla!"
      ]
    },
    iosSteps: {
      gl: [
        "1. En Safari, preme no botón Compartir 📤 na parte inferior.",
        "2. Baixa e selecciona «Engadir á pantalla de inicio» ➕.",
        "3. Preme en «Engadir» arriba á dereita."
      ],
      es: [
        "1. En Safari, pulsa el botón Compartir 📤 en la barra inferior.",
        "2. Baja y selecciona «Añadir a pantalla de inicio» ➕.",
        "3. Pulsa en «Añadir» arriba a la derecha."
      ]
    },
    closeBtn: {
      gl: "Entendido!",
      es: "¡Entendido!"
    }
  };

  return (
    <>
      {/* Floating Pill Banner on Mobile/Tablet */}
      <div className="fixed bottom-20 md:bottom-6 right-3 md:right-6 z-40 max-w-sm animate-bounce-subtle">
        <div className="bg-emerald-800 text-white p-2.5 md:p-3 rounded-2xl shadow-xl border border-emerald-600/50 flex items-center gap-3 backdrop-blur-md">
          <img
            src="/icon-192.png"
            alt="Estudo Logo"
            className="w-10 h-10 rounded-xl shadow-xs border border-white/20 shrink-0 object-cover"
          />

          <div className="flex-1 min-w-0 pr-1">
            <button
              onClick={handleInstallClick}
              className="text-xs md:text-sm font-extrabold text-white hover:text-emerald-200 transition-colors flex items-center gap-1.5 cursor-pointer text-left font-display"
            >
              <span>{t.installBtn[language]}</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            </button>
            <p className="text-[11px] text-emerald-200 truncate">
              {t.subtext[language]}
            </p>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={handleInstallClick}
              className="bg-amber-400 hover:bg-amber-300 text-slate-900 px-3 py-1.5 rounded-xl font-bold text-xs shadow-xs transition-transform active:scale-95 cursor-pointer flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Instalar</span>
            </button>
            <button
              onClick={handleDismiss}
              title="Pechar"
              className="p-1 text-emerald-300 hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Manual Installation Guide Modal */}
      {showGuideModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-scale-up">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center text-xl">
                  📱
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  {t.guideTitle[language]}
                </h3>
              </div>
              <button
                onClick={() => setShowGuideModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-2xl border border-emerald-200">
              <img
                src="/icon-192.png"
                alt="Logo"
                className="w-12 h-12 rounded-xl object-cover shadow-2xs border border-emerald-300"
              />
              <div>
                <span className="text-xs font-bold text-emerald-900 block font-display">
                  App Estudo (3.º de Primaria)
                </span>
                <span className="text-[11px] text-emerald-700">
                  {language === 'gl'
                    ? 'Sen barras do navegador, rápida e a pantalla completa!'
                    : '¡Sin barras de navegador, rápida y a pantalla completa!'}
                </span>
              </div>
            </div>

            {/* Steps based on platform */}
            <div className="space-y-2.5 text-xs text-slate-700">
              <span className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                {isIOS ? <Smartphone className="w-4 h-4 text-emerald-600" /> : <MoreVertical className="w-4 h-4 text-emerald-600" />}
                <span>
                  {isIOS
                    ? language === 'gl' ? 'Instalación en iPhone / iPad (Safari):' : 'Instalación en iPhone / iPad (Safari):'
                    : language === 'gl' ? 'Instalación en Android (Google Chrome):' : 'Instalación en Android (Google Chrome):'}
                </span>
              </span>

              <div className="space-y-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                {(isIOS ? t.iosSteps[language] : t.androidSteps[language]).map((step, idx) => (
                  <p key={idx} className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </p>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                playTapSound();
                setShowGuideModal(false);
              }}
              className="w-full py-3 bg-emerald-700 text-white rounded-xl font-bold text-xs hover:bg-emerald-800 transition-colors shadow-sm cursor-pointer"
            >
              {t.closeBtn[language]}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
