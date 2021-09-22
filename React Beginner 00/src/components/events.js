function Events() {
  function onButtonClick() {
    console.log('The button was clicked');
  }

  function onMouseMove() {
    console.log('The mouse is moving');
  }

  function onFormSubmit(event) {
    event.preventDefault();
    console.log('FOrm submit');
  }
  return (
    <div>
      <h4 onMouseMove={onMouseMove}>Heading</h4>
      <button onClick={onButtonClick}>Click Me</button>
      <form onSubmit={onFormSubmit}>
        <input type='submit' value='Submit Form' />
      </form>
    </div>
  );
}

module.exports = Events;
