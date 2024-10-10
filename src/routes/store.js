import React, { useState, useEffect } from "react";

function Stores() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/stores")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="stores">
      <h1>{message}</h1>
    </div>
  );
}

export default Stores;
