import React,{useEffect,useContext} from 'react';
import NoteContext from "../contex/notes/notecontext";
const About = () => {
    
  const context = useContext(NoteContext);
  const {getUserApi } = context;
  useEffect(() => {getUserApi();
}, []);
  return (
    <>
     <h1>this is about page</h1> 
    </>
  )
}

export default About;
