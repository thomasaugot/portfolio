import "./Searchbar.scss";

function Searchbar({ searchTerm, setSearchTerm }) {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search__bar">
      <input
        type="text"
        placeholder="Search by keyword, tags, ..."
        value={searchTerm}
        onChange={handleChange}
        className="search__input"
      />
    </div>
  );
}

export default Searchbar;
