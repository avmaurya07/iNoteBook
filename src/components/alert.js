import React from "react";

const Alert = (props) => {
  return (
    <div>
      <div style={{ height: "50px" }}>
        {props.alert && (
          <div>
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>{props.alert} </strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
