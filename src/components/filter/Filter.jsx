import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div className={css.filter}>
      <h5 className={css.filterTitle}>Find contacts by name</h5>
      <input
        type="text"
        name="filter"
        className="form-control"
        placeholder="Contact name"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
