import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { selectAuthError } from '../redux/auth/auth-selectors';
import { register, clearAuthError } from '../redux/auth/auth-operation';

export default function Register() {
  const dispatch = useDispatch();
  const status = useSelector(selectAuthError);

  useEffect(() => {
    if (status === 'Request failed with status code 400') {
      Notify.failure('You or someone else is already registered with such data!');
      dispatch(clearAuthError());
    }
  }, [status, dispatch]);

  const onRegister = data => {
    dispatch(register(data));
  };

  return (
    <div>
      <title>Registration</title>
      <RegisterForm onData={onRegister} />
    </div>
  );
}