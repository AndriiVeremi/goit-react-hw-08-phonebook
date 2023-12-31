import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filter-slice';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = filter => dispatch(setFilter(filter));
  const changeFilter = e => {
    handleFilterChange(e.currentTarget.value);
  };

  return (
    <Label>
      <Input type="text" onChange={changeFilter} />
    </Label>
  );
};

export default Filter;

