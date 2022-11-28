import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const hanldeQueryChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return alert('Type something in the input');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={hanldeQueryChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
