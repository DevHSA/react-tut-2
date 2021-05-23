import classes from './Auth.module.css';
import {authActions} from '../store/auth-reducer'
import {useDispatch} from 'react-redux'

const Auth = () => {
  
  const dispatcher = useDispatch();

  const onLoginHandler = (event) =>{

    event.preventDefault();

    dispatcher(authActions.login());
    
  }

  return (
    <main className={classes.auth} onSubmit={onLoginHandler}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
