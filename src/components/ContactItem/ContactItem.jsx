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
  const [isLoading, setIsLoading] = useState(false);

  const loader = () => {
    setIsLoading(true);
  };

  return (
    <List>
      <Text>
        {name}: {number}
      </Text>
      {isLoading && !error ? (
        <Button style={{ marginLeft: 25, height: 36 }} variant="contained">
        </Button>
      ) : (
        <Button
          type="button"
          variant="contained"
          size="small"
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