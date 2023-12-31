import { useSelector, useDispatch } from 'react-redux';
import { selectError } from '../../redux/contacts/selector';
import { useState } from 'react';
import { Button } from '@mui/material';
import { deleteContact } from '../../redux/contacts/cont-operation';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { List, Text } from './ContactItem.styled';

export const Contact = ({ id, name, number }) => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const loader = () => {
    setLoading(true);
  };

  return (
    <List>
      <Text>
        {name}: {number}
      </Text>
      {loading && !error ? (
        <Button
          style={{ backgroundColor: '#8e6d8a', marginLeft: 25, height: 36 }}
          variant="contained"
        ></Button>
      ) : (
        <Button
          type="button"
          variant="contained"
          size="small"
          style={{ backgroundColor: '#8e6d8a'}}
          endIcon={<AiOutlineUserDelete />}
          onClick={() => {
            dispatch(deleteContact(id));
            loader();
          }}
        >
          Delete
        </Button>
      )}
    </List>
  );
};