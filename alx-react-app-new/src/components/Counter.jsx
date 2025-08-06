import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Current Count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
}
