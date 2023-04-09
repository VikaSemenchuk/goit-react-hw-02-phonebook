import PropTypes from 'prop-types';
import css from './ContactItems.module.css';

export const ContactItems = ({ name, number, id, deleteContact }) => {
  return (
    <>
      <div className={css.list}>
        <span>
          {name}: {number}
        </span>
        <button
          type="button"
          className="btn btn-outline-primary btn-sm"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

ContactItems.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
