import React from "react";

const TextInput = (props) => {
  return (
    <div >
      <label className="label">{props.label}</label>
      <input 
             type={props.type} 
             value={props.value}
             placeholder={props.placeholder} 
             onChange={props.handleChange} />
    </div>
  );
};

export default TextInput;