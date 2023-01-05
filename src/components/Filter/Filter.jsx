import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onFilterAlter, filter }) => {
  return (
    <div>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          className={css.filterInput}
          onChange={onFilterAlter}
          value={filter}
          type="text"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterAlter: PropTypes.func.isRequired,
};
