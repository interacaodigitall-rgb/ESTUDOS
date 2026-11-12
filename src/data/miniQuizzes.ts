import { LocalizedText } from './learningContent';

export interface MiniQuizQuestion {
  id: number;
  question: LocalizedText;
  options: {
    letter: string;
    text: LocalizedText;
  }[];
  correctAnswer: string;
  explanation: LocalizedText;
}

export interface SectionMiniQuiz {
  sectionId: number;
  sectionTitle: LocalizedText;
  badgeTitle: LocalizedText;
  questions: MiniQuizQuestion[];
}

export const MINI_QUIZZES: Record<number, SectionMiniQuiz> = {
  // Punto 1: Funcións vitais
  1: {
    sectionId: 1,
    sectionTitle: {
      gl: "Punto 1: As funcións vitais nas plantas",
      es: "Punto 1: Las funciones vitales en las plantas"
    },
    badgeTitle: {
      gl: "Mini-Quiz 1 · Funcións vitais",
      es: "Mini-Quiz 1 · Funciones vitales"
    },
    questions: [
      {
        id: 101,
        question: {
          gl: "Cales son as tres funcións vitais fundamentais que realizan as plantas?",
          es: "¿Cuáles son las tres funciones vitales fundamentales que realizan las plantas?"
        },
        options: [
          { letter: "A", text: { gl: "Xogar, durmir e cantar", es: "Jugar, dormir y cantar" } },
          { letter: "B", text: { gl: "Nutrición, relación e reprodución", es: "Nutrición, relación y reproducción" } },
          { letter: "C", text: { gl: "Correr, saltar e nadar", es: "Correr, saltar y nadar" } }
        ],
        correctAnswer: "B",
        explanation: {
          gl: "Moi ben! Nutrición (alimentarse), Relación (notar o medio) e Reprodución (crear novas plantas) son as tres funcións de todos os seres vivos.",
          es: "¡Muy bien! Nutrición (alimentarse), Relación (notar el entorno) y Reproducción (crear nuevas plantas) son las tres funciones vitales."
        }
      },
      {
        id: 102,
        question: {
          gl: "Como se chama a parte feminina da flor con forma de botella onde se forman as sementes?",
          es: "¿Cómo se llama la parte femenina de la flor en forma de botella donde se forman las semillas?"
        },
        options: [
          { letter: "A", text: { gl: "Pistilo", es: "Pistilo" } },
          { letter: "B", text: { gl: "Estame", es: "Estambre" } },
          { letter: "C", text: { gl: "Cáliz", es: "Cáliz" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Exacto! O pistilo é a parte feminina en forma de botella que, ao recibir o pole, medra e transfórmase en froito.",
          es: "¡Exacto! El pistilo es la parte femenina con forma de botella que, tras recibir el polen, se transforma en fruto."
        }
      },
      {
        id: 103,
        question: {
          gl: "Que parte masculina da flor é a encargada de producir o pole?",
          es: "¿Qué parte masculina de la flor se encarga de producir el polen?"
        },
        options: [
          { letter: "A", text: { gl: "A raíz", es: "La raíz" } },
          { letter: "B", text: { gl: "Os estames", es: "Los estambres" } },
          { letter: "C", text: { gl: "Os sépalos", es: "Los sépalos" } }
        ],
        correctAnswer: "B",
        explanation: {
          gl: "Fantástico! Os estames son a parte masculina da flor que fabrica os granciños de pole.",
          es: "¡Fantástico! Los estambres son la parte masculina de la flor que fabrica los granitos de polen."
        }
      },
      {
        id: 104,
        question: {
          gl: "Verdadeiro ou Falso: Aínda que as plantas non teñen ollos nin orellas, notan a temperatura e buscan a luz do Sol.",
          es: "Verdadero o Falso: Aunque las plantas no tienen ojos ni oídos, notan la temperatura y buscan la luz del Sol."
        },
        options: [
          { letter: "A", text: { gl: "Verdadeiro: É a súa función de relación", es: "Verdadero: Es su función de relación" } },
          { letter: "B", text: { gl: "Falso: Non se decatan de nada", es: "Falso: No se enteran de nada" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Correcto! As plantas teñen función de relación: detectan cando chega a primavera e xiran os talos cara ao Sol.",
          es: "¡Correcto! Las plantas tienen función de relación: detectan cuándo llega la primavera y giran hacia el Sol."
        }
      },
      {
        id: 105,
        question: {
          gl: "En que se transforma o pistilo da flor despois de recibir o pole?",
          es: "¿En qué se transforma el pistilo de la flor después de recibir el polen?"
        },
        options: [
          { letter: "A", text: { gl: "Nun froito con sementes dentro", es: "En un fruto con semillas dentro" } },
          { letter: "B", text: { gl: "Nunha pedra", es: "En una piedra" } },
          { letter: "C", text: { gl: "Nunha folla seca", es: "En una hoja seca" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Genial! O pistilo medra e transfórmase nun froito (coma unha mazá ou cereixa) coas sementes protexidas dentro.",
          es: "¡Genial! El pistilo crece y se transforma en fruto (como una manzana o cereza) con las semillas dentro."
        }
      }
    ]
  },

  // Punto 2: Clasificación seres vivos
  2: {
    sectionId: 2,
    sectionTitle: {
      gl: "Punto 2: A clasificación dos seres vivos",
      es: "Punto 2: La clasificación de los seres vivos"
    },
    badgeTitle: {
      gl: "Mini-Quiz 2 · Clasificación",
      es: "Mini-Quiz 2 · Clasificación"
    },
    questions: [
      {
        id: 201,
        question: {
          gl: "Cales son os seres vivos máis pequenos de todos, que precisan microscopio e viven en todas partes?",
          es: "¿Cuáles son los seres vivos más pequeños de todos, que necesitan microscopio y viven en todas partes?"
        },
        options: [
          { letter: "A", text: { gl: "As bacterias", es: "Las bacterias" } },
          { letter: "B", text: { gl: "Os elefantes", es: "Los elefantes" } },
          { letter: "C", text: { gl: "As árbores", es: "Los árboles" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Moi ben! As bacterias son os seres vivos máis pequenos. Viven no aire, na auga, no chan e dentro de nós.",
          es: "¡Muy bien! Las bacterias son los seres más pequeños. Viven en aire, agua, suelo y dentro de nosotros."
        }
      },
      {
        id: 202,
        question: {
          gl: "Que ser vivo microscópico e beneficioso axuda a transformar o leite en saboroso queixo e iogur?",
          es: "¿Qué ser vivo microscópico y beneficioso ayuda a transformar la leche en queso y yogur?"
        },
        options: [
          { letter: "A", text: { gl: "As bacterias", es: "Las bacterias" } },
          { letter: "B", text: { gl: "Os caracois", es: "Los caracoles" } },
          { letter: "C", text: { gl: "Os protozoos", es: "Los protozoos" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Exacto! A maioría das bacterias son boas e axúdannos a facer alimentos coma o iogur e o queixo.",
          es: "¡Exacto! La gran mayoría de bacterias son buenas y nos ayudan a elaborar yogur y queso."
        }
      },
      {
        id: 203,
        question: {
          gl: "Os fungos (coma os cogomelos e os lévedos do pan) fan a fotosíntese coma as plantas?",
          es: "Los hongos (como las setas y las levaduras del pan), ¿hacen la fotosíntesis como las plantas?"
        },
        options: [
          { letter: "A", text: { gl: "Si, fan fotosíntese de noite", es: "Sí, hacen fotosíntesis de noche" } },
          { letter: "B", text: { gl: "Non! Aliméntanse de restos en descomposición", es: "¡No! Se alimentan de restos en descomposición" } }
        ],
        correctAnswer: "B",
        explanation: {
          gl: "Fantástico! Os fungos NON son plantas porque non fan fotosíntese: aliméntanse de materia orgánica en descomposición.",
          es: "¡Fantástico! Los hongos NO son plantas porque no hacen fotosíntesis: se alimentan de restos orgánicos."
        }
      },
      {
        id: 204,
        question: {
          gl: "En que medio viven sempre as algas?",
          es: "¿En qué medio viven siempre las algas?"
        },
        options: [
          { letter: "A", text: { gl: "No deserto seco", es: "En el desierto seco" } },
          { letter: "B", text: { gl: "Na auga doce ou salgada", es: "En el agua dulce o salada" } },
          { letter: "C", text: { gl: "Nas rochas da lúa", es: "En las rocas de la luna" } }
        ],
        correctAnswer: "B",
        explanation: {
          gl: "Bravo! As algas viven na auga (mares, ríos e lagoas) e fan a fotosíntese producindo osíxeno.",
          es: "¡Bravo! Las algas viven en el agua (mares, ríos y lagunas) y hacen fotosíntesis produciendo oxígeno."
        }
      },
      {
        id: 205,
        question: {
          gl: "Que comen moitos protozoos na auga, axudando así a mantela limpa?",
          es: "¿Qué comen muchos protozoos en el agua, ayudando a mantenerla limpia?"
        },
        options: [
          { letter: "A", text: { gl: "Comen bacterias", es: "Comen bacterias" } },
          { letter: "B", text: { gl: "Comen peixes grandes", es: "Comen peces grandes" } },
          { letter: "C", text: { gl: "Comen pedras", es: "Comen piedras" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Correcto! Os protozoos son máis grandes cas bacterias e aliméntanse delas, depurando as augas.",
          es: "¡Correcto! Los protozoos son más grandes que las bacterias y se alimentan de ellas, limpiando el agua."
        }
      }
    ]
  },

  // Punto 3: Partes das plantas
  3: {
    sectionId: 3,
    sectionTitle: {
      gl: "Punto 3: As partes das plantas e as súas funcións",
      es: "Punto 3: Las partes de las plantas y sus funciones"
    },
    badgeTitle: {
      gl: "Mini-Quiz 3 · Partes das plantas",
      es: "Mini-Quiz 3 · Partes de las plantas"
    },
    questions: [
      {
        id: 301,
        question: {
          gl: "Que parte da planta suxeita con forza a planta ao chan e absorbe a auga e os sales?",
          es: "¿Qué parte de la planta sujeta con fuerza la planta al suelo y absorbe agua y sales?"
        },
        options: [
          { letter: "A", text: { gl: "As follas", es: "Las hojas" } },
          { letter: "B", text: { gl: "A raíz", es: "La raíz" } },
          { letter: "C", text: { gl: "A flor", es: "La flor" } }
        ],
        correctAnswer: "B",
        explanation: {
          gl: "Moi ben! A raíz ten pequenos pelos absorbentes que chupan a auga e os sales minerais da terra.",
          es: "¡Muy bien! La raíz tiene pelitos absorbentes que toman el agua y sales minerales de la tierra."
        }
      },
      {
        id: 302,
        question: {
          gl: "Como se chama o talo groso e duro que teñen as grandes árbores coma os piñeiros?",
          es: "¿Cómo se llama el tallo grueso y duro que tienen los árboles grandes como pinos o robles?"
        },
        options: [
          { letter: "A", text: { gl: "Tronco", es: "Tronco" } },
          { letter: "B", text: { gl: "Herba", es: "Hierba" } },
          { letter: "C", text: { gl: "Folla", es: "Hoja" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Exacto! O tronco é o talo duro e resistente das árbores.",
          es: "¡Exacto! El tronco es el tallo duro y leñoso de los árboles."
        }
      },
      {
        id: 303,
        question: {
          gl: "Que parte da planta se considera 'a cociña verde' encargada de realizar a fotosíntese?",
          es: "¿Qué parte de la planta es 'la cocina verde' encargada de realizar la fotosíntesis?"
        },
        options: [
          { letter: "A", text: { gl: "As follas", es: "Las hojas" } },
          { letter: "B", text: { gl: "As raíces", es: "Las raíces" } },
          { letter: "C", text: { gl: "A casca", es: "La corteza" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Fantástico! As follas teñen clorofila e encárganse de captar o sol e cociñar o alimento.",
          es: "¡Fantástico! Las hojas captan la luz y el aire para fabricar el alimento."
        }
      },
      {
        id: 304,
        question: {
          gl: "Cal é unha das misións principais do talo da planta?",
          es: "¿Cuál es una de las misiones principales del tallo de la planta?"
        },
        options: [
          { letter: "A", text: { gl: "Soster as follas e transportar auga polo seu interior", es: "Sostener las hojas y transportar agua por su interior" } },
          { letter: "B", text: { gl: "Camiñar polo prado", es: "Caminar por el prado" } },
          { letter: "C", text: { gl: "Facer cóxegas aos paxaros", es: "Hacer cosquillas a los pájaros" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Moi ben! O talo mantén ergueita a planta e funciona coma un ascensor de auga cara ás follas.",
          es: "¡Muy bien! El tallo mantiene erguida la planta y transporta la savia hacia las hojas."
        }
      },
      {
        id: 305,
        question: {
          gl: "As herbiñas pequenas e as flores teñen talos...",
          es: "Las hierbas pequeñas y las flores tienen tallos..."
        },
        options: [
          { letter: "A", text: { gl: "Delgados e flexibles", es: "Delgados y flexibles" } },
          { letter: "B", text: { gl: "De ferro macizo", es: "De hierro macizo" } },
          { letter: "C", text: { gl: "Xigantes coma troncos", es: "Gigantes como troncos" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Bravo! As herbas teñen talos verdes, delgados e flexibles que se moven co vento.",
          es: "¡Bravo! Las hierbas tienen tallos delgados y flexibles que se mecen con el viento."
        }
      }
    ]
  },

  // Punto 4: Características comúns
  4: {
    sectionId: 4,
    sectionTitle: {
      gl: "Punto 4: As 4 características comúns de todas as plantas",
      es: "Punto 4: Las 4 características comunes de todas las plantas"
    },
    badgeTitle: {
      gl: "Mini-Quiz 4 · 4 Características",
      es: "Mini-Quiz 4 · 4 Características"
    },
    questions: [
      {
        id: 401,
        question: {
          gl: "De que cor acostuman ser a maioría das plantas grazas á clorofila?",
          es: "¿De qué color suelen ser la mayoría de las plantas gracias a la clorofila?"
        },
        options: [
          { letter: "A", text: { gl: "De cor verde", es: "De color verde" } },
          { letter: "B", text: { gl: "De cor azul eléctrico", es: "De color azul eléctrico" } },
          { letter: "C", text: { gl: "De cor negra coma o carbón", es: "De color negro carbón" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Exacto! A primeira característica é que adoitan ser de cor verde debido á clorofila.",
          es: "¡Exacto! La primera característica es que suelen ser verdes debido a la clorofila."
        }
      },
      {
        id: 402,
        question: {
          gl: "Como viven as plantas no chan?",
          es: "¿Cómo viven las plantas en el suelo?"
        },
        options: [
          { letter: "A", text: { gl: "Viven fixas ao chan e non se desprazan", es: "Viven fijas al suelo y no se desplazan" } },
          { letter: "B", text: { gl: "Desprázanse saltando polo monte", es: "Se desplazan saltando por el monte" } },
          { letter: "C", text: { gl: "Nadan nos ríos todos os días", es: "Nadan en los ríos todos los días" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Moi ben! Segunda característica: viven fixas ao chan coas súas raíces e non se desprazan.",
          es: "¡Muy bien! Segunda característica: viven fijas al suelo con sus raíces y no se desplazan."
        }
      },
      {
        id: 403,
        question: {
          gl: "Como conseguen o seu alimento as plantas?",
          es: "¿Cómo consiguen su alimento las plantas?"
        },
        options: [
          { letter: "A", text: { gl: "Fabrican o seu propio alimento con auga, aire e sol", es: "Fabrican su propio alimento con agua, aire y sol" } },
          { letter: "B", text: { gl: "Cazan outros animais pequenos", es: "Cazan otros animales pequeños" } },
          { letter: "C", text: { gl: "Comen pan que mercan na tenda", es: "Comen pan que compran en la tienda" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Genial! Terceira característica: elaboran o seu alimento mediante a fotosíntese usando luz do Sol.",
          es: "¡Genial! Tercera característica: fabrican su propio alimento mediante la fotosíntesis con luz solar."
        }
      },
      {
        id: 404,
        question: {
          gl: "En que tres partes acostuman ter o corpo dividido as plantas?",
          es: "¿En qué tres partes suelen tener el cuerpo dividido las plantas?"
        },
        options: [
          { letter: "A", text: { gl: "Raíz, talo e follas", es: "Raíz, tallo y hojas" } },
          { letter: "B", text: { gl: "Cabeza, tronco e extremidades", es: "Cabeza, tronco y extremidades" } },
          { letter: "C", text: { gl: "Ás, bico e cola", es: "Alas, pico y cola" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Fantástico! Cuarta característica: corpo organizado en raíz, talo e follas.",
          es: "¡Fantástico! Cuarta característica: cuerpo dividido en raíz, tallo y hojas."
        }
      },
      {
        id: 405,
        question: {
          gl: "Verdadeiro ou Falso: As plantas precisan patas para ir buscar auga ao río cando teñen sede.",
          es: "Verdadero o Falso: Las plantas necesitan patas para ir a buscar agua al río cuando tienen sed."
        },
        options: [
          { letter: "A", text: { gl: "Verdadeiro", es: "Verdadero" } },
          { letter: "B", text: { gl: "Falso: Toman a auga da terra coas súas raíces", es: "Falso: Toman el agua de la tierra con sus raíces" } }
        ],
        correctAnswer: "B",
        explanation: {
          gl: "Bravo! As plantas non camiñan: as súas raíces beben a auga que cae da choiva ou do rego.",
          es: "¡Bravo! Las plantas no caminan: sus raíces beben el agua de lluvia o riego directamente del suelo."
        }
      }
    ]
  },

  // Punto 5: A fotosíntese paso a paso
  5: {
    sectionId: 5,
    sectionTitle: {
      gl: "Punto 5: A fotosíntese paso a paso",
      es: "Punto 5: La fotosíntesis paso a paso"
    },
    badgeTitle: {
      gl: "Mini-Quiz 5 · Fotosíntese",
      es: "Mini-Quiz 5 · Fotosíntesis"
    },
    questions: [
      {
        id: 501,
        question: {
          gl: "Que catro ingredientes combinan as plantas para facer a fotosíntese?",
          es: "¿Qué cuatro ingredientes combinan las plantas para hacer la fotosíntesis?"
        },
        options: [
          { letter: "A", text: { gl: "Auga, sales minerais, dióxido de carbono e luz solar", es: "Agua, sales minerales, dióxido de carbono y luz solar" } },
          { letter: "B", text: { gl: "Sopa, sal, vinagre e queixo", es: "Sopa, sal, vinagre y queso" } },
          { letter: "C", text: { gl: "Aceite, azucre e chocolate", es: "Aceite, azúcar y chocolate" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Moi ben! Auga e minerais (da raíz) + dióxido de carbono (do aire) + enerxía da luz do Sol.",
          es: "¡Muy bien! Agua y minerales (raíz) + dióxido de carbono (aire) + energía del Sol."
        }
      },
      {
        id: 502,
        question: {
          gl: "Ao rematar a fotosíntese, que gas marabilloso expulsan as follas ao aire que nós respiramos?",
          es: "Al terminar la fotosíntesis, ¿qué gas maravilloso expulsan las hojas al aire que respiramos?"
        },
        options: [
          { letter: "A", text: { gl: "Osíxeno", es: "Oxígeno" } },
          { letter: "B", text: { gl: "Dióxido de carbono", es: "Dióxido de carbono" } },
          { letter: "C", text: { gl: "Fume gris", es: "Humo gris" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Exacto! As plantas regálannos o osíxeno que necesitamos as persoas e os animais para vivir.",
          es: "¡Exacto! Las plantas nos regalan el oxígeno que necesitamos personas y animales para vivir."
        }
      },
      {
        id: 503,
        question: {
          gl: "Por onde absorbe a planta o dióxido de carbono que hai no aire?",
          es: "¿Por dónde absorbe la planta el dióxido de carbono que hay en el aire?"
        },
        options: [
          { letter: "A", text: { gl: "Polas follas", es: "Por las hojas" } },
          { letter: "B", text: { gl: "Polas raíces soterradas", es: "Por las raíces bajo tierra" } },
          { letter: "C", text: { gl: "Polas flores murchas", es: "Por las flores marchitas" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Fantástico! As follas captan o dióxido de carbono a través de poriños microscópicos chamados estomas.",
          es: "¡Fantástico! Las hojas captan el dióxido de carbono del aire a través de pequeños poros."
        }
      },
      {
        id: 504,
        question: {
          gl: "Como sobe a auga absorbida dende a raíz ata as follas máis altas?",
          es: "¿Cómo sube el agua absorbida desde la raíz hasta las hojas más altas?"
        },
        options: [
          { letter: "A", text: { gl: "Sobe polo interior do talo coma por tubaxes", es: "Sube por el interior del tallo como por tuberías" } },
          { letter: "B", text: { gl: "Cae dende as nubes", es: "Cae desde las nubes" } },
          { letter: "C", text: { gl: "Voa polo aire", es: "Vuela por el aire" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Genial! O interior do talo ten condutos moi finos que levan a auga ata as follas.",
          es: "¡Genial! El interior del tallo tiene conductos que transportan el agua hasta las hojas."
        }
      },
      {
        id: 505,
        question: {
          gl: "Verdadeiro ou Falso: As plantas tamén respiran (toman osíxeno e botan dióxido de carbono) de día e de noite.",
          es: "Verdadero o Falso: Las plantas también respiran (toman oxígeno y expulsan CO₂) de día y de noche."
        },
        options: [
          { letter: "A", text: { gl: "Verdadeiro: Respiran as 24 horas", es: "Verdadero: Respiran las 24 horas" } },
          { letter: "B", text: { gl: "Falso: Nunca respiran", es: "Falso: Nunca respiran" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Bravo! Ao respirar fano coma nós (toman O₂ e botan CO₂), mentres que na fotosíntese fano ao revés (toman CO₂ e botan O₂).",
          es: "¡Bravo! Al respirar lo hacen como nosotros (toman O₂ y expulsan CO₂), y en la fotosíntesis toman CO₂ y liberan O₂."
        }
      }
    ]
  },

  // Punto 6: Guía de debuxo de exame
  6: {
    sectionId: 6,
    sectionTitle: {
      gl: "Punto 6: Guía visual para debuxar a fotosíntese no exame",
      es: "Punto 6: Guía visual para dibujar la fotosíntesis en el examen"
    },
    badgeTitle: {
      gl: "Mini-Quiz 6 · Debuxo do exame",
      es: "Mini-Quiz 6 · Dibujo del examen"
    },
    questions: [
      {
        id: 601,
        question: {
          gl: "De que cor debe ser a frecha que vai dende a terra cara á raíz con «Auga e sales minerais»?",
          es: "¿De qué color debe ser la flecha desde la tierra hacia la raíz con «Agua y sales minerales»?"
        },
        options: [
          { letter: "A", text: { gl: "Frecha AZUL", es: "Flecha AZUL" } },
          { letter: "B", text: { gl: "Frecha vermella", es: "Flecha roja" } },
          { letter: "C", text: { gl: "Frecha negra", es: "Flecha negra" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Moi ben! A frecha azul representa a auga que entra pola raíz dende o chan mollado.",
          es: "¡Muy bien! La flecha azul representa el agua que entra por la raíz desde el suelo húmedo."
        }
      },
      {
        id: 602,
        question: {
          gl: "De que cor debemos pintar as frechas que caen dende o Sol cara ás follas?",
          es: "¿De qué color debemos pintar las flechas que caen desde el Sol hacia las hojas?"
        },
        options: [
          { letter: "A", text: { gl: "AMARELA ou laranxa (Luz solar)", es: "AMARILLA o naranja (Luz solar)" } },
          { letter: "B", text: { gl: "Azul mariño", es: "Azul marino" } },
          { letter: "C", text: { gl: "Marrón escuro", es: "Marrón oscuro" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Exacto! A cor amarela ou laranxa sinala a enerxía da luz do Sol que cae sobre a folla.",
          es: "¡Exacto! El color amarillo o naranja señala la energía de la luz solar que ilumina la hoja."
        }
      },
      {
        id: 603,
        question: {
          gl: "Que gas representa a frecha VERMELLA que entra dende o aire cara á folla?",
          es: "¿Qué gas representa la flecha ROJA que entra desde el aire hacia la hoja?"
        },
        options: [
          { letter: "A", text: { gl: "Dióxido de carbono (CO₂)", es: "Dióxido de carbono (CO₂)" } },
          { letter: "B", text: { gl: "Auga de choiva", es: "Agua de lluvia" } },
          { letter: "C", text: { gl: "Fume escuro", es: "Humo oscuro" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Fantástico! A frecha vermella representa o dióxido de carbono que a folla absorbe do aire.",
          es: "¡Fantástico! La flecha roja representa el dióxido de carbono que la hoja absorbe del aire."
        }
      },
      {
        id: 604,
        question: {
          gl: "Que frecha de cor VERDE brillante debemos debuxar saíndo triunfante da folla ao aire?",
          es: "¿Qué flecha de color VERDE brillante debemos dibujar saliendo triunfante de la hoja hacia el aire?"
        },
        options: [
          { letter: "A", text: { gl: "Osíxeno (O₂)", es: "Oxígeno (O₂)" } },
          { letter: "B", text: { gl: "Pedras", es: "Piedras" } },
          { letter: "C", text: { gl: "Zume bruto", es: "Savia bruta" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "Bravo! A frecha verde sae da folla cara ao ceo co osíxeno que nós respiramos.",
          es: "¡Bravo! La flecha verde sale de la hoja hacia el cielo con el oxígeno que respiramos."
        }
      },
      {
        id: 605,
        question: {
          gl: "A Regra de Ouro do debuxo do exame: cantas cousas entran na planta e que gas sae?",
          es: "La Regla de Oro del dibujo del examen: ¿cuántas cosas entran en la planta y qué gas sale?"
        },
        options: [
          { letter: "A", text: { gl: "Entran 3 cousas (Auga, Sol e CO₂) e sae 1 tesouro (Osíxeno)", es: "Entran 3 cosas (Agua, Sol y CO₂) y sale 1 tesoro (Oxígeno)" } },
          { letter: "B", text: { gl: "Non entra nada e sae terra", es: "No entra nada y sale tierra" } },
          { letter: "C", text: { gl: "Entran 50 cousas", es: "Entran 50 cosas" } }
        ],
        correctAnswer: "A",
        explanation: {
          gl: "PERFECTO! Lembra para o exame: 3 cousas entran (azul, amarelo, vermello) e 1 gran gas sae (verde osíxeno)!",
          es: "¡PERFECTO! Recuerda para el examen: entran 3 cosas (azul, amarillo, rojo) y sale 1 gran tesoro (verde oxígeno)."
        }
      }
    ]
  }
};
