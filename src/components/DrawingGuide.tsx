import { useState, useRef, useEffect } from 'react';
import { Sparkles, ArrowRight, PenTool, RefreshCw, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import { Language } from '../data/subjects';
import { playTapSound, playSuccessSound } from '../utils/soundEffects';

interface DrawingGuideProps {
  language: Language;
}

export default function DrawingGuide({ language }: DrawingGuideProps) {
  const [selectedElement, setSelectedElement] = useState<'all' | 'auga' | 'sol' | 'co2' | 'oxigeno'>('all');
  const [showLabels, setShowLabels] = useState(true);
  const [activeTab, setActiveTab] = useState<'esquema' | 'pratica'>('esquema');

  // Scratchpad drawing canvas state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState('#2563eb');
  const [penSize, setPenSize] = useState(4);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    if (activeTab === 'pratica' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * 2;
        canvas.height = rect.height * 2;
        ctx.scale(2, 2);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, rect.width, rect.height);

        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.moveTo(20, rect.height * 0.7);
        ctx.lineTo(rect.width - 20, rect.height * 0.7);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }
  }, [activeTab]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setHasDrawn(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.strokeStyle = penColor;
    ctx.lineWidth = penSize;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    playTapSound();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(20, rect.height * 0.7);
    ctx.lineTo(rect.width - 20, rect.height * 0.7);
    ctx.stroke();
    ctx.setLineDash([]);
    setHasDrawn(false);
  };

  const t = {
    title: {
      gl: "Guía de Debuxo de Exame: A Fotosíntese",
      es: "Guía de Dibujo de Examen: La Fotosíntesis"
    },
    subtitle: {
      gl: "Aprende exactamente que frechas debuxar, de que cor e cara a onde apuntan!",
      es: "¡Aprende exactamente qué flechas dibujar, de qué color y hacia dónde apuntan!"
    },
    tabModel: {
      gl: "📐 Modelo de Exame",
      es: "📐 Modelo de Examen"
    },
    tabPractice: {
      gl: "Practicar Debuxo",
      es: "Practicar Dibujo"
    },
    hideLabels: {
      gl: "Ocultar Letreiros",
      es: "Ocultar Rótulos"
    },
    showLabels: {
      gl: "Mostrar Letreiros",
      es: "Mostrar Rótulos"
    },
    viewAll: {
      gl: "Ver todo o debuxo",
      es: "Ver todo el dibujo"
    },
    waterFilter: {
      gl: "🔵 Auga e sales (Entra)",
      es: "🔵 Agua y sales (Entra)"
    },
    sunFilter: {
      gl: "🟡 Luz solar (Entra)",
      es: "🟡 Luz solar (Entra)"
    },
    co2Filter: {
      gl: "🔴 Dióxido carbono (Entra)",
      es: "🔴 Dióxido carbono (Entra)"
    },
    oxygenFilter: {
      gl: "🟢 Osíxeno (Sae!)",
      es: "🟢 Oxígeno (¡Sale!)"
    },
    ruleTitle: {
      gl: "A Regra de Ouro do Exame:",
      es: "La Regla de Oro del Examen:"
    },
    whatEntersTitle: {
      gl: "📥 QUE ENTRA (3 cousas):",
      es: "📥 QUÉ ENTRA (3 cosas):"
    },
    whatEntersPoints: {
      gl: [
        "• 💧 Auga e sales (Polas raíces)",
        "• ☀️ Luz do Sol (Nas follas)",
        "• 💨 Dióxido de carbono (Nas follas)"
      ],
      es: [
        "• 💧 Agua y sales (Por las raíces)",
        "• ☀️ Luz del Sol (En las hojas)",
        "• 💨 Dióxido de carbono (En las hojas)"
      ]
    },
    whatLeavesTitle: {
      gl: "📤 QUE SAE (O tesouro):",
      es: "📤 QUÉ SALE (El tesoro):"
    },
    whatLeavesPoints: {
      gl: [
        "• 🍃 Osíxeno puro expulsado ao aire.",
        "• 🥗 O alimento para a propia planta."
      ],
      es: [
        "• 🍃 Oxígeno puro expulsado al aire.",
        "• 🥗 El alimento para la propia planta."
      ]
    },
    stepsTitle: {
      gl: "Pasos para debuxalo coas túas pinturas:",
      es: "Pasos para dibujarlo con tus pinturas:"
    },
    steps: {
      gl: [
        {
          num: "1️⃣",
          color: "Pintura Azul:",
          text: "Debuxa frechas dende a terra húmida cara ás raíces e subindo polo talo: «Auga e sales minerais»."
        },
        {
          num: "2️⃣",
          color: "Pintura Amarela:",
          text: "Debuxa o Sol e frechas que van caendo sobre as follas: «Luz solar»."
        },
        {
          num: "3️⃣",
          color: "Pintura Vermella ou Laranxa:",
          text: "Frecha do aire entrando directamente na folla: «Dióxido de carbono (CO₂)»."
        },
        {
          num: "4️⃣",
          color: "Pintura Verde brillante:",
          text: "Frecha que sae triunfante da folla cara ao ceo: «Osíxeno (O₂)»."
        }
      ],
      es: [
        {
          num: "1️⃣",
          color: "Pintura Azul:",
          text: "Dibuja flechas desde la tierra húmeda hacia las raíces y subiendo por el tallo: «Agua y sales minerales»."
        },
        {
          num: "2️⃣",
          color: "Pintura Amarilla:",
          text: "Dibuja el Sol y flechas cayendo sobre las hojas: «Luz solar»."
        },
        {
          num: "3️⃣",
          color: "Pintura Roja o Naranja:",
          text: "Flecha desde el aire entrando directamente en la hoja: «Dióxido de carbono (CO₂)»."
        },
        {
          num: "4️⃣",
          color: "Pintura Verde brillante:",
          text: "Flecha que sale triunfante de la hoja hacia el cielo: «Oxígeno (O₂)»."
        }
      ]
    },
    soilLabel: {
      gl: "Chan / Terra",
      es: "Suelo / Tierra"
    },
    sunLabel: {
      gl: "Sol",
      es: "Sol"
    },
    waterBadge: {
      gl: "💧 Auga e sales minerais",
      es: "💧 Agua y sales minerales"
    },
    sunBadge: {
      gl: "☀️ Luz solar (Enerxía)",
      es: "☀️ Luz solar (Energía)"
    },
    co2Badge: {
      gl: "💨 Dióxido de carbono",
      es: "💨 Dióxido de carbono"
    },
    oxygenBadge: {
      gl: "🍃 Osíxeno (Sae!)",
      es: "🍃 Oxígeno (¡Sale!)"
    },
    drawingPalette: {
      gl: "Pinturas de cores:",
      es: "Pinturas de colores:"
    },
    clearAll: {
      gl: "Borrar todo",
      es: "Borrar todo"
    },
    emptyPromptTitle: {
      gl: "Usa o dedo ou o rato para debuxar aquí a túa planta de exame!",
      es: "¡Usa el dedo o ratón para dibujar aquí tu planta de examen!"
    },
    emptyPromptDesc: {
      gl: "Debuxa: O chan e a raíz (marrón), o talo e as follas (verde), o Sol (amarelo) e as 4 frechas de cores.",
      es: "Dibuja: El suelo y la raíz (marrón), el tallo y las hojas (verde), el Sol (amarillo) y las 4 flechas de colores."
    },
    checkBtn: {
      gl: "Comprobar con éxito! 🌟",
      es: "¡Comprobar con éxito! 🌟"
    },
    congratsAlert: {
      gl: "🌟 Que artista! O teu debuxo quedou fantástico. Continúa así para sacar un sobresaliente!",
      es: "🌟 ¡Qué artista! Tu dibujo ha quedado genial. ¡Sigue así para sacar un sobresaliente!"
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Controller */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 md:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🎨</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display">
                {t.title[language]}
              </h2>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              {t.subtitle[language]}
            </p>
          </div>

          {/* Mode Switch: Modelo interactivo vs Caderno de práctica */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
            <button
              onClick={() => { playTapSound(); setActiveTab('esquema'); }}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'esquema'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.tabModel[language]}
            </button>
            <button
              onClick={() => { playTapSound(); setActiveTab('pratica'); }}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'pratica'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>{t.tabPractice[language]}</span>
            </button>
          </div>
        </div>

        {activeTab === 'esquema' ? (
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Visual Diagram Canvas (Left 7 cols) */}
            <div className="lg:col-span-7 bg-gradient-to-b from-sky-50 via-white to-amber-50/40 rounded-2xl p-4 border border-slate-200 relative overflow-hidden">
              {/* Toggle label visibility */}
              <button
                onClick={() => { playTapSound(); setShowLabels(!showLabels); }}
                className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-sm hover:bg-white z-10 cursor-pointer"
              >
                {showLabels ? <EyeOff className="w-3.5 h-3.5 text-slate-500" /> : <Eye className="w-3.5 h-3.5 text-emerald-600" />}
                <span>{showLabels ? t.hideLabels[language] : t.showLabels[language]}</span>
              </button>

              {/* Plant SVG Diagram */}
              <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                <svg viewBox="0 0 500 400" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
                  {/* Sky & Sun */}
                  <g id="sol-element" className={`transition-opacity duration-300 ${selectedElement === 'all' || selectedElement === 'sol' ? 'opacity-100' : 'opacity-25'}`}>
                    <circle cx="420" cy="70" r="32" fill="#FBBF24" />
                    <circle cx="420" cy="70" r="38" fill="#FDE68A" opacity="0.4" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                      const rad = (angle * Math.PI) / 180;
                      const x1 = 420 + Math.cos(rad) * 44;
                      const y1 = 70 + Math.sin(rad) * 44;
                      const x2 = 420 + Math.cos(rad) * 56;
                      const y2 = 70 + Math.sin(rad) * 56;
                      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />;
                    })}
                    <text x="420" y="74" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#78350F">{t.sunLabel[language]}</text>
                  </g>

                  {/* Ground & Soil */}
                  <path d="M 0 310 Q 250 305 500 310 L 500 400 L 0 400 Z" fill="#D6C4AA" />
                  <line x1="0" y1="310" x2="500" y2="310" stroke="#8D6E63" strokeWidth="4" />
                  <text x="35" y="340" fontSize="13" fontWeight="bold" fill="#5D4037">{t.soilLabel[language]}</text>

                  {/* Plant Roots */}
                  <g id="roots">
                    <path d="M 250 310 Q 252 350 250 380" stroke="#795548" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <path d="M 250 325 Q 220 345 195 365" stroke="#8D6E63" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M 250 335 Q 280 355 315 370" stroke="#8D6E63" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M 250 350 Q 230 370 210 385" stroke="#A1887F" strokeWidth="3" strokeLinecap="round" fill="none" />
                    <path d="M 250 355 Q 275 375 290 388" stroke="#A1887F" strokeWidth="3" strokeLinecap="round" fill="none" />
                    <path d="M 205 355 Q 190 360 185 370" stroke="#BCAAA4" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M 300 362 Q 320 370 325 380" stroke="#BCAAA4" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </g>

                  {/* Stem / Talo */}
                  <path d="M 250 310 C 248 240 252 170 250 110" stroke="#16A34A" strokeWidth="8" strokeLinecap="round" fill="none" />
                  <path d="M 250 110 C 249 90 251 75 250 65" stroke="#22C55E" strokeWidth="5" strokeLinecap="round" fill="none" />

                  {/* Left Leaf */}
                  <g id="left-leaf">
                    <path d="M 250 220 C 180 200 130 150 140 120 C 170 125 220 170 250 190" fill="#22C55E" stroke="#15803D" strokeWidth="3" />
                    <path d="M 250 200 Q 185 155 145 125" stroke="#15803D" strokeWidth="2" fill="none" />
                    <path d="M 215 178 Q 200 160 195 145" stroke="#16A34A" strokeWidth="1.5" fill="none" />
                    <path d="M 185 155 Q 170 142 165 130" stroke="#16A34A" strokeWidth="1.5" fill="none" />
                  </g>

                  {/* Right Leaf */}
                  <g id="right-leaf">
                    <path d="M 250 170 C 310 145 365 110 380 95 C 360 135 315 180 250 195" fill="#16A34A" stroke="#15803D" strokeWidth="3" />
                    <path d="M 250 180 Q 320 135 375 100" stroke="#15803D" strokeWidth="2" fill="none" />
                    <path d="M 285 160 Q 305 140 315 125" stroke="#22C55E" strokeWidth="1.5" fill="none" />
                    <path d="M 320 138 Q 340 122 350 108" stroke="#22C55E" strokeWidth="1.5" fill="none" />
                  </g>

                  {/* Top Young Leaf */}
                  <path d="M 250 110 C 235 80 230 50 250 40 C 270 50 265 80 250 110" fill="#4ADE80" stroke="#16A34A" strokeWidth="2" />

                  {/* ================= FRECHAS DE CORES DO EXAME ================= */}

                  {/* 1. FRECHA AZUL */}
                  <g id="frecha-azul" className={`transition-all duration-300 ${selectedElement === 'all' || selectedElement === 'auga' ? 'opacity-100' : 'opacity-20'}`}>
                    <path d="M 160 365 Q 190 355 210 350" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" fill="none" markerEnd="url(#arrow-blue)" />
                    <path d="M 330 370 Q 300 360 280 350" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" fill="none" markerEnd="url(#arrow-blue)" />
                    <path d="M 248 310 L 248 230" stroke="#0284C7" strokeWidth="4" strokeDasharray="5,4" fill="none" markerEnd="url(#arrow-blue)" />
                    {showLabels && (
                      <g>
                        <rect x="65" y="365" width="165" height="26" rx="6" fill="#0284C7" />
                        <text x="147" y="382" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ffffff">
                          {t.waterBadge[language]}
                        </text>
                      </g>
                    )}
                  </g>

                  {/* 2. FRECHA AMARELA */}
                  <g id="frecha-amarela" className={`transition-all duration-300 ${selectedElement === 'all' || selectedElement === 'sol' ? 'opacity-100' : 'opacity-20'}`}>
                    <path d="M 380 90 Q 340 110 320 135" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" fill="none" markerEnd="url(#arrow-yellow)" />
                    <path d="M 400 110 Q 370 140 345 155" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" fill="none" markerEnd="url(#arrow-yellow)" />
                    {showLabels && (
                      <g>
                        <rect x="325" y="15" width="145" height="24" rx="6" fill="#F59E0B" />
                        <text x="397" y="31" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ffffff">
                          {t.sunBadge[language]}
                        </text>
                      </g>
                    )}
                  </g>

                  {/* 3. FRECHA VERMELLA */}
                  <g id="frecha-vermella" className={`transition-all duration-300 ${selectedElement === 'all' || selectedElement === 'co2' ? 'opacity-100' : 'opacity-20'}`}>
                    <path d="M 50 160 Q 90 155 130 150" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" fill="none" markerEnd="url(#arrow-red)" />
                    {showLabels && (
                      <g>
                        <rect x="15" y="125" width="125" height="26" rx="6" fill="#DC2626" />
                        <text x="77" y="142" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ffffff">
                          {t.co2Badge[language]}
                        </text>
                      </g>
                    )}
                  </g>

                  {/* 4. FRECHA VERDE */}
                  <g id="frecha-verde" className={`transition-all duration-300 ${selectedElement === 'all' || selectedElement === 'oxigeno' ? 'opacity-100' : 'opacity-20'}`}>
                    <path d="M 180 120 Q 150 90 120 75" stroke="#16A34A" strokeWidth="5" strokeLinecap="round" fill="none" markerEnd="url(#arrow-green)" />
                    {showLabels && (
                      <g>
                        <rect x="60" y="45" width="120" height="26" rx="6" fill="#16A34A" />
                        <text x="120" y="62" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ffffff">
                          {t.oxygenBadge[language]}
                        </text>
                      </g>
                    )}
                  </g>

                  <defs>
                    <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 9 5 L 0 9 z" fill="#0284C7" />
                    </marker>
                    <marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 9 5 L 0 9 z" fill="#F59E0B" />
                    </marker>
                    <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 9 5 L 0 9 z" fill="#DC2626" />
                    </marker>
                    <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 9 5 L 0 9 z" fill="#16A34A" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Quick filter pill buttons */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                <button
                  onClick={() => { playTapSound(); setSelectedElement('all'); }}
                  className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
                    selectedElement === 'all'
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {t.viewAll[language]}
                </button>
                <button
                  onClick={() => { playTapSound(); setSelectedElement('auga'); }}
                  className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
                    selectedElement === 'auga'
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'bg-white text-sky-700 border border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  {t.waterFilter[language]}
                </button>
                <button
                  onClick={() => { playTapSound(); setSelectedElement('sol'); }}
                  className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
                    selectedElement === 'sol'
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'bg-white text-amber-700 border border-amber-200 hover:bg-amber-50'
                  }`}
                >
                  {t.sunFilter[language]}
                </button>
                <button
                  onClick={() => { playTapSound(); setSelectedElement('co2'); }}
                  className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
                    selectedElement === 'co2'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'bg-white text-red-700 border border-red-200 hover:bg-red-50'
                  }`}
                >
                  {t.co2Filter[language]}
                </button>
                <button
                  onClick={() => { playTapSound(); setSelectedElement('oxigeno'); }}
                  className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
                    selectedElement === 'oxigeno'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  {t.oxygenFilter[language]}
                </button>
              </div>
            </div>

            {/* Checklist & Color Guide (Right 5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>{t.ruleTitle[language]}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white p-2.5 rounded-lg border border-emerald-100 shadow-2xs">
                    <span className="font-bold text-slate-800 block mb-1">{t.whatEntersTitle[language]}</span>
                    <ul className="space-y-1 text-slate-600">
                      {t.whatEntersPoints[language].map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-emerald-100 shadow-2xs">
                    <span className="font-bold text-emerald-700 block mb-1">{t.whatLeavesTitle[language]}</span>
                    <ul className="space-y-1 text-slate-600">
                      {t.whatLeavesPoints[language].map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Instructions list for notebook */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t.stepsTitle[language]}</span>
                </h4>
                <div className="space-y-2 text-xs text-slate-700">
                  {t.steps[language].map((step, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2"
                    >
                      <span className="text-base leading-none">{step.num}</span>
                      <div>
                        <strong className="text-slate-900">{step.color}</strong> {step.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Práctica no Encerado Dixital */
          <div className="pt-4 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-700">{t.drawingPalette[language]}</span>
                <div className="flex items-center gap-1.5">
                  {[
                    { color: '#2563eb', label: 'Azul (Auga)' },
                    { color: '#eab308', label: 'Amarelo (Sol)' },
                    { color: '#dc2626', label: 'Vermello (CO₂)' },
                    { color: '#16a34a', label: 'Verde (Osíxeno / Follas)' },
                    { color: '#854d0e', label: 'Marrón (Chan / Raíz)' },
                    { color: '#0f172a', label: 'Negro (Letras)' }
                  ].map((item) => (
                    <button
                      key={item.color}
                      onClick={() => { playTapSound(); setPenColor(item.color); }}
                      title={item.label}
                      className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
                        penColor === item.color ? 'scale-125 border-slate-900 shadow-md ring-2 ring-slate-300' : 'border-white hover:scale-110'
                      }`}
                      style={{ backgroundColor: item.color }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPenSize(3)}
                  className={`px-2 py-1 text-xs rounded cursor-pointer ${penSize === 3 ? 'bg-slate-800 text-white' : 'bg-white border text-slate-700'}`}
                >
                  {language === 'gl' ? 'Fino' : 'Fino'}
                </button>
                <button
                  onClick={() => setPenSize(6)}
                  className={`px-2 py-1 text-xs rounded cursor-pointer ${penSize === 6 ? 'bg-slate-800 text-white' : 'bg-white border text-slate-700'}`}
                >
                  {language === 'gl' ? 'Medio' : 'Medio'}
                </button>
                <button
                  onClick={() => setPenSize(10)}
                  className={`px-2 py-1 text-xs rounded cursor-pointer ${penSize === 10 ? 'bg-slate-800 text-white' : 'bg-white border text-slate-700'}`}
                >
                  {language === 'gl' ? 'Groso' : 'Grueso'}
                </button>
                <button
                  onClick={clearCanvas}
                  className="px-3 py-1 text-xs rounded bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 flex items-center gap-1 ml-2 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>{t.clearAll[language]}</span>
                </button>
              </div>
            </div>

            {/* Drawing Area */}
            <div className="relative border-2 border-dashed border-slate-300 rounded-2xl overflow-hidden bg-white shadow-inner">
              <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="w-full h-80 md:h-96 touch-none cursor-crosshair block"
              />
              {!hasDrawn && (
                <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                  <PenTool className="w-8 h-8 mb-2 opacity-50" />
                  <p className="font-semibold text-sm">{t.emptyPromptTitle[language]}</p>
                  <p className="text-xs text-slate-400 mt-1 max-w-md">
                    {t.emptyPromptDesc[language]}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>
                {language === 'gl'
                  ? '💡 Podes practicar cantas veces queiras antes do exame!'
                  : '💡 ¡Puedes practicar tantas veces como quieras antes del examen!'}
              </span>
              <button
                onClick={() => {
                  playSuccessSound();
                  alert(t.congratsAlert[language]);
                }}
                className="px-4 py-1.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-sm cursor-pointer"
              >
                {t.checkBtn[language]}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
