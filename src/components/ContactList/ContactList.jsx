import { ContactItem } from './ContactItem/ContactItem';

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
