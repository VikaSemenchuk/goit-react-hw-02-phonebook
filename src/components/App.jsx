// import { Component } from 'react';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermine Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (
      this.state.contacts.some(
        contact =>
          contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim()
      )
    ) {
      alert(`Contact ${newContact.name} is already exists!`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  onChangeFilter = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedContact = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContact)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <section className="section">
          <div className="container">
            <h1 className="title">Phonebook</h1>
            <ContactForm addNewContact={this.addNewContact} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="title">Contacts</h2>
            <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
            <ContactList
              contacts={filteredContacts}
              deleteContact={this.deleteContact}
            />
          </div>
        </section>
      </>
    );
  }
}
