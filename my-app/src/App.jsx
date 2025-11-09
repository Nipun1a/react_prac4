import React, { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(100);
  const [username, setUsername]= useState('guest');
  const [count, setCount] = useState(0);

  

  

  const handleChange = () => {
    setValue(30);
  };
  const handleUsernameChange = () => {
    setUsername('YUG');
  };
  const handleCountChange = () => {
   
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleAddFive = () => {
    setCount(count + 5);
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
      <button onClick={handleCountChange}>Increment Count</button>
      <button onClick={handleDecrement}>Decrement Count</button>
      <button onClick={handleAddFive}>Add Five to Count</button>
    </>

  )
}

export default App
