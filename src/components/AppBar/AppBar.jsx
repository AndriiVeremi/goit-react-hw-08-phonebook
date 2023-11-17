import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';
import { useAuth } from '../../hooks/useAuth';
import { Header} from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </Header>
  );
};

export default AppBar;
