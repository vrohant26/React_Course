import "../App.css";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { data } from "../data";

export default function UseStateBasicsArray() {
  const [Data, setData] = React.useState(data);

  const Refresh = () => {
    setData(data);
  };

  const remove = (id) => {
    let newPeople = Data.filter((person) => person.id !== id); //only filter those arrays that is not equal to id selected
    setData(newPeople);
  };

  return (
    <>
      <h2 className="my-5 text-center">Use State Basics Array</h2>
      <ul className="list-group ">
        {Data.map((people) => {
          const { id, name } = people;
          return (
            <li
              key={id}
              className=" list-group-item list-group-item-dark d-flex justify-content-between align-items-center my-3"
            >
              {name}
              <div className="d-flex ">
                <Link to={`${id}`} className="btn btn-primary">
                  View Details
                </Link>
                <span
                  onClick={() => remove(id)}
                  className="btn btn-danger mx-2"
                >
                  remove
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      ;
      <div className="text-center">
        <button className="btn btn-dark mb-5 " onClick={Refresh}>
          Refresh
        </button>
      </div>
      <h6 className="text-danger text-center">
        *Also implements useParams() and Outlet
      </h6>
      <div className="details">
        <Outlet />
      </div>
    </>
  );
}
