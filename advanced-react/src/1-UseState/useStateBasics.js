import React, { useState } from "react";
import "../App.css";

export default function UseStateBasics() {
  const [text, setText] = useState("Hello");

  const change = () => {
    if (text === "Hello") {
      setText("World");
    } else {
      setText("Hello");
    }
  };

  return (
    <div className="my-5 text-center">
      <h2>{text}</h2>
      <button className=" btn btn-dark mt-3 " onClick={change}>
        Change Text
      </button>
    </div>
  );
}
