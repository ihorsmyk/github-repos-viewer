import PropTypes from 'prop-types';
import { TfiGithub } from 'react-icons/tfi';
import s from './SearchBar.module.css';

const SearchBar = ({ search }) => {
  const submitQuery = e => {
    e.preventDefault();
    search(e.target.search.value);
    e.target.reset();
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={submitQuery}>
        <button type="submit" className={s.button}>
          <TfiGithub size="33" />
        </button>

        <input
          className={s.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="search..."
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchBar;
