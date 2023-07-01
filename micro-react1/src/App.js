import React from "react";
import "./App.css";
import { useSelector } from "react-redux";

const App = () => {
  const Counter1 = useSelector((state) => state.Counter1);
  return (
    <div className="app">
      <h1>Sub App 1</h1>
      <h2>Counter1:- {Counter1}</h2>
    </div>
  );
};

export default App;
