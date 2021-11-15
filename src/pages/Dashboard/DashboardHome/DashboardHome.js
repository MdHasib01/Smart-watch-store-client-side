import React from "react";
import useAuth from "../../../hooks/useAuth";
import photoURL from "../../../profile.jpg";

const DashboardHome = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div>
      {user.email ? (
        <div>
          {user.photoURL ? (
            <img
              style={{ width: "60px", borderRadius: "50px" }}
              src={user.photoURL}
              alt=""
            />
          ) : (
            <img
              style={{ width: "60px", borderRadius: "50px" }}
              src={photoURL}
              alt=""
            />
          )}
          <h2>{user.displayName}</h2>
          <p> {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashboardHome;
