import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(url);
      const jsonData = await fetchData.json();
      setData(jsonData);
      setShow(false);
    };
    getData();
  }, [url]);
  //   console.log(data);

  return { data, show };
};
