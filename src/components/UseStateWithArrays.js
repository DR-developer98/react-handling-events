import React, { useState } from "react";

function UseStateWithArrays() {
  const [nums, setNums] = useState([1, 2, 3]);
  const addNums = () => {
    // Hier hebben we de spread-methode gebruikt ...nums
    setNums([...nums, nums.length + 1]);
  };
  const removeNums = () => {
    setNums(
      nums.filter((item, idx) => {
        // Retourneert alleen de items waarvan de index niet gelijk is aan 
        // lengte nums -1.
        // Daarom wordt het laatste item altijd verwijderd: 
        // in een array van 3 elementen, heeft het laatste item index = 2 = lengte - 1 = 3 - 1
        return idx !== nums.length - 1;
      })
    );
  };

  return (
    <div>
      <button onClick={addNums}>Add item</button>
      <button onClick={removeNums}>Remove item</button>
      <ul>
        {nums.map((num) => {
            // Hier hebben we de .map methode gebruikt
            // om door de items van de lijst te itereren (niets nieuws)
          return <li key={num}>{num}</li>;
        })}
      </ul>
    </div>
  );
}

export default UseStateWithArrays;
