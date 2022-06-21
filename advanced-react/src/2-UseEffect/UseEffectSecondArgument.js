import React, { useState, useEffect } from "react";

export default function UseEffectSecondArgument() {
  const url = "https://api.github.com/users";

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2 className="text-center">Github Users</h2>
      <div className="d-flex justify-content-between flex-wrap">
        {users.map((people) => {
          const { id, login, avatar_url } = people;
          return (
            <div className="container1 my-2" key={id}>
              <div className="d-flex justify-content-center h-100">
                <div className="image_outer_container">
                  <div className="green_icon"></div>
                  <div className="image_inner_container">
                    <img src={avatar_url} alt="..." />
                  </div>
                </div>
              </div>
              <h5 className="text-center">{login}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
}
