const Nav = require('./nav');
const Footer = require('./footer');
const Student = require('./student');
const Movie = require('./movie');
const Event = require('./events');
const Events = require('./events');

function App() {
  let students = ['Syed', 'Hidayah', 'Deepak', 'Iskandar'];
  let studentsMarkup = students.map(function (element) {
    return <Student name={element} />;
  });
  let movieTitles = ['Blue Planet', 'Blue Earth', 'Blue Earth 2'];

  let movieTitleMarkup = movieTitles.map(function (element) {
    return <Movie title={element} />;
  });

  return (
    <div>
      <h1>Our React App</h1>
      <Nav />
      <div>
        <h2>Student List</h2>
        {studentsMarkup}
      </div>
      <div>
        <h2>Movie List</h2>
        {movieTitleMarkup}
      </div>
      <div>
        <Events/>
      </div>
      <Footer />
    </div>
  );
}

module.exports = App;
