import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(100);
  const [username, setUsername] = useState('guest');
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setValue(30);
  };

  const handleUsernameChange = () => {
    setUsername('YUG');
  };

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleAddFive = () => {
    setCount(prevCount => prevCount + 5);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    alert('Form submitted!');
  };

  console.log('Current value:', value);
  console.log('Current username:', username);
  console.log('Current count:', count);

  return (
    <>
      <h1>Hello, World!</h1>
      <p>Current value: {value}</p>
      <button onClick={handleChange}>Change</button>

      <p>Current username: {username}</p>
      <button onClick={handleUsernameChange}>Change Username</button>

      <p>Current count: {count}</p>
      <button onClick={handleIncrement}>Increment Count</button>
      <button onClick={handleDecrement}>Decrement Count</button>
      <button onClick={handleAddFive}>Add Five to Count</button>

      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter something else..." />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
