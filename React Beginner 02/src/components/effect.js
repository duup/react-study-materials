const { useState, useEffect } = require('react');

function Effect() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  function increment(event) {
    setCount(count + 1);
  }

  //Set Effect only run once if the array is empty

  useEffect(
    function () {
      setTimeout(function () {
        setTime(time + 1);
      }, 1000);
    },
    [time]
  );

  //This callback function will run when the component is rendered on the page for the firs time

  return (
    <div>
      <h2>use effect</h2>
      <p>You have been on the page for {time} seconds</p>
      <p onClick={increment}>You have clicked {count} times</p>
    </div>
  );
}

module.exports = Effect;
