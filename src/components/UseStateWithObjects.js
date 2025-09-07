import React, { useState } from "react";

function UseStateWithObjects() {
  // const [property, setProperty] = useState(initiële waarde property).
  // In dit geval is de initiële waarde een object! --> useState({property1: "value1", property2: "value2"})
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) =>
            setName({
                // We gebruiken weer de spreadingsmethode
                // ...name ----> door dit te doen, wordt het hele name-object in 
                // de nieuwe versie gekopieerd.
              ...name,
              firstName: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) =>
            setName({
                // We gebruiken weer de spreadingsmethode
                // ...name ----> door dit te doen, wordt het hele name-object in 
                // de nieuwe versie gekopieerd.
              ...name,
              lastName: e.target.value,
            })
          }
        />
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default UseStateWithObjects;
