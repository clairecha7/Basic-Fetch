import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Main.css";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10&seed=foo")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <>
      <div className="title-container">
        <h1 className="usertitle">Meet our users...</h1>
      </div>

      <div className="container">
        {data.map((user) => (
          <div key={user.id} className="card">
            <Card data={user} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
