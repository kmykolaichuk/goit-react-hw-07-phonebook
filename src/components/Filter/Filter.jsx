import { Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <Label>
      Find contacts by name
      <input onChange={handleChange} type="text" name="filter" />
    </Label>
  );
};
