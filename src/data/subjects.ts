export type Language = 'gl' | 'es';

export interface SubjectTopic {
  id: string;
  number: number;
  title: {
    gl: string;
    es: string;
  };
  description: {
    gl: string;
    es: string;
  };
  icon: string;
  color: string;
  isAvailable: boolean;
  sectionsCount: number;
  quizQuestionsCount: number;
}

export interface Subject {
  id: string;
  name: {
    gl: string;
    es: string;
  };
  subtitle: {
    gl: string;
    es: string;
  };
  icon: string;
  themeColor: string;
  badgeColor: string;
  topics: SubjectTopic[];
}

export const SUBJECTS_DATA: Subject[] = [
  {
    id: 'ciencias-natureza',
    name: {
      gl: 'Ciencias da Natureza',
      es: 'Ciencias de la Naturaleza'
    },
    subtitle: {
      gl: 'Plantas, animais, seres vivos e o noso planeta',
      es: 'Plantas, animales, seres vivos y nuestro planeta'
    },
    icon: '🌱',
    themeColor: 'emerald',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    topics: [
      {
        id: 'tema-1-plantas',
        number: 1,
        title: {
          gl: 'Tema 1: As plantas e os seres vivos',
          es: 'Tema 1: Las plantas y los seres vivos'
        },
        description: {
          gl: 'Funcións vitais, clasificación dos microbios, fotosíntese e partes da flor',
          es: 'Funciones vitales, clasificación de microbios, fotosíntesis y partes de la flor'
        },
        icon: '🌿',
        color: 'emerald',
        isAvailable: true,
        sectionsCount: 6,
        quizQuestionsCount: 20
      },
      {
        id: 'tema-2-animais',
        number: 2,
        title: {
          gl: 'Tema 2: Os animais vertebrados e invertebrados',
          es: 'Tema 2: Los animales vertebrados e invertebrados'
        },
        description: {
          gl: 'Como se alimentan, como respiran e como se clasifican os animais',
          es: 'Cómo se alimentan, cómo respiran y cómo se clasifican los animales'
        },
        icon: '🦊',
        color: 'teal',
        isAvailable: false,
        sectionsCount: 5,
        quizQuestionsCount: 15
      }
    ]
  },
  {
    id: 'ciencias-sociais',
    name: {
      gl: 'Ciencias Sociais',
      es: 'Ciencias Sociales'
    },
    subtitle: {
      gl: 'A nosa contorna, vilas, paisaxes e historia',
      es: 'Nuestro entorno, pueblos, paisajes e historia'
    },
    icon: '🌍',
    themeColor: 'sky',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    topics: [
      {
        id: 'tema-soc-1',
        number: 1,
        title: {
          gl: 'Tema 1: O relevo e as paisaxes de Galicia',
          es: 'Tema 1: El relieve y los paisajes'
        },
        description: {
          gl: 'Montañas, ríos, rías, costas e chairas',
          es: 'Montañas, ríos, rías, costas y llanuras'
        },
        icon: '🏔️',
        color: 'sky',
        isAvailable: false,
        sectionsCount: 4,
        quizQuestionsCount: 10
      }
    ]
  },
  {
    id: 'matematicas',
    name: {
      gl: 'Matemáticas',
      es: 'Matemáticas'
    },
    subtitle: {
      gl: 'Números, táboas de multiplicar, cálculo e xeometría',
      es: 'Números, tablas de multiplicar, cálculo y geometría'
    },
    icon: '📐',
    themeColor: 'amber',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    topics: [
      {
        id: 'tema-mat-1',
        number: 1,
        title: {
          gl: 'Tema 1: As táboas de multiplicar e problemas',
          es: 'Tema 1: Las tablas de multiplicar y problemas'
        },
        description: {
          gl: 'Xogos de cálculo rápido e retos divertidos',
          es: 'Juegos de cálculo rápido y retos divertidos'
        },
        icon: '✖️',
        color: 'amber',
        isAvailable: false,
        sectionsCount: 6,
        quizQuestionsCount: 20
      }
    ]
  },
  {
    id: 'linguas',
    name: {
      gl: 'Lingua Galega e Castelá',
      es: 'Lengua Gallega y Castellana'
    },
    subtitle: {
      gl: 'Ortografía, vocabulario, comprensión lectora e gramática',
      es: 'Ortografía, vocabulario, comprensión lectora y gramática'
    },
    icon: '📚',
    themeColor: 'violet',
    badgeColor: 'bg-violet-100 text-violet-800 border-violet-200',
    topics: [
      {
        id: 'tema-lin-1',
        number: 1,
        title: {
          gl: 'Tema 1: Substantivos, adxectivos e acentuación',
          es: 'Tema 1: Sustantivos, adjetivos y acentuación'
        },
        description: {
          gl: 'Tipos de palabras, sílabas tónicas e signos de puntuación',
          es: 'Tipos de palabras, sílabas tónicas y signos de puntuación'
        },
        icon: '✍️',
        color: 'violet',
        isAvailable: false,
        sectionsCount: 4,
        quizQuestionsCount: 15
      }
    ]
  }
];
