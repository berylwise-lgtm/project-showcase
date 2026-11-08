function SearchBar({ searchTerm, onSearchChange }) {
    return (
        <section className="search-section">
            <h2>Search Projects</h2>

            <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(event) => onSearchChange(event.target.value)}
            />
        </section>
    );
}

export default SearchBar;