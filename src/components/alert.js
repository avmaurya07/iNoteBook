import React,{useContext} from "react";
import NoteContext from "../contex/notes/notecontext";

const Alert = () => {
  
  const context = useContext(NoteContext);
  const { alert } = context;


  return (
    <div style={{ height: "50px" }}>
      {alert.msg && (
        <div>
          <div
            className={`alert ${
              alert.success ? "alert-success" : "alert-danger"
            } alert-dismissible fade show`}
            role="alert"
          >
            <strong>{alert.msg} </strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
