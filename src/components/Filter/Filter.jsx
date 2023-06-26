import { FilterTitle, FilterInput, FilterDiv } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filter-slice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(setFilter(filter));
  const changeFilter = e => {
    handleFilterChange(e.currentTarget.value);
  };

  return (
    <FilterDiv>
      <FilterTitle style={{ fontFamily: 'Caveat', fontWeight: '600' }}>
        Find contacts by name:
      </FilterTitle>
      <FilterInput type="text" onChange={changeFilter} />
    </FilterDiv>
  );
};

export default Filter;


// import { useDispatch, useSelector } from 'react-redux';
// import { setFilter } from '../../redux/contacts/filterSlice';
// import { selectFilter } from '../../redux/contacts/selector';
// import { Label, Input } from './Filter.styled';

// const Filter = () => {
//   const filter = useSelector(selectFilter);
//   const dispatch = useDispatch();

//   const changeFilter = e => {
//     dispatch(setFilter(e.target.value.toLowerCase().trim()));
//   };

//   return (
//       <Label>
//         Find contacts by name
//         <Input
//         type="text"
//         value={filter}
//         onChange={changeFilter}
//         placeholder="Search..."
//       />
//       </Label>
//   );
// };

// export default Filter;
