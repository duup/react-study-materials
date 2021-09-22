const { useState } = require('react');

function LoginForm() {
  // Current state and UpdateState
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('Weak');

  function updateUsername(event) {
    setUsername(event.target.value);
  }

  function updatePassword(event) {
    let p = event.target.value;
    if (p.length >= 6) {
      setPasswordStrength('Strong');
    } else {
      setPasswordStrength('Weak');
    }
    setPassword(p);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Time to login');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={updateUsername}
      ></input>
      <input
        type='text'
        placeholder='Password'
        value={password}
        onChange={updatePassword}
      ></input>
      <input type='submit' value='Login'></input>
      <p>Your password is {passwordStrength}</p>
    </form>
  );
}

module.exports = LoginForm;
