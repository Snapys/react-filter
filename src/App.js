import React, { useState, useEffect } from "react";

import "./App.scss";
import FetchAllUsers from "./service/fileServices";

import Button from "./components/Button";

function App() {
  const [moduleType, setModuleType] = useState("content_module");
  const [moduleNumbers, setModuleNumbers] = useState([]);
  const [userList, setUserList] = useState([]);

  const userPerModule = FetchAllUsers();
  const data = userPerModule[moduleType];

  console.log("All Data", data);

  useEffect(() => {
    const moduleNumbers = Object.keys(data);
    const moduleNumberList = moduleNumbers.map((moduleNumber) => {
      return moduleNumber;
    });
    setModuleNumbers(moduleNumberList);
  }, [moduleType]);

  const changeContentModule = () => {
    setModuleType("content_module");
  };

  const changeAuthModule = () => {
    setModuleType("auth_module");
  };

  const showUserListHandler = (moduleNumber) => {
    // const userList = Object.values(userPerModule[moduleType][moduleNumber]);
    // console.log(userList);
  };

  return (
    <div className="App">
      <header>
        <div className="module-type-filter__container container">
          <Button
            className={`${moduleType === "content_module" ? "active" : ""}`}
            onClick={changeContentModule}
          >
            Content_Module
          </Button>
          <Button
            className={`${moduleType === "auth_module" ? "active" : ""}`}
            onClick={changeAuthModule}
          >
            Auth_Module
          </Button>
          {/* {moduleType} */}
        </div>
      </header>
      <main className="container">
        <div className="module-list__container">
          <ul className="module-list__options container">
            {moduleNumbers.map((moduleNumber) => (
              <li key={moduleNumber}>
                <Button onClick={showUserListHandler(moduleNumber)}>
                  {moduleNumber}
                </Button>
              </li>
            ))}
          </ul>

          <div className="module-list__items">
            <p>Number of users in module </p>
            <ul>
              <li className="user">User 1</li>
              <li className="user">User 2</li>
              <li className="user">User 3</li>
            </ul>
            <div className="module-list__items__actions"></div>
          </div>

          <ul className="module-list__user-menu">
            <li>
              <button className="delete">Delete </button>
            </li>
            <li>
              <button className="advice">Advice</button>
            </li>
            <li>
              <button className="create">Create</button>
            </li>
            <li>
              <button className="submit" type="submit">
                Submit
              </button>
            </li>
          </ul>
        </div>
      </main>
      <footer>
        <p>Copyright© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
