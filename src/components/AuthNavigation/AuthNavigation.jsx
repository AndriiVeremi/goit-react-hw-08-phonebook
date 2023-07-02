import { Link } from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <div>
      <Link to="/register">Sing Up</Link>|<Link to="/login">Log In</Link>
    </div>
  );
};
