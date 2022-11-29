import { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../../icons/searchIcon.svg';
import Notiflix from 'notiflix';
import {
  StyledSearchForm,
  StyledSearchFormBtn,
  StyledSearchFormInput,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const hanldeQueryChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return Notiflix.Notify.warning('Type something in the input');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <StyledSearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={hanldeQueryChange}
      />
      <StyledSearchFormBtn type="submit">
        <SearchIcon />
      </StyledSearchFormBtn>
    </StyledSearchForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
