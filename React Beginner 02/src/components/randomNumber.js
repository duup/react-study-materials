const { useState } = require('react');
function RandomNumber() {
  let random = Math.floor(Math.random() * 10);
  const [count, setCount] = useState(random);

  function randomize(event) {
    setCount(random);
  }

  return (
    <div>
      <p>Your random number is {count}</p>
      <p onClick={randomize}>Click here for a new random number</p>
    </div>
  );
}

module.exports = RandomNumber;
