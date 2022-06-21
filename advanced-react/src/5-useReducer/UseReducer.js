import React, { useState, useReducer } from "react";
import Modal from "./Modal";

export default function UseReducer() {
  const reducer = (state, action) => {
    if (action.type === "ADD_PERSON") {
      // const newPerson = [...state.people, action.payload];
      return {
        ...state,
        people: [...state.people, action.payload],
        modal: true,
        modalContent: "Member Added!",
      };
    }
    if (action.type === "NO_INPUT") {
      return { ...state, modal: true, modalContent: "Input cannot be Empty !" };
    }
    if (action.type === "CLOSE_MODAL") {
      return { ...state, modal: false };
    }
    if (action.type === "REMOVE_PERSON") {
      const removedPerson = state.people.filter(
        (peep) => peep.id !== action.payload
      );

      return {
        ...state,
        people: removedPerson,
      };
    }
    return state;
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
    } else {
      dispatch({ type: "NO_INPUT" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      <h1 className="my-5 text-center">Add Member</h1>
      <form onSubmit={submit}>
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-dark my-3">
            Add Member
          </button>
        </div>
      </form>
      <ul className="list-group my-5">
        {state.people.map((peeps) => {
          const { id, name } = peeps;
          return (
            <li
              key={id}
              className="list-group-item d-flex justify-content-between "
            >
              {name}
              <span
                className="text-danger"
                onClick={() => {
                  dispatch({ type: "REMOVE_PERSON", payload: id });
                }}
              >
                <strong>remove</strong>
              </span>
            </li>
          );
        })}
      </ul>
      <div className="d-flex justify-content-end my-4">
        {state.modal && (
          <Modal modalContent={state.modalContent} closeModal={closeModal} />
        )}
      </div>
    </>
  );
}
