function SearchBar({ search, setSearch }) {
  return (
    <div className="search-wrapper">
      <input
        className="search-box"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;