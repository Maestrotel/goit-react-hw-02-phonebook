import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  create = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const shifting = this.state.contacts.filter(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (shifting.length) {
      const { name } = newContact;
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  deleteContact = e => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== e),
    });
  };

  onFilterAlter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { create, deleteContact, onFilterAlter } = this;
    const { contacts, filter } = this.state;
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm create={create} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilterAlter={onFilterAlter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    );
  }
}
