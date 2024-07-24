import React, { useContext, useState } from "react";
import NoteContext from "../contex/notes/notecontext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "default" });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3 mx-3">
      <h2>Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
            minLength={5}
            required
            placeholder="Title..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Take a Note...
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
            placeholder="Take a Note..."
          />
        </div>
        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add Note
        </button>
        <button className="btn btn-primary float-end" onclick="window.location.href='/about';">
          View Notes  <i className="fa-solid fa-circle-arrow-right"></i>
        </button>
      </form>
    </div>
  );
};

export default AddNote;
