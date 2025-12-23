import { useState } from "react";

function Greet() {
  let [name, setName] = useState("Disha");

  return (
    <div>
      <h1>Welcome, {name}</h1>

      <button onClick={() => setName("Disha kankarwal")}>
        Change Name
      </button>

      <div style={{ display: "flex", gap: "16px", marginTop: "12px" }}>
        <button>Red</button>
        <button>Blue</button>
        <button>Green</button>
      </div>
    </div>
  );
}

export default Greet;
