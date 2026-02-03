import { useState } from "react";

export default function NoteEditor({ addNote }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    addNote(text);
    setText("");
  };

  return (
    <div className="editor">
      <textarea
      rows="8"
        placeholder="Write your note here..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}
