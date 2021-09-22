const { useState, useEffect } = require('react');

function Game() {
  const [mouseMoves, setMouseMoves] = useState(0);

  useEffect(function () {
    console.log('Will run once after the component is first rendered');
  }, []);

  useEffect(function () {
    console.log('Will run whenever the item updates');
    //Function do something when the array items update
  }, [mouseMoves]);

  function handleMouseMove() {
    console.log('Mouse Moved!');
    setMouseMoves(mouseMoves + 1);
  }
  return (
    <div>
      <h3 onMouseMove={handleMouseMove}>Move your mouse over me!</h3>
      <h4>You have moved your move {mouseMoves} times</h4>
    </div>
  );
}

module.exports = Game;
