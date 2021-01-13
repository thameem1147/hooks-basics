import React, { useState } from "react";

function App() {
  const [init, fin] = useState(0);

  function increase() {
    fin(init + 1);
  }
  function decrease() {
    fin(init - 1);
  }
  return (
    <div className="container">
      <h1>{init}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
