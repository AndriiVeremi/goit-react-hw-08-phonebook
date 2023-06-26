import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operation';
import { useAuth } from '../../hooks/useAuth';
import { Container, Name } from './UserMenu.styled';
import { Button } from '@mui/material';
import { selectAuthIsLoading, selectAuthError } from '../../redux/auth/auth-selectors';
// import { Puff } from 'react-loading-icons';
import { useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const isLoading = useSelector(selectAuthIsLoading);
  const status = useSelector(selectAuthError);

  const onRegister = () => {
    if (
      status === ' Request failed with status code 401' &&
      isLoading === false
    ) {
      // toast(' Something went wrong 😿 Please try again later!', {
      //   icon: '💤',
      // });
    }
  };
  onRegister();

  return (
    <Container>
      <Name>Welcome, {user.name}</Name>
      {isLoading ? (
        <Button fullWidth variant="contained">
          {/* <Puff height={24} stroke="#fff" style={{ padding: '0 16px' }} /> */}
        </Button>
      ) : (
        <Button
          type="button"
          onClick={() => {
            dispatch(logOut());
          }}
          fullWidth
          variant="contained"
        >
          Logout
        </Button>
      )}
    </Container>
  );
};

