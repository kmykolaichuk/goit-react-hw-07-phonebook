import { Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const onInputChange = evt => {
    const value = evt.currentTarget.value;
    dispatch(setStatusFilter(value));
  };

  return (
    <Label>
      Find contacts by Name
      <input onChange={onInputChange} type="text" name="filter" />
    </Label>
  );
}
