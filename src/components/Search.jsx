import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      setError(null);

      fetch(`https://ca-server-eta.vercel.app/data?name=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data);
          setLoading(false);
        })
        .catch(() => {
          setError("An error occurred while fetching data.");
          setLoading(false);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        className="input input-bordered input-info w-full max-w-xs"
        value={searchTerm}
        onChange={handleInputChange}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {searchResults.map((result) => (
          <li key={result.id}
          result={result}
          >
            <Link to={`/details/${result.id}`}>{result.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
