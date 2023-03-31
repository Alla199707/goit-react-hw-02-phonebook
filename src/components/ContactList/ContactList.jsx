import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      <ContactItem contacts={contacts} deleteContact={deleteContact} />
    </List>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

export default ContactList;
