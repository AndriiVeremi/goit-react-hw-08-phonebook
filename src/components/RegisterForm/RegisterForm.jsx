import { useSelector } from 'react-redux';
import { Button, TextField, Box, Container } from '@mui/material';
import {
  selectAuthIsLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';
import { Form, Title } from './RegisterForm.styled';

export const RegisterForm = ({ onData }) => {
  const isLoading = useSelector(selectAuthIsLoading);
  const status = useSelector(selectAuthError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    onData({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });

    if (!isLoading && status !== null) {
      form.reset();
    }
  };

  return (
    <Container component="div" maxWidth="xs" style={{ maxWidth: 440 }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0px 2px 10px 1px #828e6d',
        }}
      >
        <Title>Sign Up</Title>
        <Form
          onSubmit={handleSubmit}
          autoComplete="off"
          style={{ width: '100%' }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            label="Name"
            name="name"
            autoComplete="name"
            type="text"
            variant="standard"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            autoComplete="email"
            type="email"
            variant="standard"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          {isLoading ? (
            <Button
              variant="contained"
              fullWidth
              style={{ backgroundColor: '#8e6d8a', marginTop: 30 }}
            ></Button>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: '#8e6d8a', marginTop: 30 }}
            >
              Register
            </Button>
          )}
        </Form>
      </Box>
    </Container>
  );
};
