import React, { useState } from 'react';

export const Chat = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="chat leftPanel">
      <button onClick={increment}>Chat Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
