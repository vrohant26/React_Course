import React, { useState, useContext } from "react";

const PersonContext = React.createContext();
//After creating context we have access to: Provider and Consumer

export default function UseContext() {
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
    <PersonContext.Provider value={{ remove, People }}>
      <h2 className="text-center">Use Context</h2>
      {<List />}
    </PersonContext.Provider>
  );
}

const List = () => {
  const mainData = useContext(PersonContext);
  //   console.log(mainData);
  return (
    <div className="my-5">
      {mainData.People.map((peep) => {
        return <SinglePerson key={peep.id} peep={peep} />;
      })}
    </div>
  );
};

const SinglePerson = ({ peep }) => {
  const { remove } = useContext(PersonContext);
  //   console.log(remove);

  return (
    <>
      <li className="list-group-item d-flex justify-content-between list-group-item-info my-3">
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
