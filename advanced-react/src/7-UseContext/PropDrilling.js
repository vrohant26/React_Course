import React, { useState } from "react";

export default function PropDrilling() {
  const data = [
    { id: "1", name: "Rohant" },
    { id: "2", name: "Vrushabhee" },
    { id: "3", name: "Rajilyn" },
    { id: "4", name: "Jacky" },
  ];

  const remove = (id) => {
    setPeople((peop) => {
      return peop.filter((rem) => rem.id !== id);
    });
  };

  const [People, setPeople] = useState(data);

  return (
    <div>
      <h2 className="text-center">Prop Drilling</h2>
      {<List people={People} remove={remove} />}
    </div>
  );
}

const List = ({ people, remove }) => {
  return (
    <div className="my-5">
      {people.map((peep) => {
        return <SinglePerson key={peep.id} peep={peep} remove={remove} />;
      })}
    </div>
  );
};

const SinglePerson = ({ peep, remove }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        {peep.name}
        <button
          className="btn btn-danger"
          onClick={() => {
            remove(peep.id);
          }}
        >
          remove
        </button>
      </li>
    </>
  );
};
