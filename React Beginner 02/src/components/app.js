const Nav = require('./nav');
const Footer = require('./footer');
const Effect = require('./effect');
const ClickCounter = require('./clickCounter');
const RandomNumber = require('./randomNumber');
const LoginForm = require('./loginForm');
const MovieSearch = require('./movieSearch');

function App() {
  let pageTitle = 'Our React App';
  let navLinks = ['Home', 'About', 'Contact'];
  return (
    <main>
      <Nav title={pageTitle} navLinks={navLinks} />
      <Effect />
      <Footer />
    </main>
  );
}

module.exports = App;
