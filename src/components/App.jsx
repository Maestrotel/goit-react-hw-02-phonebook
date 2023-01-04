import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
// import { nanoid } from 'nanoid';
// import { Filter } from './Filter/Filter'

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

  deleteContact = e => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== e),
    });
  };

  render() {
    const { deleteContact } = this;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList
          contacts={this.state.contacts}
          deleteContact={deleteContact}
        />
      </div>
    );
  }
}
