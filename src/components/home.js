import React, { useContext, useEffect } from "react";
import NoteComp from "./notescomp";
import NoteContext from "../contex/notes/notecontext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const context = useContext(NoteContext);
  const { User} = context;
  // useEffect(() => {
  //   if (!User.name) {
  //     navigate("/login");}
  // },[]);
  return (
    <>
      <NoteComp />
    </>
  );
};

export default Home;
