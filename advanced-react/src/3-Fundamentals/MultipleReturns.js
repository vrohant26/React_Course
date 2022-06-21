import React, { useEffect, useState } from "react";

export default function MultipleReturns() {
  const url = "https://api.github.com/users/mojombo";
  //   const url = "";

  const [isLoading, setIsloading] = useState(true);
  const [user, setUser] = useState();
  const [isError, setISerror] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((person) => {
        if (person.status >= 200 && person.status <= 299) {
          return person.json();
        } else {
          setIsloading(false);
          setISerror(true);
          throw new Error(person.statusText);
        }
      })
      .then((peep) => {
        setUser(peep.name);
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <h2>Loading.....</h2>
      </>
    );
  } else if (isError) {
    return (
      <>
        <h2>Error 404</h2>
      </>
    );
  }

  return <div>{user}</div>;
}
