import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      className={css.input}
      type="text"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      placeholder="Фільтр за іменем"
    />
  );
}
