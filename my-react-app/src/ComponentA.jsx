import ComponentB from "./ComponentB.jsx";
import React, { useState, createContext } from "react";

export let UserContext = createContext();
function ComponentA() {
  const [user, setUser] = useState("Kesavan");
  return (
    <>
      <div className="box">
        <h1>ComponentA</h1>
        <h1>Hello {user}</h1>
        <UserContext.Provider value={user}>
          <ComponentB />
        </UserContext.Provider>
      </div>
    </>
  );
}
export default ComponentA;
