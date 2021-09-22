function Nav({ title, navLinks }) {
  let links = navLinks.map(function (element) {
    return <a href='/'>{element}</a>;
  });
  return (
    <nav>
      <h2>{title}</h2>
      <hr />
      {links}
    </nav>
  );
}

module.exports = Nav;
