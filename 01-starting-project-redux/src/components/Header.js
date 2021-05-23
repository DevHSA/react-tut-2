import classes from "./Header.module.css";
import {authActions} from "../store/auth-reducer";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const loginState = useSelector((state) => state.authReducer.authToken);

  const dispatcher = useDispatch();

  const onLogoutHandler = () => {
    dispatcher(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loginState && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onLogoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
