const { useParams } = require('react-router-dom');

function Hello() {
  let { name } = useParams();
  return (
    <div>
      <h2>Hello {name}</h2>
    </div>
  );
}

module.exports = Hello;
