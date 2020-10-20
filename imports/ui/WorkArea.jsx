import React, { useState } from 'react';

export const WorkArea = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="workArea">
      <button onClick={increment}>Work1 Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
