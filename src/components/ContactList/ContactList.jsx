import PropTypes from 'prop-types';


import { Wrapper, List, ListItem } from './ContactList.styled';

export default function ContactList ({ contacts, removeContact }) {
  function handleRemoveClick(id) {
    removeContact(id);
  }
  
    return (
      <Wrapper>
        <List>
          {contacts.map(contact => (
            <ListItem key={contact.id}>
              <span>{contact.name}: </span>
              <span>{contact.number}</span>
              <button onClick={() => handleRemoveClick(contact.id)}>
                Delete
              </button>
            </ListItem>
          ))}
        </List>
      </Wrapper>
    );
  
}

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};
