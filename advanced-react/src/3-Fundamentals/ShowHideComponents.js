import React, { useState, useEffect } from "react";

export default function ShowHideComponents() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
      {show && <Item />}
    </>
  );
}

export function Item() {
  const [size, setSize] = useState(window.innerWidth);
  const checksize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checksize);
    return () => {
      window.removeEventListener("resize", checksize);
    };
  }, []);

  return (
    <>
      <h2>
        Window Size <br />
        {size} px
      </h2>
    </>
  );
}
