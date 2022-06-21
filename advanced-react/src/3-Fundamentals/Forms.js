//forms individual inputs
import React, { useState } from "react";

export default function Forms() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Name === "" && Email === "") {
      alert("Plese Enter Credentials");
      // console.log("Please Enter Credentials");
    } else {
      const person = { id: new Date().getTime().toString(), Name, Email };
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
    }
  };

  return (
    <>
      <h2 className="text-center">Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameId"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailId"
            placeholder="xyz@example.com"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            rows="3"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-info ">
            Add Member
          </button>
        </div>
      </form>
      <ul className="list-group my-5">
        {people.map((person) => {
          const { id, Name, Email } = person;
          return (
            <li
              key={id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {Name}
              <span>{Email}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
