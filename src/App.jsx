import { useState, useEffect } from 'react';
import './index.css';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';

export default function App() {
  // ✅ INIT state terus dari localStorage
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  // SAVE to localStorage bila notes berubah
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
      time: new Date().toLocaleString(),
    };

    // functional update (anti bug async)
    setNotes(prev => [newNote, ...prev]);
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  return (
    <div className="container">
      <h1>🌟 Modern Notepad</h1>
      <NoteEditor addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}
