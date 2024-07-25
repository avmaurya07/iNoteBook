import React from "react";
import AddNote from "./addNote";
import Notelist from "./notelist";

const NoteComp = () => {
  return (
    <>
      <AddNote />
      <hr />
      <br />
      <Notelist />
    </>
  );
};

export default NoteComp;
