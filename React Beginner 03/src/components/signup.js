const { useState, useEffect } = require('react');

function Signup() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(true);

  function handleChange({ target: { value } }) {
    setEmail(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  let borderColor = 'green';
  if (error) {
    borderColor = 'red';
  }

  //Empty Array run once
  //No empty array run when any state change
  useEffect(
    function () {
      let isEmailValid = email.includes('@');
      setError(!isEmailValid);
    },
    [email]
  );

  return (
    <form onChange={handleSubmit}>
      <input
        type='text'
        value={email}
        onChange={handleChange}
        style={{
          border: `2 solid ${borderColor}`,
        }}
      />
      <input type='Submit' defaultValue='Sign Up' />
    </form>
  );
}

module.exports = Signup;
