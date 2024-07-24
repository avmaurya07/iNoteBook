import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../contex/notes/notecontext";
import Noteitem from "./noteitem";

const Notelist = () => {
  const context = useContext(NoteContext);
  const { Notes, getNotesApi, editNote } = context;
  const [note, setNote] = useState({ eid: "", etitle: "", edescription: "" });
  useEffect(() => {
    getNotesApi();
    // eslint-disable-next-line
  }, []);

  const updateNote = (cnote) => {
    ref.current.click();
    setNote({
      id: cnote._id,
      etitle: cnote.title,
      edescription: cnote.description,
    });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const ref = useRef(null);

  const handleClick = (e) => {
    // e.preventdefault();
    editNote(note.id, note.etitle, note.edescription, note.tag);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    onChange={onChange}
                    value={note.etitle}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    value={note.edescription}
                    minLength={5}
                    required
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleClick}
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    disabled={note.etitle.length<5 || note.edescription.length<5}
                  >
                    Update Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {Notes.length !== 0 && (
        <div className="row my-3">
          <h2>Your Notes</h2>
          {Notes.map((notes) => {
            return (
              <Noteitem key={notes._id} updateNote={updateNote} note={notes} />
            );
          })}
        </div>
      )}
      {Notes.length === 0 && (
        <div className="position-absolute start-50 translate-middle">
          <h2>No Note Found...</h2>
        </div>
      )}
    </>
  );
};

export default Notelist;
