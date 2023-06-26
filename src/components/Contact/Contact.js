import { useSelector, useDispatch } from 'react-redux';
import { selectError } from '../../redux/contacts/selector';
import { useState } from 'react';
import { Button } from '@mui/material';
import { ContactLi } from './Contact.styled';
import { deleteContact } from '../../redux/contacts/cont-operation';
import { AiOutlineUserDelete } from 'react-icons/ai';

export const Contact = ({ id, name, number }) => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const loader = () => {
    setIsLoading(true);
  };

  return (
    <ContactLi>
      <p style={{ fontFamily: 'Caveat', fontWeight: '400', fontSize: 18 }}>
        {name}: {number}
      </p>
      {isLoading && !error ? (
        <Button style={{ marginLeft: 25, height: 36 }} variant="contained">
        </Button>
      ) : (
        <Button

          type="button"
          style={{ marginLeft: 25, height: 36 }}
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
    </ContactLi>
  );
};