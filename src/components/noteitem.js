import React,{useContext} from "react";
import NoteContext from "../contex/notes/notecontext";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { delNote } = context;
  const { note,updateNote } = props;
  return (
    <div className="col-md-3">
    <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-solid fa-pen-to-square mx-2" onClick = {()=>{updateNote(note)}}></i>
          <i className="fa-sharp fa-solid fa-trash mx-2" onClick = {()=>{delNote(note._id)}}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
