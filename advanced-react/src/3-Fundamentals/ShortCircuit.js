import React, { useState } from "react";

export default function ShortCircuit() {
  const [text, setText] = useState("PP"); // "" --> false ,  "pp" --> true
  const [isError, setIsError] = useState(true);

  return (
    <>
      <div className="container text-center">
        <h2>{text || "Rohant Villarosa"}</h2>
        <button
          className="btn btn-dark"
          onClick={() => {
            setIsError(!isError);
            setText("");
          }}
        >
          Toggle error
        </button>
        {isError && <h2>Error</h2>}
        {isError ? <h2>There is an Error</h2> : <h2> no Error</h2>}
      </div>
    </>
  );
}
