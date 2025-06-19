import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';
import { useState } from 'react';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        value={name}
        placeholder="Ім’я"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className={css.input}
        type="tel"
        value={phone}
        placeholder="Телефон"
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button className={css.button} type="submit">Додати</button>
    </form>
  );
}
