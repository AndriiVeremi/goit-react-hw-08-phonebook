import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { selectAuthError } from '../redux/auth/auth-selectors';
import { logIn, clearAuthError } from '../redux/auth/auth-operation';

export default function Login() {
  const dispatch = useDispatch();
  const status = useSelector(selectAuthError);

  useEffect(() => {
    if (status === 'Request failed with status code 400') {
      Notify.failure('You have entered an incorrect email address or password, or you have not yet registered!');
      dispatch(clearAuthError());
    }
  }, [status, dispatch]);

  const onRegister = data => {
    dispatch(logIn(data));
  };

  return (
    <div>
      <title>Login</title>
      <LoginForm onData={onRegister} />
    </div>
  );
}