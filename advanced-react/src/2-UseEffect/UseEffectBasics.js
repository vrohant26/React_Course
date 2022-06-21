import React, { useState, useEffect } from "react";

export default function UseEffectBasics() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("effect rendered", value);
    if (value >= 1) {
      document.title = `New Message(${value})`;
    }
  }, [value]); //useffect will only be called if [value] is getting changed but it will render the first time

  return (
    <>
      <div className="text-center">
        <h2 className="my-5">{value}</h2>
        <button className="btn btn-dark" onClick={() => setValue(value + 1)}>
          Click
        </button>
        <h6 className="text-danger mt-3">
          Console log for Extra Details
          <br /> Also Check the Title
        </h6>
      </div>
    </>
  );
}
