import React, { useState, useEffect } from "react";

// SERVICES
import userService from '../services/userService';

function Temp() {
  const [users, setusers] = useState(null);

  useEffect(() => {
    if(!users) {
      getUsers();
    }
  })

  const getUsers = async () => {
    let res = await userService.getAll();
    console.log(res);
    setusers(res);
  }

  const renderUser = user => {
    return (
      <li key={user._id} className="list__item user">
        <h3 className="user__name">{user.username}</h3>
        <p className="user__email">{user.email}</p>
      </li>
    );
  };

  return (
    <div className="Temp">
      <ul className="list">
        {(users && users.length > 0) ? (
          users.map(user => renderUser(user))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
}

export default Temp;
