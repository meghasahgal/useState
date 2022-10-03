import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  // console.log(useState('light'))
  const [theme, setTheme] = useState("light");
  const [counter, setCounter] = useState(0);

  return (
    <div className={theme}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <h1>{counter}</h1>
    </div>
  );
};

export default UseState;

// Beneath the Dark button, create an h1 element and use the count variable as the child element.

// Create a button element with the child text, Increment.
// Use an onClick event listener and the updater function for the count to increment the count.

// Create an onClick handler as an attribute to your button element.
// Remember that onClick handlers in React use camelCase and should be assigned a function.
// Give the onClick handler an anonymous function that returns the setTheme updater function invoked with the string argument 'dark'.
