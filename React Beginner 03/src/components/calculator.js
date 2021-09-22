const { useParams } = require('react-router-dom');

function Calculator() {
  let { x, y } = useParams();
  return (
    <div>
      <h2>{x} + {y} = {parseInt(x) + parseInt(y)}</h2>
    </div>
  );
}

module.exports = Calculator;
