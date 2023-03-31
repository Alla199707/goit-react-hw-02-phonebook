import PropTypes from 'prop-types';
import { Button, ListItem } from './ContactItem.styled';

const ContactItem = ({ contacts, deleteContact }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <span> {name} : </span>
            <span>{number} </span>
            <Button onClick={() => deleteContact(id)}>Delete</Button>
          </ListItem>
        );
      })}
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
