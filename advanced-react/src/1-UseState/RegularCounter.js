import React from "react";

export default function RegularCounter() {
  const [value, setValue] = React.useState(0);
  return (
    <div className="my-5 text-center">
      <h2>Regular Counter</h2>
      <h1 className="my-5">{value}</h1>
      <button className="btn btn-dark mx-2" onClick={() => setValue(value - 1)}>
        Decrease
      </button>
      <button className="btn btn-dark mx-2" onClick={() => setValue(0)}>
        Reset
      </button>
      <button className="btn btn-dark mx-2" onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </div>
  );
}
