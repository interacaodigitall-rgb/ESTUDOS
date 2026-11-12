import { Language } from './subjects';

export interface LocalizedText {
  gl: string;
  es: string;
}

export interface StudySection {
  id: number;
  emoji: string;
  shortTitle: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  examTip: LocalizedText;
  cards: {
    title: LocalizedText;
    icon: string;
    accentColor: string;
    points: {
      gl: string[];
      es: string[];
    };
    highlight?: LocalizedText;
  }[];
  comparisonTable?: {
    headers: {
      gl: string[];
      es: string[];
    };
    rows: {
      name: LocalizedText;
      feature: LocalizedText;
      example: LocalizedText;
      example2: LocalizedText;
    }[];
  };
}

export interface QuizQuestion {
  id: number;
  question: LocalizedText;
  options: {
    letter: string;
    text: LocalizedText;
  }[];
  correctAnswer: string;
  hint: LocalizedText;
  explanation: LocalizedText;
  funFact: LocalizedText;
}

export const STUDY_SECTIONS: StudySection[] = [
  {
    id: 1,
    emoji: "🌱",
    shortTitle: {
      gl: "Funcións vitais",
      es: "Funciones vitales"
    },
    title: {
      gl: "1️⃣ As tres funcións vitais nas plantas",
      es: "1️⃣ Las tres funciones vitales en las plantas"
    },
    summary: {
      gl: "As plantas son seres vivos, e igual ca nós realizan tres funcións fundamentais, pero fano ao seu propio xeito!",
      es: "Las plantas son seres vivos y, al igual que nosotros, realizan tres funciones fundamentales, ¡pero a su manera única!"
    },
    examTip: {
      gl: "No exame poden preguntarche as 3 funcións: Nutrición, Relación e Reprodución. Apréndeas coma un trío inseparable!",
      es: "En el examen pueden preguntarte las 3 funciones: Nutrición, Relación y Reproducción. ¡Recuérdalas como un trío inseparable!"
    },
    cards: [
      {
        title: {
          gl: "1. Nutrición (Autótrofa)",
          es: "1. Nutrición (Autótrofa)"
        },
        icon: "🥗",
        accentColor: "emerald",
        points: {
          gl: [
            "Non comen outros seres vivos: fabrican o seu propio alimento.",
            "Usan catro ingredientes: auga, sales minerais, dióxido de carbono e luz solar.",
            "O proceso chámase fotosíntese.",
            "Tamén respiran día e noite: toman osíxeno e expulsan dióxido de carbono."
          ],
          es: [
            "No comen otros seres vivos: fabrican su propio alimento.",
            "Usan cuatro ingredientes: agua, sales minerales, dióxido de carbono y luz solar.",
            "Este proceso se llama fotosíntesis.",
            "También respiran día y noche: toman oxígeno y expulsan dióxido de carbono."
          ]
        },
        highlight: {
          gl: "Fabricar o seu propio alimento chámase nutrición autótrofa!",
          es: "¡Fabricar su propio alimento se llama nutrición autótrofa!"
        }
      },
      {
        title: {
          gl: "2. Relación (Reaccionan ao medio)",
          es: "2. Relación (Reaccionan al medio)"
        },
        icon: "☀️",
        accentColor: "amber",
        points: {
          gl: [
            "Non teñen ollos nin orellas e non se desprazan, pero notan o que pasa arredor.",
            "Notan a temperatura: saben cando remata o inverno e botan follas e flores na primavera.",
            "Buscan a luz: os talos xiran e medran cara á luz do sol.",
            "Deféndense: algunhas fan substancias amargas contra insectos e as carnívoras péchanse a toda présa!"
          ],
          es: [
            "No tienen ojos ni oídos y no se desplazan, pero notan lo que pasa alrededor.",
            "Notan la temperatura: saben cuándo termina el invierno y brotan hojas y flores en primavera.",
            "Buscan la luz: los tallos giran y crecen hacia la luz del sol.",
            "Se defienden: algunas crean sustancias amargas contra insectos y ¡las carnívoras se cierran a toda prisa!"
          ]
        },
        highlight: {
          gl: "Non ven nin oen, pero saben perfectamente onde está o Sol!",
          es: "¡No ven ni oyen, pero saben perfectamente dónde está el Sol!"
        }
      },
      {
        title: {
          gl: "3. Reprodución (Crean novas plantas)",
          es: "3. Reproducción (Crean nuevas plantas)"
        },
        icon: "🌸",
        accentColor: "rose",
        points: {
          gl: [
            "A maioría fano a través das flores, que forman froitos e sementes.",
            "Partes da flor: Pistilo (feminino, con forma de botella), Estames (masculinos, fan o pole), Corola (pétalos de cores) e Cáliz (sépalos verdes).",
            "O pole viaxa ao pistilo -> o pistilo medra e convértese en froito con sementes no interior.",
            "Cando a semente cae á terra húmida, nace unha nova plantiña."
          ],
          es: [
            "La mayoría lo hacen a través de las flores, que forman frutos y semillas.",
            "Partes de la flor: Pistilo (femenino, en forma de botella), Estambres (masculinos, producen polen), Corola (pétalos de colores) y Cáliz (sépalos verdes).",
            "El polen viaja al pistilo -> el pistilo crece y se transforma en fruto con semillas dentro.",
            "Cuando la semilla cae al suelo húmedo, nace una nueva plantita."
          ]
        },
        highlight: {
          gl: "Do pistilo sae o froito, e dentro do froito están as sementes!",
          es: "¡Del pistilo sale el fruto, y dentro del fruto están las semillas!"
        }
      }
    ]
  },
  {
    id: 2,
    emoji: "🦠",
    shortTitle: {
      gl: "Clasificación seres vivos",
      es: "Clasificación seres vivos"
    },
    title: {
      gl: "2️⃣ A clasificación dos seres vivos",
      es: "2️⃣ La clasificación de los seres vivos"
    },
    summary: {
      gl: "No noso planeta hai animais e plantas, pero tamén outros seres vivos fascinantes moitas veces invisibles a simple vista!",
      es: "En nuestro planeta hay animales y plantas, pero también otros seres vivos fascinantes muchas veces invisibles a simple vista."
    },
    examTip: {
      gl: "Moito ollo no exame: as algas e os fungos NON son plantas! As algas fan fotosíntese na auga, e os fungos comen restos do chan.",
      es: "¡Mucho ojo en el examen: las algas y los hongos NO son plantas! Las algas hacen fotosíntesis en el agua, y los hongos comen restos del suelo."
    },
    cards: [
      {
        title: { gl: "As Plantas", es: "Las Plantas" },
        icon: "🌲",
        accentColor: "emerald",
        points: {
          gl: ["Son verdes e viven fixas ao chan.", "Fabrican o seu propio alimento coa luz solar."],
          es: ["Son verdes y viven fijas al suelo.", "Fabrican su propio alimento con la luz solar."]
        }
      },
      {
        title: { gl: "Os Animais", es: "Los Animales" },
        icon: "🦊",
        accentColor: "blue",
        points: {
          gl: ["Poden desprazarse dun lugar a outro.", "Aliméntanse doutros seres vivos (animais ou plantas)."],
          es: ["Pueden desplazarse de un lugar a otro.", "Se alimentan de otros seres vivos (animales o plantas)."]
        }
      },
      {
        title: { gl: "As Bacterias", es: "Las Bacterias" },
        icon: "🧫",
        accentColor: "purple",
        points: {
          gl: [
            "Son os seres vivos máis pequeniños que existen (microscópicos).",
            "Viven en todas partes: aire, chan, auga, xeo e dentro de nós!",
            "Formas: redondiñas, alargadas ou en espiral.",
            "Beneficios: axúdannos a facer o queixo e o iogur!"
          ],
          es: [
            "Son los seres vivos más pequeños que existen (microscópicos).",
            "Viven en todas partes: aire, suelo, agua, hielo y dentro de nosotros.",
            "Formas: redonditas, alargadas o en espiral.",
            "Beneficios: ¡nos ayudan a hacer el queso y el yogur!"
          ]
        },
        highlight: {
          gl: "Non todas dan enfermidades: a maioría son moi boas e útiles!",
          es: "¡No todas causan enfermedades: la gran mayoría son muy buenas y útiles!"
        }
      },
      {
        title: { gl: "Os Protozoos", es: "Los Protozoos" },
        icon: "🔬",
        accentColor: "indigo",
        points: {
          gl: [
            "Máis grandes e complexos cas bacterias.",
            "Viven na auga e noutros seres vivos.",
            "Comen bacterias, axudando moito a limpar as augas naturais!",
            "Algúns poden producir enfermidades como a malaria."
          ],
          es: [
            "Más grandes y complejos que las bacterias.",
            "Viven en el agua y en otros seres vivos.",
            "Comen bacterias, ¡ayudando a limpiar las aguas naturales!",
            "Algunos pueden producir enfermedades como la malaria."
          ]
        }
      },
      {
        title: { gl: "As Algas", es: "Las Algas" },
        icon: "🌊",
        accentColor: "teal",
        points: {
          gl: [
            "Viven na auga doce e salgada.",
            "Fan a fotosíntese: fabrican o seu alimento e dan osíxeno.",
            "Hai algas microscópicas e outras xigantes (verdes, vermellas ou pardas).",
            "Úsanse na comida, coma nas follas do sushi!"
          ],
          es: [
            "Viven en el agua dulce y salada.",
            "Hacen la fotosíntesis: fabrican su alimento y producen oxígeno.",
            "Hay algas microscópicas y otras gigantes (verdes, rojas o pardas).",
            "Se usan en la comida, ¡como en las hojas de sushi!"
          ]
        }
      },
      {
        title: { gl: "Os Fungos", es: "Los Hongos" },
        icon: "🍄",
        accentColor: "amber",
        points: {
          gl: [
            "NON fan fotosíntese: aliméntanse de restos en descomposición.",
            "Fungos dunha soa célula: os lévedos (para facer o pan!).",
            "Fungos de moitas células: os cogomelos ou o mofo nas froitas.",
            "Axudan a fabricar menciñas importantes como os antibióticos."
          ],
          es: [
            "NO hacen fotosíntesis: se alimentan de restos en descomposición.",
            "Hongos de una sola célula: las levaduras (¡para hacer pan!).",
            "Hongos de muchas células: las setas o el moho en la fruta.",
            "Ayudan a fabricar medicinas importantes como los antibióticos."
          ]
        }
      }
    ],
    comparisonTable: {
      headers: {
        gl: ["Grupo", "Onde viven?", "Como se alimentan?", "Dato curioso ou beneficio"],
        es: ["Grupo", "¿Dónde viven?", "¿Cómo se alimentan?", "Dato curioso o beneficio"]
      },
      rows: [
        {
          name: { gl: "Bacterias", es: "Bacterias" },
          feature: { gl: "En todas as partes (aire, xeo, chan...)", es: "En todas partes (aire, hielo, suelo...)" },
          example: { gl: "Moi variadas", es: "Muy variadas" },
          example2: { gl: "Fan o iogur e o queixo 🧀", es: "Hacen el yogur y el queso 🧀" }
        },
        {
          name: { gl: "Protozoos", es: "Protozoos" },
          feature: { gl: "Na auga principalmente", es: "En el agua principalmente" },
          example: { gl: "Comen bacterias", es: "Comen bacterias" },
          example2: { gl: "Limpan a auga de microbios 💧", es: "Limpian el agua de microbios 💧" }
        },
        {
          name: { gl: "Algas", es: "Algas" },
          feature: { gl: "Na auga doce e salgada", es: "En agua dulce y salada" },
          example: { gl: "Fotosíntese (con luz)", es: "Fotosíntesis (con luz)" },
          example2: { gl: "Comémolas no sushi! 🍣", es: "¡Las comemos en el sushi! 🍣" }
        },
        {
          name: { gl: "Fungos", es: "Hongos" },
          feature: { gl: "Chan húmido, árbores, comida vella", es: "Suelo húmedo, árboles, comida vieja" },
          example: { gl: "Comen restos orgánicos", es: "Comen restos orgánicos" },
          example2: { gl: "Lévedos do pan e cogomelos 🍞", es: "Levadura del pan y setas 🍞" }
        }
      ]
    }
  },
  {
    id: 3,
    emoji: "🌿",
    shortTitle: {
      gl: "Partes das plantas",
      es: "Partes de las plantas"
    },
    title: {
      gl: "3️⃣ As partes das plantas e as súas funcións",
      es: "3️⃣ Las partes de las plantas y sus funciones"
    },
    summary: {
      gl: "O corpo dunha planta típica está organizado en tres partes principais que traballan en equipo.",
      es: "El cuerpo de una planta típica está organizado en tres partes principales que trabajan en equipo."
    },
    examTip: {
      gl: "Lembra ben: Raíz (abaixo / absorbe), Talo (no medio / sostén e transporta), Follas (arriba / cociñan o alimento).",
      es: "Recuerda bien: Raíz (abajo / absorbe), Tallo (en medio / sostiene y transporta), Hojas (arriba / cocinan el alimento)."
    },
    cards: [
      {
        title: { gl: "1. A Raíz (Debaixo da terra)", es: "1. La Raíz (Bajo tierra)" },
        icon: "🥔",
        accentColor: "amber",
        points: {
          gl: [
            "Suxeita con forza a planta ao chan para que non caia co vento.",
            "Absorbe a auga e os sales minerais da terra húmida.",
            "Ten pelos absorbentes moi pequenos para chupar mellor a auga."
          ],
          es: [
            "Sujeta con fuerza la planta al suelo para que no caiga con el viento.",
            "Absorbe el agua y las sales minerales de la tierra húmeda.",
            "Tiene pelos absorbentes muy pequeños para absorber mejor el agua."
          ]
        },
        highlight: {
          gl: "A raíz actúa coma unha palliña que bebe da terra!",
          es: "¡La raíz actúa como una pajita que bebe de la tierra!"
        }
      },
      {
        title: { gl: "2. O Talo (A columna vertebral)", es: "2. El Tallo (La columna vertebral)" },
        icon: "🎋",
        accentColor: "emerald",
        points: {
          gl: [
            "Sostén as follas, as flores e os froitos ergueitos cara ao sol.",
            "Transporta a auga e os minerais dende as raíces ata as follas.",
            "Distribúe o alimento elaborado polo resto da planta.",
            "Tipos: Grosos e duros (tronco das árbores) ou delgados e flexibles (herbas e flores)."
          ],
          es: [
            "Sostiene las hojas, las flores y los frutos erguidos hacia el sol.",
            "Transporta el agua y los minerales desde las raíces hasta las hojas.",
            "Distribuye el alimento elaborado por el resto de la planta.",
            "Tipos: Gruesos y duros (tronco de los árboles) o delgados y flexibles (hierbas y flores)."
          ]
        },
        highlight: {
          gl: "O talo é o ascensor que leva a auga cara arriba!",
          es: "¡El tallo es el ascensor que lleva el agua hacia arriba!"
        }
      },
      {
        title: { gl: "3. As Follas (A cociña verde)", es: "3. Las Hojas (La cocina verde)" },
        icon: "🍃",
        accentColor: "lime",
        points: {
          gl: [
            "Son as encargadas de facer a fotosíntese.",
            "Captan a luz do sol e absorben o dióxido de carbono do aire.",
            "Expulsan o osíxeno puro ao aire.",
            "Teñen formas moi diversas: redondas, afiadas coma agullas, en abano..."
          ],
          es: [
            "Son las encargadas de hacer la fotosíntesis.",
            "Captan la luz del sol y absorben el dióxido de carbono del aire.",
            "Expulsan el oxígeno puro al aire.",
            "Tienen formas muy diversas: redondeadas, afiladas como agujas, en abanico..."
          ]
        },
        highlight: {
          gl: "Na folla xúntanse todos os ingredientes para cociñar o alimento!",
          es: "¡En la hoja se juntan todos los ingredientes para cocinar el alimento!"
        }
      }
    ]
  },
  {
    id: 4,
    emoji: "⭐",
    shortTitle: {
      gl: "4 Características comúns",
      es: "4 Características comunes"
    },
    title: {
      gl: "4️⃣ As 4 características que teñen en común todas as plantas",
      es: "4️⃣ Las 4 características que tienen en común todas las plantas"
    },
    summary: {
      gl: "Se ves un ser vivo no campo e queres saber con seguridade se é unha planta, comproba estes 4 puntos do libro:",
      es: "Si ves un ser vivo en el campo y quieres saber si es una planta, comprueba estos 4 puntos clave:"
    },
    examTip: {
      gl: "Pregunta clásica de exame! Cóntaas cos 4 dedos da man: 1. Verde, 2. Fixa, 3. Fotosíntese con Sol, 4. Raíz-Talo-Follas.",
      es: "¡Pregunta clásica de examen! Cuéntalas con los 4 dedos: 1. Verde, 2. Fija, 3. Fotosíntesis con Sol, 4. Raíz-Tallo-Hojas."
    },
    cards: [
      {
        title: { gl: "1. Adoitan ser de cor verde", es: "1. Suelen ser de color verde" },
        icon: "🟢",
        accentColor: "emerald",
        points: {
          gl: ["A cor verde ven da clorofila, a substancia que atrapa a luz do Sol nas follas."],
          es: ["El color verde viene de la clorofila, la sustancia que atrapa la luz del Sol en las hojas."]
        }
      },
      {
        title: { gl: "2. Viven fixas ao chan", es: "2. Viven fijas al suelo" },
        icon: "⚓",
        accentColor: "blue",
        points: {
          gl: ["Non se desprazan nin camiñan coma os animais. Teñen raíces cravadas na terra."],
          es: ["No se desplazan ni caminan como los animales. Tienen raíces ancladas en la tierra."]
        }
      },
      {
        title: { gl: "3. Fabrican o seu propio alimento", es: "3. Fabrican su propio alimento" },
        icon: "🧪",
        accentColor: "amber",
        points: {
          gl: ["Empregan auga, aire e sales minerais mediante a fotosíntese usando a enerxía da luz do Sol."],
          es: ["Usan agua, aire y sales minerales mediante la fotosíntesis utilizando la energía de la luz del Sol."]
        }
      },
      {
        title: { gl: "4. Corpo dividido en 3 partes", es: "4. Cuerpo dividido en 3 partes" },
        icon: "🪴",
        accentColor: "teal",
        points: {
          gl: ["Adoitan ter o corpo ben dividido en raíz, talo e follas."],
          es: ["Suelen tener el cuerpo dividido en raíz, tallo y hojas."]
        }
      }
    ]
  },
  {
    id: 5,
    emoji: "☀️",
    shortTitle: {
      gl: "A Fotosíntese paso a paso",
      es: "La Fotosíntesis paso a paso"
    },
    title: {
      gl: "5️⃣ Explicación paso a paso da fotosíntese",
      es: "5️⃣ Explicación paso a paso de la fotosíntesis"
    },
    summary: {
      gl: "A fotosíntese é a maxia da natureza pola cal as plantas fabrican o seu alimento e regálannos osíxeno limpo para respirar.",
      es: "La fotosíntesis es el proceso mediante el cual las plantas fabrican su alimento y nos regalan oxígeno limpio para respirar."
    },
    examTip: {
      gl: "Moito coidado!: Respirar é diferente de facer a fotosíntese. Respiran todo o día (toman O₂ e botan CO₂). A fotosíntese fana coa luz (toman CO₂ e botan O₂)!",
      es: "¡Mucho cuidado!: Respirar es diferente a hacer la fotosíntesis. Respiran todo el día (toman O₂ y expulsan CO₂). ¡La fotosíntesis la hacen con luz (toman CO₂ y expulsan O₂)!"
    },
    cards: [
      {
        title: { gl: "Paso 1: As raíces absorben", es: "Paso 1: Las raíces absorben" },
        icon: "💧",
        accentColor: "blue",
        points: {
          gl: [
            "As raíces absorben a auga e os sales minerais da terra.",
            "Esta mestura inicial sobe cara ao talo."
          ],
          es: [
            "Las raíces absorben el agua y las sales minerales de la tierra.",
            "Esta mezcla inicial sube hacia el tallo."
          ]
        }
      },
      {
        title: { gl: "Paso 2: A viaxe polo talo", es: "Paso 2: El viaje por el tallo" },
        icon: "⬆️",
        accentColor: "teal",
        points: {
          gl: ["A auga e as substancias minerais soben polo interior do talo coma por tubaxes ata chegar ás follas."],
          es: ["El agua y las sustancias minerales suben por el interior del tallo como por tuberías hasta llegar a las hojas."]
        }
      },
      {
        title: { gl: "Paso 3: As follas captan aire e Sol", es: "Paso 3: Las hojas captan aire y Sol" },
        icon: "🍃",
        accentColor: "amber",
        points: {
          gl: [
            "As follas absorben o dióxido de carbono que hai no aire.",
            "Ao mesmo tempo, as follas reciben a enerxía luminosa do Sol."
          ],
          es: [
            "Las hojas absorben el dióxido de carbono del aire.",
            "Al mismo tiempo, las hojas reciben la energía luminosa del Sol."
          ]
        }
      },
      {
        title: { gl: "Paso 4: Fabrícase alimento e sae osíxeno", es: "Paso 4: Se fabrica alimento y sale oxígeno" },
        icon: "💨",
        accentColor: "emerald",
        points: {
          gl: [
            "As follas combinan a auga, os minerais, o dióxido de carbono e a luz para fabricar alimento.",
            "Ao rematar este proceso, a planta expulsa osíxeno ao aire. Grazas a iso podemos vivir nós!"
          ],
          es: [
            "Las hojas combinan agua, minerales, dióxido de carbono y luz para fabricar alimento.",
            "Al terminar este proceso, la planta expulsa oxígeno al aire. ¡Gracias a ello podemos vivir!"
          ]
        },
        highlight: {
          gl: "Grazas plantas! Se non fose pola fotosíntese, nós non poderiamos vivir!",
          es: "¡Gracias plantas! Si no fuera por la fotosíntesis, ¡nosotros no podríamos vivir!"
        }
      }
    ]
  },
  {
    id: 6,
    emoji: "🎨",
    shortTitle: {
      gl: "Guía de debuxo de exame",
      es: "Guía de dibujo de examen"
    },
    title: {
      gl: "6️⃣ Guía visual para debuxar a fotosíntese no exame",
      es: "6️⃣ Guía visual para dibujar la fotosíntesis en el examen"
    },
    summary: {
      gl: "Se o mestre ou a mestra che pide debuxar a fotosíntese, este é o esquema perfecto que debes facer con frechas de cores!",
      es: "Si tu profe te pide dibujar la fotosíntesis, ¡este es el esquema perfecto que debes hacer con flechas de colores!"
    },
    examTip: {
      gl: "Memoriza que frechas entran (Auga pola raíz, Sol e CO₂ pola folla) e que frecha sae triunfante (Osíxeno saíndo da folla)!",
      es: "¡Memoriza qué flechas entran (Agua por la raíz, Sol y CO₂ por la hoja) y qué flecha sale triunfante (Oxígeno saliendo de la hoja)!"
    },
    cards: [
      {
        title: { gl: "Paso a paso no teu caderno:", es: "Paso a paso en tu cuaderno:" },
        icon: "✏️",
        accentColor: "purple",
        points: {
          gl: [
            "1. Debuxa unha liña marrón para o chan.",
            "2. Debuxa debaixo a raíz con pequenas ramificacións.",
            "3. Debuxa un talo verde cara arriba con dúas follas grandes.",
            "4. Debuxa un Sol amarelo brillante na parte superior dereita."
          ],
          es: [
            "1. Dibuja una línea marrón para el suelo.",
            "2. Dibuja debajo la raíz con pequeñas ramificaciones.",
            "3. Dibuja un tallo verde hacia arriba con dos hojas grandes.",
            "4. Dibuja un Sol amarillo brillante en la parte superior derecha."
          ]
        }
      },
      {
        title: { gl: "Cores e frechas do exame:", es: "Colores y flechas del examen:" },
        icon: "🎯",
        accentColor: "emerald",
        points: {
          gl: [
            "🔵 FRECHA AZUL (Entra por abaixo): Dende a terra á raíz -> 'Auga e sales minerais'.",
            "🟡 FRECHA AMARELA (Entra por arriba): Dende o Sol caendo na folla -> 'Luz solar'.",
            "🔴 FRECHA VERMELLA ou LARANXA (Entra dende o aire): Entrando na folla -> 'Dióxido de carbono (CO₂)'.",
            "🟢 FRECHA VERDE VIVA (Sae expulsada cara fóra): Sae da folla cara ao ceo -> 'Osíxeno (O₂)'."
          ],
          es: [
            "🔵 FLECHA AZUL (Entra por abajo): Desde la tierra a la raíz -> 'Agua y sales minerales'.",
            "🟡 FLECHA AMARILLA (Entra por arriba): Desde el Sol cayendo en la hoja -> 'Luz solar'.",
            "🔴 FLECHA ROJA o NARANJA (Entra desde el aire): Entrando en la hoja -> 'Dióxido de carbono (CO₂)'.",
            "🟢 FLECHA VERDE VIVA (Sale expulsada hacia fuera): Sale de la hoja al aire -> 'Oxígeno (O₂)'."
          ]
        },
        highlight: {
          gl: "Regra rápida: Entran 3 cousas (Auga, Sol e CO₂) e sae 1 gran tesouro (Osíxeno)!",
          es: "¡Regla rápida: Entran 3 cosas (Agua, Sol y CO₂) y sale 1 gran tesoro (Oxígeno)!"
        }
      }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: {
      gl: "1. Que parte da planta se encarga de absorber a auga e os sales minerais do chan?",
      es: "1. ¿Qué parte de la planta se encarga de absorber el agua y las sales minerales del suelo?"
    },
    options: [
      { letter: "A", text: { gl: "As follas", es: "Las hojas" } },
      { letter: "B", text: { gl: "A raíz", es: "La raíz" } },
      { letter: "C", text: { gl: "A flor", es: "La flor" } }
    ],
    correctAnswer: "B",
    hint: {
      gl: "Pensa na parte que está soterrada debaixo da terra, suxeitando a planta coma se fosen áncoras!",
      es: "¡Piensa en la parte que está enterrada bajo tierra, sujetando la planta como anclas!"
    },
    explanation: {
      gl: "Exacto! A raíz actúa coma unha palliña que chupa a auga e os sales minerais da terra.",
      es: "¡Exacto! La raíz actúa como una pajita que absorbe el agua y las sales minerales de la tierra."
    },
    funFact: {
      gl: "Ademais de beber auga, a raíz evita que o vento arranque a planta do chan!",
      es: "¡Además de beber agua, la raíz evita que el viento arranque la planta del suelo!"
    }
  },
  {
    id: 2,
    question: {
      gl: "2. Verdadeiro ou Falso: As plantas desprazanse camiñando polo bosque cando queren buscar comida.",
      es: "2. Verdadero o Falso: Las plantas se desplazan caminando por el bosque cuando quieren buscar comida."
    },
    options: [
      { letter: "A", text: { gl: "Verdadeiro: Camiñan se teñen fame", es: "Verdadero: Caminan si tienen hambre" } },
      { letter: "B", text: { gl: "Falso: Viven fixas ao chan e non se desprazan", es: "Falso: Viven fijas al suelo y no se desplazan" } }
    ],
    correctAnswer: "B",
    hint: {
      gl: "Lembras a segunda característica en común de todas as plantas? Teñen patas para correr?",
      es: "¿Recuerdas la segunda característica común de todas las plantas? ¿Tienen patas para correr?"
    },
    explanation: {
      gl: "Moi ben! As plantas viven fixas ao chan. Non precisan camiñar porque fabrican o seu propio alimento alí onde están!",
      es: "¡Muy bien! Las plantas viven fijas al suelo. No necesitan desplazarse porque fabrican su propio alimento."
    },
    funFact: {
      gl: "Aínda que non se desprazan, poden xirar os talos amodo buscando o sol!",
      es: "Aunque no se desplazan, ¡pueden girar sus tallos lentamente buscando el sol!"
    }
  },
  {
    id: 3,
    question: {
      gl: "3. Durante a fotosíntese, que gas expulsan as follas ao aire que é imprescindible para que nós poidamos respirar?",
      es: "3. Durante la fotosíntesis, ¿qué gas expulsan las hojas al aire imprescindible para que respiremos?"
    },
    options: [
      { letter: "A", text: { gl: "Osíxeno", es: "Oxígeno" } },
      { letter: "B", text: { gl: "Dióxido de carbono", es: "Dióxido de carbono" } },
      { letter: "C", text: { gl: "Fume", es: "Humo" } }
    ],
    correctAnswer: "A",
    hint: {
      gl: "É o gas marabilloso e puro que enche os nosos pulmóns cando respiramos no monte!",
      es: "¡Es el gas maravilloso y puro que llena nuestros pulmones cuando respiramos en la naturaleza!"
    },
    explanation: {
      gl: "Fantástico! Ao rematar a fotosíntese, a planta expulsa osíxeno ao aire. Sen elas non poderiamos respirar!",
      es: "¡Fantástico! Al terminar la fotosíntesis, la planta expulsa oxígeno al aire. ¡Sin ellas no podríamos respirar!"
    },
    funFact: {
      gl: "Por iso as árbores chámanse 'os pulmóns do noso planeta'!",
      es: "¡Por eso los bosques se llaman 'los pulmones de nuestro planeta'!"
    }
  },
  {
    id: 4,
    question: {
      gl: "4. Que ser vivo microscópico se utiliza para axudarnos a elaborar alimentos deliciosos como o queixo e o iogur?",
      es: "4. ¿Qué ser vivo microscópico nos ayuda a elaborar alimentos como el queso y el yogur?"
    },
    options: [
      { letter: "A", text: { gl: "As algas grandes", es: "Las algas grandes" } },
      { letter: "B", text: { gl: "As bacterias", es: "Las bacterias" } },
      { letter: "C", text: { gl: "Os protozoos", es: "Los protozoos" } }
    ],
    correctAnswer: "B",
    hint: {
      gl: "A microbióloga Andrea explicou que son os seres máis pequenos de todos e que viven en moitos lugares!",
      es: "La microbióloga Andrea explicó que son los seres más pequeños de todos y que viven en muchos lugares."
    },
    explanation: {
      gl: "Genial! As bacterias son diminutas, pero a maioría son boas amigas nosas e transforman o leite en queixo e iogur.",
      es: "¡Genial! Las bacterias son diminutas, pero la mayoría son beneficiosas y transforman la leche en queso y yogur."
    },
    funFact: {
      gl: "Nunha soa cullerada de iogur hai millóns de bacterias boas traballando!",
      es: "¡En una sola cucharada de yogur hay millones de bacterias buenas trabajando!"
    }
  },
  {
    id: 5,
    question: {
      gl: "5. Se tes que debuxar a fotosíntese no exame, que frecha azul debaixo da terra debuxarías entrando na planta?",
      es: "5. En el dibujo del examen, ¿qué representa la flecha azul que entra por la raíz desde el suelo?"
    },
    options: [
      { letter: "A", text: { gl: "A luz do sol", es: "La luz del sol" } },
      { letter: "B", text: { gl: "Auga e sales minerais", es: "Agua y sales minerales" } },
      { letter: "C", text: { gl: "Dióxido de carbono", es: "Dióxido de carbono" } }
    ],
    correctAnswer: "B",
    hint: {
      gl: "Cando chove ou regas unha maceta, que hai na terra mollada que bebe a raíz?",
      es: "Cuando llueve o riegas una maceta, ¿qué hay en la tierra mojada que bebe la raíz?"
    },
    explanation: {
      gl: "Perfecto! A frecha azul representa a auga e os sales minerais que entran polas raíces e soben polo talo.",
      es: "¡Perfecto! La flecha azul representa el agua y las sales minerales que entran por las raíces y suben por el tallo."
    },
    funFact: {
      gl: "Esa mestura inicial que sobe polo talo chámase zume bruto!",
      es: "¡Esa mezcla inicial que sube por el tallo hacia las hojas se llama savia bruta!"
    }
  },
  {
    id: 6,
    question: {
      gl: "6. Como se chama a parte feminina da flor que ten forma de botella?",
      es: "6. ¿Cómo se llama la parte femenina de la flor que tiene forma de botella?"
    },
    options: [
      { letter: "A", text: { gl: "Pistilo", es: "Pistilo" } },
      { letter: "B", text: { gl: "Estame", es: "Estambre" } },
      { letter: "C", text: { gl: "Pétalo", es: "Pétalo" } }
    ],
    correctAnswer: "A",
    hint: {
      gl: "Está no centro da flor e cando recibe o pole transfórmase en froito!",
      es: "¡Está en el centro de la flor y cuando recibe polen se transforma en fruto!"
    },
    explanation: {
      gl: "Moi ben! O pistilo é a parte feminina da flor con forma de botella. Nel medra o futuro froito.",
      es: "¡Muy bien! El pistilo es la parte femenina de la flor con forma de botella. En él crece el futuro fruto."
    },
    funFact: {
      gl: "Dentro do pistilo, tras recibir o pole, medran as futuras sementes!",
      es: "¡Dentro del pistilo, tras recibir el polen, se forman las semillas!"
    }
  },
  {
    id: 7,
    question: {
      gl: "7. Que parte masculina da flor é a encargada de fabricar os granciños de pole?",
      es: "7. ¿Qué parte masculina de la flor se encarga de fabricar los granitos de polen?"
    },
    options: [
      { letter: "A", text: { gl: "O cáliz", es: "El cáliz" } },
      { letter: "B", text: { gl: "Os estames", es: "Los estambres" } },
      { letter: "C", text: { gl: "A raíz", es: "La raíz" } }
    ],
    correctAnswer: "B",
    hint: {
      gl: "Son eses filamentos finos con cabecitas amarelas arredor do pistilo!",
      es: "¡Son esos filamentos finos con cabecitas amarillas alrededor del pistilo!"
    },
    explanation: {
      gl: "Correctísimo! Os estames son a parte masculina da flor que producen o pole que transportan as abellas ou o vento.",
      es: "¡Correctísimo! Los estambres son la parte masculina que produce el polen que transportan abejas o viento."
    },
    funFact: {
      gl: "As abellas levan o pole dunha flor a outra pegado nas súas patiñas!",
      es: "¡Las abejas llevan el polen de flor en flor pegado a sus patitas!"
    }
  },
  {
    id: 8,
    question: {
      gl: "8. Cando o pistilo recibe o pole e medra, en que se transforma despois?",
      es: "8. Cuando el pistilo recibe polen y crece, ¿en qué se transforma después?"
    },
    options: [
      { letter: "A", text: { gl: "Nunha folla verde", es: "En una hoja verde" } },
      { letter: "B", text: { gl: "Nun froito con sementes dentro", es: "En un fruto con semillas dentro" } },
      { letter: "C", text: { gl: "Nunha nova raíz", es: "En una nueva raíz" } }
    ],
    correctAnswer: "B",
    hint: {
      gl: "Pensa nunha mazá ou nun pexego: que hai no seu interior?",
      es: "Piensa en una manzana o un melocotón: ¿qué hay en su interior?"
    },
    explanation: {
      gl: "Bravo! O pistilo cambia de aspecto e transfórmase nun froito, que garda e protexe as sementes no seu interior.",
      es: "¡Bravo! El pistilo cambia de aspecto y se transforma en fruto, protegiendo las semillas en su interior."
    },
    funFact: {
      gl: "Cando comemos unha mazá, estamos a comer a parte carnosa do pistilo que medrou!",
      es: "¡Cuando comemos una manzana, estamos comiendo la parte carnosa que creció del pistilo!"
    }
  },
  {
    id: 9,
    question: {
      gl: "9. As algas son seres vivos que viven na auga. Fan a fotosíntese?",
      es: "9. Las algas viven en el agua. ¿Hacen la fotosíntesis?"
    },
    options: [
      { letter: "A", text: { gl: "Si, fabrican o seu propio alimento e producen osíxeno", es: "Sí, fabrican su propio alimento y producen oxígeno" } },
      { letter: "B", text: { gl: "Non, comen peixes pequenos", es: "No, comen peces pequeños" } },
      { letter: "C", text: { gl: "Non, son coma os animais", es: "No, son como los animales" } }
    ],
    correctAnswer: "A",
    hint: {
      gl: "As algas teñen clorofila e necesitan a luz do sol para vivir na auga!",
      es: "¡Las algas tienen clorofila y necesitan la luz del sol para vivir en el agua!"
    },
    explanation: {
      gl: "Exacto! As algas fan a fotosíntese igual ca as plantas terrestres e producen moitísimo osíxeno para os mares e ríos.",
      es: "¡Exacto! Las algas hacen fotosíntesis y producen muchísimo oxígeno para mares y ríos."
    },
    funFact: {
      gl: "Máis da metade do osíxeno do noso planeta vén das algas que flotan nos océanos!",
      es: "¡Más de la mitad del oxígeno de nuestro planeta proviene de algas marinas!"
    }
  },
  {
    id: 10,
    question: {
      gl: "10. Os fungos (como os cogomelos do campo) fan a fotosíntese coma as plantas?",
      es: "10. Los hongos (como las setas del campo), ¿hacen la fotosíntesis como las plantas?"
    },
    options: [
      { letter: "A", text: { gl: "Si, cando hai moito sol no monte", es: "Sí, cuando hay mucho sol en el monte" } },
      { letter: "B", text: { gl: "Non! Aliméntanse de restos de materia en descomposición", es: "¡No! Se alimentan de restos de materia en descomposición" } }
    ],
    correctAnswer: "B",
    hint: {
      gl: "Lembra a táboa do libro: os fungos NON teñen clorofila nin son verdes!",
      es: "Recuerda el libro: ¡los hongos NO tienen clorofila ni hacen fotosíntesis!"
    },
    explanation: {
      gl: "Moi ben! Os fungos NON son plantas porque non fan a fotosíntese. Aliméntanse descompoñendo follas secas e madeira vella.",
      es: "¡Muy bien! Los hongos NO son plantas porque no hacen fotosíntesis. Se alimentan descomponiendo restos orgánicos."
    },
    funFact: {
      gl: "Os cogomelos son os 'recicladores' máis importantes dos nosos bosques!",
      es: "¡Las setas y hongos son los 'recicladores' clave de nuestros bosques!"
    }
  },
  {
    id: 11,
    question: {
      gl: "11. Os lévedos que empregamos para facer subir a masa do pan son fungos de cantas células?",
      es: "11. Las levaduras que usamos para hacer subir la masa del pan, ¿de cuántas células son?"
    },
    options: [
      { letter: "A", text: { gl: "Dunha soa célula (unicelulares)", es: "De una sola célula (unicelulares)" } },
      { letter: "B", text: { gl: "De millóns de células coma unha árbore", es: "De millones de células como un árbol" } }
    ],
    correctAnswer: "A",
    hint: {
      gl: "Son microscópicos, precisas un microscopio para velas unha a unha!",
      es: "¡Son microscópicos, necesitas un microscopio para verlos uno a uno!"
    },
    explanation: {
      gl: "Fantástico! Os fermentos ou lévedos son fungos diminutos dunha soa célula que comen o azucre da fariña e fan burbulliñas de gas para que o pan fique esponxoso.",
      es: "¡Fantástico! Las levaduras son hongos microscópicos de una sola célula que hacen esponjoso el pan."
    },
    funFact: {
      gl: "Cando ves os buratiños dentro da miga do pan, son os gaspiños que fixeron os lévedos!",
      es: "¡Los agujeritos de la miga del pan son las burbujas que hicieron las levaduras!"
    }
  },
  {
    id: 12,
    question: {
      gl: "12. Que fan as plantas cando respiran para nutrirse (tanto de día como de noite)?",
      es: "12. ¿Qué hacen las plantas cuando respiran (tanto de día como de noche)?"
    },
    options: [
      { letter: "A", text: { gl: "Toman osíxeno do aire e expulsan dióxido de carbono", es: "Toman oxígeno del aire y expulsan dióxido de carbono" } },
      { letter: "B", text: { gl: "Toman auga do ceo", es: "Toman agua del cielo" } },
      { letter: "C", text: { gl: "Expulsan fume quente", es: "Expulsan humo caliente" } }
    ],
    correctAnswer: "A",
    hint: {
      gl: "Cando respiran, fano exactamente igual ca nós as persoas!",
      es: "¡Al respirar, lo hacen exactamente igual que nosotros!"
    },
    explanation: {
      gl: "Exacto! Non confundas: na fotosíntese toman CO₂ e botan osíxeno, pero cando RESPIRAN toman osíxeno e botan CO₂, igual ca ti!",
      es: "¡Exacto! En la fotosíntesis toman CO₂ y liberan oxígeno, pero al RESPIRAR toman oxígeno y expulsan CO₂, ¡igual que tú!"
    },
    funFact: {
      gl: "As plantas respiran as 24 horas do día polas súas follas!",
      es: "¡Las plantas respiran las 24 horas del día a través de sus hojas!"
    }
  },
  {
    id: 13,
    question: {
      gl: "13. Que comen os protozoos que viven na auga, axudando así a mantela limpa?",
      es: "13. ¿Qué comen los protozoos en el agua, ayudando a mantenerla limpia?"
    },
    options: [
      { letter: "A", text: { gl: "Comen bacterias", es: "Comen bacterias" } },
      { letter: "B", text: { gl: "Comen herba", es: "Comen hierba" } },
      { letter: "C", text: { gl: "Comen peixes grandes", es: "Comen peces grandes" } }
    ],
    correctAnswer: "A",
    hint: {
      gl: "No debuxo do libro, o protozoo dicía: 'Ñam, ñam, que ricas están estas bacterias!'",
      es: "En el dibujo del libro, el protozoo decía: '¡Ñam, ñam, qué ricas están estas bacterias!'"
    },
    explanation: {
      gl: "Genial! Os protozoos son máis grandes cas bacterias e aliméntanse delas, limpando as augas de microbios contaminantes.",
      es: "¡Genial! Los protozoos son más grandes que las bacterias y se alimentan de ellas, limpiando las aguas."
    },
    funFact: {
      gl: "Nas plantas depuradoras de auga utilízanse protozoos para deixar a auga limpa!",
      es: "¡En depuradoras se usan protozoos para purificar el agua de las ciudades!"
    }
  },
  {
    id: 14,
    question: {
      gl: "14. Como se chama o talo groso e duro que teñen as árbores coma os piñeiros e os carballos?",
      es: "14. ¿Cómo se llama el tallo grueso y duro que tienen los árboles como pinos o robles?"
    },
    options: [
      { letter: "A", text: { gl: "Tronco", es: "Tronco" } },
      { letter: "B", text: { gl: "Herba", es: "Hierba" } },
      { letter: "C", text: { gl: "Pétalo", es: "Pétalo" } }
    ],
    correctAnswer: "A",
    hint: {
      gl: "É de madeira moi resistente e podes abrazalo no bosque!",
      es: "¡Es de madera resistente y puedes abrazarlo en el bosque!"
    },
    explanation: {
      gl: "Moi ben! O tronco é o talo leñoso, duro e groso das árbores que pode durar centos de anos.",
      es: "¡Muy bien! El tronco es el tallo leñoso, duro y grueso de los árboles."
    },
    funFact: {
      gl: "Se cortas un tronco vello, podes contar a súa idade contando os aneis de madeira!",
      es: "¡En un tronco cortado puedes saber la edad del árbol contando sus anillos!"
    }
  },
  {
    id: 15,
    question: {
      gl: "15. Que fan as plantas carnívoras cando notan que un insecto se pousou sobre as súas follas?",
      es: "15. ¿Qué hacen las plantas carnívoras cuando notan que un insecto se posó sobre sus hojas?"
    },
    options: [
      { letter: "A", text: { gl: "Pregan as súas follas e atrúpanos moi rápido!", es: "¡Pliegan sus hojas y los atrapan muy rápido!" } },
      { letter: "B", text: { gl: "Botan a correr polo bosque", es: "Echan a correr por el bosque" } },
      { letter: "C", text: { gl: "Poñen música", es: "Ponen música" } }
    ],
    correctAnswer: "A",
    hint: {
      gl: "É un exemplo da función de relación: detectan o contacto e pechan a trampa!",
      es: "¡Es un ejemplo de función de relación: detectan el tacto y cierran la trampa!"
    },
    explanation: {
      gl: "Bravo! As plantas carnívoras teñen pelos supersensibles que detectan o movemento do insecto e péchanse nunha fracción de segundo.",
      es: "¡Bravo! Tienen pelillos supersensibles que detectan al insecto y se cierran al instante."
    },
    funFact: {
      gl: "En Galicia hai plantas carnívoras pequeniñas nas turbeiras chamadas herbas do orballo (Drosera)!",
      es: "¡Existen plantas carnívoras diminutas llamadas Droseras en humedales gallegos!"
    }
  },
  {
    id: 16,
    question: {
      gl: "16. Que substancia verde que hai nas follas das plantas se encarga de atrapar a enerxía da luz do Sol?",
      es: "16. ¿Qué sustancia verde en las hojas de las plantas atrapa la energía de la luz del Sol?"
    },
    options: [
      { letter: "A", text: { gl: "Clorofila", es: "Clorofila" } },
      { letter: "B", text: { gl: "Azucre", es: "Azúcar" } },
      { letter: "C", text: { gl: "Sal", es: "Sal" } }
    ],
    correctAnswer: "A",
    hint: {
      gl: "Empieza por 'Cloro-' e é a responsable de que o campo sexa verde!",
      es: "Empieza por 'Cloro-' ¡y es la responsable de que el campo sea verde!"
    },
    explanation: {
      gl: "Excelente! A clorofila é o pigmento verde máxico que capta a luz do Sol para que a planta poida facer a fotosíntese.",
      es: "¡Excelente! La clorofila es el pigmento verde que capta la luz del Sol para realizar la fotosíntesis."
    },
    funFact: {
      gl: "No outono, as follas perden a clorofila e por iso vólvense amarelas e vermellas!",
      es: "En otoño las hojas pierden la clorofila y por eso se vuelven amarillas y rojas."
    }
  },
  {
    id: 17,
    question: {
      gl: "17. No debuxo da fotosíntese para o exame, de que cor debe ser a frecha que vai dende o Sol caendo sobre a folla?",
      es: "17. En el dibujo del examen, ¿de qué color debe ser la flecha desde el Sol hacia la hoja?"
    },
    options: [
      { letter: "A", text: { gl: "Amarela ou laranxa (Luz solar)", es: "Amarilla o naranja (Luz solar)" } },
      { letter: "B", text: { gl: "Azul escuro", es: "Azul oscuro" } },
      { letter: "C", text: { gl: "Negra coma a noite", es: "Negra como la noche" } }
    ],
    correctAnswer: "A",
    hint: {
      gl: "Pensa na cor dos raios do Sol no ceo nun día despexado!",
      es: "¡Piensa en el color de los rayos del Sol en un día despejado!"
    },
    explanation: {
      gl: "Perfecto! A frecha amarela ou laranxa representa a enerxía solar que entra polas follas para poñer en marcha a fotosíntese.",
      es: "¡Perfecto! La flecha amarilla o naranja representa la energía solar que entra por las hojas."
    },
    funFact: {
      gl: "A luz do Sol viaxa 150 millóns de quilómetros polo espazo para chegar á folla!",
      es: "¡La luz del Sol viaja 150 millones de kilómetros por el espacio hasta la hoja!"
    }
  },
  {
    id: 18,
    question: {
      gl: "18. Que frecha vermella entra dende o aire cara á folla durante a fotosíntese?",
      es: "18. ¿Qué flecha roja entra desde el aire hacia la hoja durante la fotosíntesis?"
    },
    options: [
      { letter: "A", text: { gl: "Dióxido de carbono (CO₂)", es: "Dióxido de carbono (CO₂)" } },
      { letter: "B", text: { gl: "Auga de choiva", es: "Agua de lluvia" } },
      { letter: "C", text: { gl: "Pedras", es: "Piedras" } }
    ],
    correctAnswer: "A",
    hint: {
      gl: "É o gas que hai no aire que as follas absorben para cociñar o seu alimento!",
      es: "¡Es el gas que hay en el aire que las hojas absorben para cocinar su alimento!"
    },
    explanation: {
      gl: "Moi ben! A folla toma dióxido de carbono do aire a través de pequenos poriños chamados estomas.",
      es: "¡Muy bien! La hoja toma dióxido de carbono del aire a través de pequeños poros llamados estomas."
    },
    funFact: {
      gl: "Ao tomar o dióxido de carbono, as plantas axudan a que o aire non estea contaminado!",
      es: "¡Al tomar dióxido de carbono, las plantas ayudan a limpiar el aire de contaminación!"
    }
  },
  {
    id: 19,
    question: {
      gl: "19. Como saben as plantas que rematou o frío inverno e que xa poden florecer e botar follas?",
      es: "19. ¿Cómo saben las plantas que terminó el frío invierno y que ya pueden florecer?"
    },
    options: [
      { letter: "A", text: { gl: "Porque miran o reloxo", es: "Porque miran el reloj" } },
      { letter: "B", text: { gl: "Porque notan o aumento da temperatura do medio ambiente", es: "Porque notan el aumento de temperatura del ambiente" } },
      { letter: "C", text: { gl: "Porque llelo din os paxaros", es: "Porque se lo dicen los pájaros" } }
    ],
    correctAnswer: "B",
    hint: {
      gl: "Recorda o exemplo do libro co termómetro de 3 °C (inverno) a 20 °C (primavera)!",
      es: "¡Recuerda el termómetro del libro de 3 °C (invierno) a 20 °C (primavera)!"
    },
    explanation: {
      gl: "Bravo! As plantas notan a calor cando sobe a temperatura na primavera e actívanse para brotar.",
      es: "¡Bravo! Las plantas notan el calor al subir la temperatura en primavera y brotan."
    },
    funFact: {
      gl: "Tamén notan que os días teñen máis horas de luz na primavera!",
      es: "¡También notan que los días tienen más horas de luz en primavera!"
    }
  },
  {
    id: 20,
    question: {
      gl: "20. Por que son tan imprescindibles as plantas para a vida das persoas e animais na Terra?",
      es: "20. ¿Por qué son tan imprescindibles las plantas para la vida de personas y animales?"
    },
    options: [
      { letter: "A", text: { gl: "Porque ao facer a fotosíntese enchen o aire de osíxeno para que podamos respirar", es: "Porque al hacer la fotosíntesis llenan el aire de oxígeno para que podamos respirar" } },
      { letter: "B", text: { gl: "Porque fan ruído polo día", es: "Porque hacen ruido de día" } },
      { letter: "C", text: { gl: "Porque non fan nada", es: "Porque no hacen nada" } }
    ],
    correctAnswer: "A",
    hint: {
      gl: "Lembras a frase do libro?: 'Grazas plantas! Se non fose pola fotosíntese, nós non poderiamos vivir!'",
      es: "Recuerda la frase del libro: '¡Gracias plantas! Si no fuese por la fotosíntesis, ¡no podríamos vivir!'"
    },
    explanation: {
      gl: "PARABÉNS! As plantas fabrican o osíxeno que necesitamos cada segundo para vivir e dan alimento a case todos os seres vivos.",
      es: "¡ENHORABUENA! Las plantas fabrican el oxígeno que necesitamos cada segundo para vivir y dan alimento a la vida en la Tierra."
    },
    funFact: {
      gl: "Coidar as árbores e plantar flores é coidar o noso propio futuro!",
      es: "¡Cuidar los árboles y plantar flores es cuidar nuestro propio futuro!"
    }
  }
];

export const BOOK_PAGES = [
  {
    id: "p32",
    pageNumber: 32,
    title: {
      gl: "Como son as plantas? (Partes e características)",
      es: "¿Cómo son las plantas? (Partes y características)"
    },
    imageSrc: "/assets/aistudio/WhatsApp_Image_2026-11-12_at_15.42.42_6e7722ad.jpeg"
  },
  {
    id: "p33",
    pageNumber: 33,
    title: {
      gl: "Así se nutren as plantas (A Fotosíntese)",
      es: "Así se nutren las plantas (La Fotosíntesis)"
    },
    imageSrc: "/assets/aistudio/WhatsApp_Image_2026-11-12_at_15.43.01_95cee267.jpeg"
  },
  {
    id: "p34",
    pageNumber: 34,
    title: {
      gl: "Así se relacionan as plantas (Luz, calor e defensa)",
      es: "Así se relacionan las plantas (Luz, calor y defensa)"
    },
    imageSrc: "/assets/aistudio/WhatsApp_Image_2026-11-12_at_15.43.16_e17638ba.jpeg"
  },
  {
    id: "p35",
    pageNumber: 35,
    title: {
      gl: "A reprodución nas plantas (Flor, froito e semente)",
      es: "La reproducción en las plantas (Flor, fruto y semilla)"
    },
    imageSrc: "/assets/aistudio/WhatsApp_Image_2026-11-12_at_15.43.27_3d6460d7.jpeg"
  },
  {
    id: "p29",
    pageNumber: 29,
    title: {
      gl: "A clasificación dos seres vivos (Os grandes grupos)",
      es: "La clasificación de los seres vivos (Los grandes grupos)"
    },
    imageSrc: "/assets/aistudio/WhatsApp_Image_2026-11-12_at_15.45.06_7fcd135b.jpeg"
  },
  {
    id: "p30",
    pageNumber: 30,
    title: {
      gl: "Cantos seres diferentes! (Bacterias e Protozoos)",
      es: "¡Cuántos seres diferentes! (Bacterias y Protozoos)"
    },
    imageSrc: "/assets/aistudio/WhatsApp_Image_2026-11-12_at_15.45.49_4f6fc957.jpeg"
  },
  {
    id: "p31",
    pageNumber: 31,
    title: {
      gl: "Algas e Fungos (Lévedos, cogomelos e antibióticos)",
      es: "Algas y Hongos (Levaduras, setas y antibióticos)"
    },
    imageSrc: "/assets/aistudio/WhatsApp_Image_2026-11-12_at_15.45.57_79b71038.jpeg"
  }
];

export const UI_STRINGS = {
  appName: {
    gl: "3.º Primaria",
    es: "3.º Primaria"
  },
  appSubtitle: {
    gl: "Portal de estudo interactivo de Galicia",
    es: "Portal de estudio interactivo de Galicia"
  },
  homeBtn: {
    gl: "Inicio / Materias",
    es: "Inicio / Asignaturas"
  },
  tabSummary: {
    gl: "Resumo dos 6 Puntos",
    es: "Resumen de los 6 Puntos"
  },
  tabDrawing: {
    gl: "Debuxo da Fotosíntese",
    es: "Dibujo de la Fotosíntesis"
  },
  tabQuiz: {
    gl: "Quiz Interactivo (20)",
    es: "Quiz Interactivo (20)"
  },
  bookPhotosBtn: {
    gl: "Fotos do Libro",
    es: "Fotos del Libro"
  },
  heroBadge: {
    gl: "Ciencias da Natureza · Galicia",
    es: "Ciencias de la Naturaleza · Galicia"
  },
  heroTopic: {
    gl: "Tema 1: As plantas e os seres vivos",
    es: "Tema 1: Las plantas y los seres vivos"
  },
  heroTitle: {
    gl: "Ola, campioa! Imos preparar o exame de Ciencias! 🌟",
    es: "¡Hola, campeona! ¡Vamos a preparar el examen de Ciencias! 🌟"
  },
  heroDesc: {
    gl: "Aquí tes o resumo visual dos 6 puntos clave, a guía con frechas de cores para o debuxo da fotosíntese e un quiz de 20 preguntas para triunfar.",
    es: "Aquí tienes el resumen visual de los 6 puntos clave, la guía con flechas de colores para el dibujo de fotosíntesis y un quiz de 20 preguntas para triunfar."
  },
  listenAloud: {
    gl: "Escoitar en voz alta",
    es: "Escuchar en voz alta"
  },
  stopVoice: {
    gl: "Deter voz",
    es: "Detener voz"
  },
  seeBookPage: {
    gl: "Ver páxina do libro",
    es: "Ver página del libro"
  },
  examTipTitle: {
    gl: "Consello de mestre para o exame:",
    es: "Consejo de profe para el examen:"
  },
  prevPoint: {
    gl: "← Punto anterior",
    es: "← Punto anterior"
  },
  nextPoint: {
    gl: "Seguinte punto →",
    es: "Siguiente punto →"
  },
  pointIndicator: {
    gl: "Punto {current} de 6",
    es: "Punto {current} de 6"
  },
  takeQuizBtn: {
    gl: "Facer o Quiz de 20 Preguntas! 🎯",
    es: "¡Hacer el Quiz de 20 Preguntas! 🎯"
  },
  drawingBannerTitle: {
    gl: "Queres practicar o debuxo de frechas de cores?",
    es: "¿Quieres practicar el dibujo de flechas de colores?"
  },
  drawingBannerDesc: {
    gl: "Abre o encerado interactivo para ver o modelo e debuxalo coas túas pinturas!",
    es: "¡Abre la pizarra interactiva para ver el modelo y dibujarlo con tus pinturas!"
  },
  openDrawingBtn: {
    gl: "Abrir Guía de Debuxo",
    es: "Abrir Guía de Dibujo"
  }
};
