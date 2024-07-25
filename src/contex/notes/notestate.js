import { useState } from "react";
import NoteContext from "./notecontext";
// const config = require("../../config");
const host = "http://10.80.63.66:5000";
const auth = localStorage.getItem("token");
const NoteState = (props) => {
  const [Notes, setNotes] = useState([]);
  const [User, setUser] = useState([{name:"",email:""}]);
  const [alert,setAlert]=useState([{success:true,msg:""}]);

  const showAlert=(json)=>{
    setAlert({
      success:json.success,
      msg:json.msg
    })
    setTimeout(() => {
      setAlert({success:true,msg:""})
    }, 2000);
  }

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
    return response.json();
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
    return response.json();
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
    return response.json();
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
    const json = await addNotesApi(title, description, tag);
    await getNotesApi();
    showAlert(json);
  };

  //delete a note
  const delNote = async (id) => {
    //api call
    // eslint-disable-next-line
    const json = await delNoteApi(id);
    await getNotesApi();
    showAlert(json);
  };
  //edit a note
  const editNote = async (id, title, description, tag) => {
    //api call
    // eslint-disable-next-line
    const json = await editNoteApi(id, title, description, tag);
    await getNotesApi();
    showAlert(json);
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
        alert,
        showAlert,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
