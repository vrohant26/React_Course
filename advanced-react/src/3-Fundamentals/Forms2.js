//forms multiple inputs
import React, { useState } from "react";

export default function Forms2() {
  //   const [Name, setName] = useState("");
  //   const [Email, setEmail] = useState("");
  //   const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({ name: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson((peep) => {
      return { ...peep, [name]: value };
    });
  };

  const submit = (e) => {
    e.preventDefault();

    setPeople((pers) => {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      return [...pers, newPerson];
    });

    // console.log(person);
    setPerson({ name: "", email: "", age: "" });
  };

  return (
    <>
      <h2 className="text-center">Form 2</h2>

      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="nameId"
            value={person.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="emailId"
            placeholder="xyz@example.com"
            value={person.email}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            name="age"
            id="AgeId"
            placeholder="23"
            value={person.age}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-dark ">
            Add Member
          </button>
        </div>
      </form>

      <table className="table-dark table-striped mt-4 table">
        <thead>
          <tr>
            <th scope="col">Id No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => {
            const { id, name, email, age } = person;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
