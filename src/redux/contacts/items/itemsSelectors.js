export const getContacts = ({contacts}) => contacts.items;

export const getFilteredContacts = ({contacts}) => {
    const {items, filter} = contacts

    if (!filter) {
      return items;
    }
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  };