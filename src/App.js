import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import Card from "./components/Card";

function App() {
  const [filter, setFilter] = useState("");
  const [gram, setGram] = useState(0);
  const [kilogram, setKiloGram] = useState(0);
  const [ounce, setOunce] = useState(0);

  const filterHandler = e => {
    setFilter(e.target.value);
  };

  // When items in array change, run provided function
  useEffect(
    function() {
      setGram(filter * 453.592);
      setKiloGram((filter * 453.592) / 1000);
      setOunce(filter * 16);
    },
    [filter]
  );

  return (
    <div className="container">
      <h1 className="text-center mb-4 text-light">Unit Converter</h1>
      <Input filter={filter} filterHandler={filterHandler} />
      <div id="output" className="text-light">
        <Card color="primary" title="Gram" value={gram} />
        <Card color="success" title="Kilogram" value={kilogram} />
        <Card color="danger" title="Ounce" value={ounce} />
      </div>
    </div>
  );
}

export default App;
