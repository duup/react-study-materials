const { BrowserRouter, Switch, Route, useParams } = require('react-router-dom');
const Nav = require('./nav');
const Game = require('./game');
const Clock = require('./clock');
const Signup = require('./signup');
const Home = require('./home');
const About = require('./about');
const Contact = require('./contact');
const Hello = require('./hello');
const Calculator = require('./calculator');

function App() {
  let pageTitle = 'Our React Weather App';
  return (
    <BrowserRouter>
      <Nav title={pageTitle} />
      <Clock />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/hello/:name' children={<Hello />}></Route>
        <Route path='/add/:x/:y' children={<Calculator />}></Route>
        {/* <Route path='/signup'>
          <Signup />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

module.exports = App;
