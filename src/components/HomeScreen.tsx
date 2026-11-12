import { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, Clock, Lock, CheckCircle2, PlusCircle, X } from 'lucide-react';
import { SUBJECTS_DATA, Subject, SubjectTopic, Language } from '../data/subjects';
import { playTapSound, playSuccessSound } from '../utils/soundEffects';

interface HomeScreenProps {
  language: Language;
  onSelectTopic: (subjectId: string, topicId: string) => void;
}

export default function HomeScreen({ language, onSelectTopic }: HomeScreenProps) {
  const [selectedUpcomingSubject, setSelectedUpcomingSubject] = useState<Subject | null>(null);
  const [userCustomNote, setUserCustomNote] = useState('');
  const [notesList, setNotesList] = useState<string[]>([]);
  const [showNoteSavedToast, setShowNoteSavedToast] = useState(false);

  const handleSaveNote = () => {
    if (!userCustomNote.trim()) return;
    playSuccessSound();
    setNotesList((prev) => [...prev, userCustomNote.trim()]);
    setUserCustomNote('');
    setShowNoteSavedToast(true);
    setTimeout(() => setShowNoteSavedToast(false), 2500);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Hero Banner */}
      <div className="bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-900 text-white rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
        {/* Subtle decorative background shapes */}
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-8 w-40 h-40 bg-amber-400/10 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-100 border border-white/20">
            <span>🎒</span>
            <span>
              {language === 'gl' ? 'Portal de Estudo de 3.º de Primaria' : 'Portal de Estudio de 3.º de Primaria'}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white font-display leading-tight">
            {language === 'gl'
              ? 'Benvida ao teu recuncho de estudo! 🌟'
              : '¡Bienvenida a tu rincón de estudio! 🌟'}
          </h1>

          <p className="text-sm md:text-base text-emerald-100 leading-relaxed">
            {language === 'gl'
              ? 'Escolle a túa materia para repasar con tarxetas visuais, esquemas interactivos e xogos de preguntas preparados para o teu exame.'
              : 'Elige tu asignatura para repasar con tarjetas visuales, esquemas interactivos y juegos de preguntas preparados para tu examen.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-medium text-emerald-200">
            <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{language === 'gl' ? 'Adaptado a Galicia' : 'Adaptado a Galicia'}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{language === 'gl' ? 'Deseñado para tabletas' : 'Diseñado para tablets'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">📚</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display">
              {language === 'gl' ? 'Materias de 3.º de Primaria' : 'Asignaturas de 3.º de Primaria'}
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            {language === 'gl' ? '4 Materias principais' : '4 Asignaturas principales'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SUBJECTS_DATA.map((subject) => {
            const hasActiveTopic = subject.topics.some((t) => t.isAvailable);

            return (
              <div
                key={subject.id}
                className={`bg-white border rounded-3xl p-6 transition-all shadow-xs flex flex-col justify-between ${
                  hasActiveTopic
                    ? 'border-emerald-300 ring-2 ring-emerald-500/10 hover:shadow-md'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Subject header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                        {subject.icon}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 font-display">
                          {subject.name[language]}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {subject.subtitle[language]}
                        </p>
                      </div>
                    </div>

                    {hasActiveTopic ? (
                      <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {language === 'gl' ? 'Activo' : 'Activo'}
                      </span>
                    ) : (
                      <span className="bg-slate-100 text-slate-600 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        <span>{language === 'gl' ? 'En breve' : 'En breve'}</span>
                      </span>
                    )}
                  </div>

                  {/* Topics List within this subject */}
                  <div className="space-y-2 mt-4">
                    {subject.topics.map((topic: SubjectTopic) => (
                      <div
                        key={topic.id}
                        onClick={() => {
                          if (topic.isAvailable) {
                            playTapSound();
                            onSelectTopic(subject.id, topic.id);
                          } else {
                            playTapSound();
                            setSelectedUpcomingSubject(subject);
                          }
                        }}
                        className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                          topic.isAvailable
                            ? 'bg-emerald-50/70 border-emerald-200 hover:bg-emerald-100/70 hover:border-emerald-300'
                            : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{topic.icon}</span>
                          <div>
                            <span className="text-xs font-bold text-slate-900 block font-display">
                              {topic.title[language]}
                            </span>
                            <span className="text-[11px] text-slate-600 line-clamp-1">
                              {topic.description[language]}
                            </span>
                          </div>
                        </div>

                        {topic.isAvailable ? (
                          <div className="flex items-center gap-1 text-emerald-700 font-bold text-xs shrink-0 bg-white px-3 py-1.5 rounded-xl border border-emerald-200 shadow-2xs">
                            <span>{language === 'gl' ? 'Entrar' : 'Entrar'}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-slate-500 text-xs shrink-0">
                            <Lock className="w-3.5 h-3.5" />
                            <span className="text-[11px]">
                              {language === 'gl' ? 'Ver aviso' : 'Ver aviso'}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom metadata / call to action */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  {hasActiveTopic ? (
                    <button
                      onClick={() => {
                        playTapSound();
                        onSelectTopic(subject.id, 'tema-1-plantas');
                      }}
                      className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-2xs cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>
                        {language === 'gl'
                          ? 'Estudar Tema 1: As plantas e os seres vivos'
                          : 'Estudiar Tema 1: Las plantas y los seres vivos'}
                      </span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        playTapSound();
                        setSelectedUpcomingSubject(subject);
                      }}
                      className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-xs"
                    >
                      <span>
                        {language === 'gl' ? 'Engadir apuntamentos ou ver tema' : 'Añadir apuntes o ver tema'}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for Upcoming Subjects / Teacher Notes */}
      {selectedUpcomingSubject && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{selectedUpcomingSubject.icon}</span>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  {selectedUpcomingSubject.name[language]}
                </h3>
              </div>
              <button
                onClick={() => setSelectedUpcomingSubject(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs md:text-sm text-amber-900 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <span>⏳</span>
                <span>
                  {language === 'gl' ? 'Materia en preparación!' : '¡Asignatura en preparación!'}
                </span>
              </p>
              <p className="text-amber-800">
                {language === 'gl'
                  ? 'Esta sección está lista para engadir os novos temas do libro ou apuntamentos de clase. Podes deixar anotacións ou recordatorios aquí debaixo:'
                  : 'Esta sección está lista para añadir los nuevos temas del libro o apuntes de clase. Puedes dejar notas o recordatorios aquí abajo:'}
              </p>
            </div>

            {/* Quick notepad for parents or student */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                {language === 'gl'
                  ? '📝 Caderno de notas para este exame:'
                  : '📝 Cuaderno de notas para este examen:'}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userCustomNote}
                  onChange={(e) => setUserCustomNote(e.target.value)}
                  placeholder={
                    language === 'gl'
                      ? 'Ex: Repasar páxinas 40-45 o xoves...'
                      : 'Ej: Repasar páginas 40-45 el jueves...'
                  }
                  className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  onKeyDown={(e) => e.key === 'Enter' && handleSaveNote()}
                />
                <button
                  onClick={handleSaveNote}
                  className="px-3.5 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 cursor-pointer flex items-center gap-1 shrink-0"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>{language === 'gl' ? 'Gardar' : 'Guardar'}</span>
                </button>
              </div>

              {/* Toast confirmation */}
              {showNoteSavedToast && (
                <p className="text-xs text-emerald-700 font-semibold animate-fade-in">
                  ✓ {language === 'gl' ? 'Nota gardada con éxito!' : '¡Nota guardada con éxito!'}
                </p>
              )}

              {/* Saved notes list */}
              {notesList.length > 0 && (
                <div className="space-y-1.5 pt-2 max-h-36 overflow-y-auto">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    {language === 'gl' ? 'Notas gardadas:' : 'Notas guardadas:'}
                  </span>
                  {notesList.map((note, index) => (
                    <div
                      key={index}
                      className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2"
                    >
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedUpcomingSubject(null)}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 cursor-pointer"
              >
                {language === 'gl' ? 'Pechar aviso' : 'Cerrar aviso'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
