import PropTypes from 'prop-types';
import { ListItem, List, Button } from './ContactList.styled';
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <span> {name} : </span>
            <span>{number} </span>
            <Button onClick={() => deleteContact(id)}>Delete</Button>
          </ListItem>
        );
      })}
    </List>
  );
};
export default ContactList;
