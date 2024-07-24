import { useState } from "react";
import NoteContext from "./notecontext";
const host = "http://localhost:5000";
const auth =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhMTBhZDhjNGEwN2I3ODJiOTU5M2UxIn0sImlhdCI6MTcyMTgzMDE5Mn0.m3OlgNu34SKy4ZsCrThzPkde9rvEMfdnU9wBMU8SISU";

const NoteState = (props) => {
  const [Notes, setNotes] = useState([]);
  const [User, setUser] = useState([]);

  //api call to add note
  const addNotesApi = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "post",
      headers: {
        "auth-token": `${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    return response.JSON;
  }; ///

  ///api call to edit note
  const editNoteApi = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "put",
      headers: {
        "auth-token": `${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    return response.JSON;
  }; ///

  ///api call to delete note
  const delNoteApi = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "delete",
      headers: {
        "auth-token": `${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    return response.JSON;
  }; ///

  ///api call to get all notes
  const getNotesApi = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token": `${auth}`,
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setNotes(json);
  }; ///

  ///api call to get user data
  const getUserApi = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "auth-token": `${auth}`,
      },
    });
    const json = await response.json();
    setUser(json);
  }; ///

  // add a note
  const addNote = async (title, description, tag) => {
    //api call
    // eslint-disable-next-line
    const json = await addNotesApi(title, description, tag);
    await getNotesApi();
    // console.log(json)
  };

  //delete a note
  const delNote = async (id) => {
    //api call
    // eslint-disable-next-line
    const json = await delNoteApi(id);
    await getNotesApi();
  };
  //edit a note
  const editNote = async (id, title, description, tag) => {
    //api call
    // eslint-disable-next-line
    const json = await editNoteApi(id, title, description, tag);
    await getNotesApi();
  };

  return (
    <NoteContext.Provider
      value={{
        Notes,
        addNote,
        delNote,
        editNote,
        getNotesApi,
        getUserApi,
        User,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
