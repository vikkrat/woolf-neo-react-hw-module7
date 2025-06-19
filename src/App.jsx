import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectLoading, selectError } from './redux/contactsSlice';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: '1rem' }}>
      <h1>Книга контактів</h1>
      <ContactForm />
      <Filter />
      {loading && <p>Завантаження контактів...</p>}
      {error && <p>Помилка: {error}</p>}
      <ContactList />
    </div>
  );
}
