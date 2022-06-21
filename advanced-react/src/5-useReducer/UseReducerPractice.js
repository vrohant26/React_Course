import React, { useState, useReducer } from "react";
import ModalPractice from "./ModalPractice";

export default function UseReducerPractice() {
  const reducer = (state, action) => {
    if (action.type === "ADD_PERSON") {
      return {
        ...state,
        people: [...state.people, action.payload],
        modal: true,
        modalContent: "Added!",
      };
    }
    if (action.type === "REMOVE_PERSON") {
      return {
        ...state,
        people: state.people.filter((peep) => peep.id !== action.payload),
      };
    }
    if (action.type === "CLOSE") {
      return {
        ...state,
        modal: false,
      };
    }
    if (action.type === "EMPTY_INPUT") {
      alert("Input Cannot be Empty");
      return {
        ...state,
        modal: false,
      };
    }
  };
  const defaultState = {
    people: [],
    modal: false,
    modalContent: "",
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_PERSON", payload: newPerson });
      setName("");
    } else dispatch({ type: "EMPTY_INPUT" });
    // console.log(state);
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE" });
  };

  return (
    <div>
      <form className="center" onSubmit={submit}>
        <div className="my-5 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-info ">Add Member</button>
        </div>
      </form>
      <ul className="list-group my-5">
        {state.people.map((peep) => {
          const { id, name } = peep;
          return (
            <li
              key={id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {name}
              <span
                className="text-danger"
                onClick={() => {
                  dispatch({ type: "REMOVE_PERSON", payload: id });
                }}
              >
                remove
              </span>
            </li>
          );
        })}
      </ul>

      {state.modal && (
        <ModalPractice closeModal={closeModal} content={state.modalContent} />
      )}
    </div>
  );
}
