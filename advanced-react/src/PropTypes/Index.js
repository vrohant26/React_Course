import React from "react";
import { useFetch } from "../6-CustomHook/useFetch";
import Products from "./Products";

export default function Index() {
  const url =
    "https://raw.githubusercontent.com/vrohant26/Products/main/ListOfProd1.json";
  const { data } = useFetch(url);

  //   console.log(data);

  return (
    <>
      <h2 className="text-center">Products</h2>

      {data.map((prod) => {
        return <Products key={prod.id} prod={prod} />;
      })}
    </>
  );
}
