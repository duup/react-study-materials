const {useState} = require('react');

function ClickCounter() {
  //Higher order function that returns a array with a function inside
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>You have clicked {count} times</p>
      <button onClick={increment}>Click here to increment</button>
      <button onClick={decrement}>Click here to decrement</button>
    </div>
  );
}

module.exports = ClickCounter;
