import { ContactItem } from './ContactItem/ContactItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            id={id}
            key={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
