import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';
import { useAuth } from '../../hooks/useAuth';
import { Header, Title } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      <Title>Phonebook</Title>
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </Header>
  );
};

export default AppBar;
