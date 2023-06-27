import { useSelector } from 'react-redux';
import { Button, TextField, Box, Container } from '@mui/material';
import {
  selectAuthIsLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';
import { Form, Title } from './LoginForm.styled';

export const LoginForm = ({ onData }) => {
  const isLoading = useSelector(selectAuthIsLoading);
  const status = useSelector(selectAuthError);
  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    onData({
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
          backgroundColor: '#d6e8d7',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: ' rgb(33 33 33) 0px 2px 5px 1px',
        }}
      >
        <Title>Log in please</Title>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <TextField
            margin="normal"
            required
            fullWidth={true}
            autoFocus
            label="Email"
            name="email"
            autoComplete="email"
            type="email"
            variant="standard"
          />
          <TextField
            margin="normal"
            required
            fullWidth={true}
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          {isLoading ? (
            <Button variant="contained" style={{ marginTop: 30 }}>
            </Button>
          ) : (
            <Button type="submit" fullWidth variant="contained" style={{ marginTop: 30 }}>
              Log In
            </Button>
          )}
        </Form>
      </Box>
    </Container>
  );
};
