import React from "react";
import { data } from "../data";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PeopleDetails() {
  const history = useNavigate();
  const { id } = useParams();
  //   console.log(id);
  const [name, setName] = useState("");
  const [Desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  //   const [People, setPeople] = useState({ name: "", desc: "", img: "" });

  useEffect(() => {
    const Person = data.find((peep) => peep.id === parseInt(id));
    setName(Person.name);
    setDesc(Person.desc);
    setImg(Person.img);
    // setPeople({Person.name});
  }, [id]);

  return (
    <div className="people-details">
      <div className="text-right">
        <button
          to="localhost/3001/UseStateBasicsArray"
          className="btn btn-danger"
          onClick={() => history(-1)} 
        >
          X
        </button>
      </div>
      <div className="card">
        <h1 className="text-center">{img}</h1>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{Desc}</p>
        </div>
      </div>
    </div>
  );
}
