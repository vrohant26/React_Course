import React, { useState, useEffect } from "react";

export default function UseEffectCleanup() {
  const [size, setSize] = useState(window.innerWidth);

  const width = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("triggered");
    window.addEventListener("resize", width);
  }, []);

  return (
    <>
      <div className="my-5 text-center">
        <h2>Screen Width</h2>
        <h3>{size}px</h3>
      </div>
    </>
  );
}
