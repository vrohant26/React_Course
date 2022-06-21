import React, { useRef } from "react";
//useRef acts 'almost' like useState
//useRef can also access divs

export default function UseRef() {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Input</label>
          <input type="text" ref={refContainer} className="form-control" />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-info my-3">
            Submit
          </button>
        </div>
      </form>
      <div className="text-center" ref={divContainer}>
        Hello World
      </div>
      <h4 className="text-danger text-center">Check Console for more</h4>
    </div>
  );
}
