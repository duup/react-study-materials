const { Link } = require('react-router-dom');

function Nav({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/hello'>Hello</Link>
        <Link to='/hello/Deepak'>Hello Deepak</Link>
        <Link to='/add/5/7'>5 + 7</Link>
        {/* <Link to='/signup'>Sign Up</Link> */}
      </nav>
    </header>
  );
}

module.exports = Nav;
