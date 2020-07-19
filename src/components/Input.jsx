import React from "react";
import "../login.css";

export default function Input(props) {
  return (
    <div className="Input">
      <input
        id={props.name}
        autoComplete="false"
        required
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}