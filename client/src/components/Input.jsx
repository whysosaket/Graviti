import React from "react";

const Input = (props) => {
    const { label, inputText } = props;
  return (
    <div>
      <div className="container">
        <div className="form-group row">
          <div className="col-xs-2 w-100">
            <label for={label} className="locationtag">{label}</label>
            <input className="form-control locationinput my-2" id={label} type="text" placeholder={inputText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
