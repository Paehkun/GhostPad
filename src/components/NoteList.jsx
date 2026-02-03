export default function NoteList({ notes, deleteNote }) {
  if (notes.length === 0) {
    return <p>No notes yet 🌑 </p>;
  }

  return (
    <ul className="note-list">
      {notes.map(note => (
        <li key={note.id} className="note">
          <p>{note.text}</p>
          <small>{note.time}</small>
          <button onClick={() => deleteNote(note.id)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
}
