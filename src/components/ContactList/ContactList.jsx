import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={css.item}>
          <p>{name}: {phone}</p>
          <button className={css.button} onClick={() => dispatch(deleteContact(id))}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}
