import React from "react";
import { useFetch } from "./useFetch";

export default function Randomapp() {
  const url = "https://api.github.com/users";

  const { data, show } = useFetch(url);
  console.log(data);

  return (
    <>
      <div className="h2 text-center">{show ? "Loading..." : "Data"}</div>;
      <h4 className="text-danger text-center">Console Log for more</h4>
    </>
  );
}
