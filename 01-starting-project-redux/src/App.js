import Counter from './components/Counter';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import {useSelector} from 'react-redux'

function App() {

  const loginState = useSelector(state => state.authReducer.authToken)

  return (
    <>
    <Header/>
    {loginState? <UserProfile/>:<Auth/>}
    
    <Counter />
    </>
  );
}

export default App;
