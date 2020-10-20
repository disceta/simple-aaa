import React, { useState } from 'react';

export const UserList = (props) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + props.height);
  };

  return (
    <div className="userList leftPanel">
      <button onClick={increment}>Users Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
