import PropTypes from 'prop-types';

export const Filter = ({ onFilterAlter, filter }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input onChange={onFilterAlter} value={filter} type="text" />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterAlter: PropTypes.func.isRequired,
};
