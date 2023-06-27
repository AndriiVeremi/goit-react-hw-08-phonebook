import { Link } from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <div>
      <Link to="/register">Register</Link>|<Link to="/login">LogIn</Link>
    </div>
  );
};
