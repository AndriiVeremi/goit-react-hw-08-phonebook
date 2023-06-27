import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operation';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '@mui/material';
import { selectAuthIsLoading, selectAuthError } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { AiOutlineLogout } from 'react-icons/ai';
import { Container, Name } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const isLoading = useSelector(selectAuthIsLoading);
  const status = useSelector(selectAuthError);
  const onRegister = () => {
    if (
      status === 'Request failed with status code 401' &&
      isLoading === false
    ) {
      Notify.failure('Something went wrong Please try again later!')
    }
  };
  onRegister();

  return (
    <Container>
      <Name>Welcome, {user.name}</Name>
      {isLoading ? (
        <Button fullWidth variant="contained">
        </Button>
      ) : (
        <Button       
          endIcon={<AiOutlineLogout />}
          type="button"     
          style={{ width: 300 }}
          variant="contained"
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Logout
        </Button>
      )}
    </Container>
  );
};
