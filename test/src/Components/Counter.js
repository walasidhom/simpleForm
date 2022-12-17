import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  // componentDidMount
  //   useEffect(() => {
  //     console.log("The useEffect runs");
  //   }, []);

  // componentDidUpdate
  //   useEffect(() => {
  //     console.log("The useEffect runs");
  //   }, [count]);

  // componentDidUnmount
  //   useEffect(() => {
  //     console.log(`The useEffect has updated to ${count}`);
  //     return () => {
  //       console.log(`We are in the cleanUp - the first count is ${count}`);
  //       console.log(`We are in the cleanUp - the second count is ${secondCount}`);
  //     };
  //   }, [count, secondCount]);

  const incrementByOne = () => {
    setCount(count + 1);
  };

  const incrementByTwo = () => {
    setSecondCount(secondCount + 2);
  };

  return (
    <div>
      <h6>Counter</h6>
      <p>Current count : {count}</p>
      <p>Current count 2 : {secondCount}</p>
      <button onClick={incrementByOne}>increment the count by 1</button>
      <button onClick={incrementByTwo}>increment the count by 2 </button>
    </div>
  );
};
