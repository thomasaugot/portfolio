import "./Searchbar.scss";

function Searchbar({ searchTerm, setSearchTerm }) {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search__bar">
      <input
        type="text"
        placeholder="search by keyword"
        value={searchTerm}
        onChange={handleChange}
        className="search__input"
      />
    </div>
  );
}

export default Searchbar;
