import React, { useState, useEffect } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let total = 0;

    numbers.forEach((num) => {
      total += num;
    });

    setSum(total);
  }, [numbers]);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);

    if (!isNaN(value)) {
      setNumbers([...numbers, value]);
    }
  };

  return (
    <div>
       <h1>Sum Calculator</h1>
      <input type="number" onChange={handleChange} />

      <p>Sum: {sum}</p>
    </div>
  );
}

export default App;