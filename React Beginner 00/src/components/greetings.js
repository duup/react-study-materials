function Greetings(props) {
  let name = props.name;
  let favNum = props.favNumber;
  return (
    <div>
      <h2>Greetings {name}</h2>
      <h2>His favorite number is {favNum}</h2>
    </div>
  );
}

module.exports = Greetings;
