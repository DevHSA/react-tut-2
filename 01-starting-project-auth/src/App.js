import { Switch, Route,  } from 'react-router-dom';
import {useContext} from 'react'
import {AuthContext} from './store/auth-context';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {

  const authctx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        {authctx.isLoggedIn&&<Route path='/' exact>
          <HomePage />
        </Route>}
        
        {!authctx.isLoggedIn&&<Route path='/auth'>
          <AuthPage />
        </Route>}
        
        {authctx.isLoggedIn&&<Route path='/profile'>
          <UserProfile />
        </Route>}
        
        <Route path="*">
          <p>Unauthorized Access</p>
        </Route>
        

      </Switch>
    </Layout>
  );
}

export default App;
