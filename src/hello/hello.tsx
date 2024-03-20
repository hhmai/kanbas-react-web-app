import React, { useState } from "react";
import { Navigate, Route, Routes, useParams } from "react-router";
import { Link } from "react-router-dom";

function HelloWorld() {
  const [q, g] = useState(0);
  const [x, j] = useState(1);
  const [k, h] = useState(1);
  const p = () => {
    h(k + x);
    g(x);
    j(k);
  };
  return (
    <div>
      W = {q}
      U = {x}
      F = {k}
      <button onClick={p}>M</button>
    </div>
  );
}

export default HelloWorld;

