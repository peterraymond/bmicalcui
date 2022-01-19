import React from "react";

const TextInput = (props) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }}>
      <label className="label">{props.label}</label>&nbsp;
      <input 
             type={props.type} 
             value={props.value}
             placeholder={props.placeholder} 
             onChange={props.handleChange} />
    </div>
  );
};

export default TextInput;