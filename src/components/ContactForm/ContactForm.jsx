import { Component } from 'react';

// import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  makeSubmit = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.create(this.state);
    this.reset();
  };

  makeChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { makeSubmit, makeChange } = this;

    return (
      <form onSubmit={makeSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={makeChange}
            required
          />
        </label>
        <label>
          Number
          <input
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={makeChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
