const { useState } = require('react');

function MovieSearch() {
  const [title, setTitle] = useState('');
  const [data, setData] = useState(null);

  let dataMarkup = "There is not data to show";
  if (data !== null && data.Response !== "False") {
    dataMarkup = JSON.stringify(data);
  }

  function updateTitle({ target: { value } }) {
    setTitle(value);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = 'db9e866c';
    let url = `http://www.omdbapi.com/`;
    let queryString = `?apikey=${apiKey}&t=${title}`;

    fetch(url + queryString, { method: 'GET' })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setData(data);
      });
  }

  return (
    <div>
      <form onSubmit={search}>
        <input
          type='text'
          placeholder='Movie Title'
          value={title}
          onChange={updateTitle}
        ></input>
        <input type='submit' value='Search'></input>
      </form>
      <p>{dataMarkup}</p>
    </div>
  );
}

module.exports = MovieSearch;
