import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {authenticationActions} from '../store/index'
const Header = () => {

  const LoginStatus=useSelector(state=>state.authentication.LoginStatus)
const dispatch=useDispatch();
  const logoutHandler=()=>{
    dispatch(authenticationActions.Logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {LoginStatus&& <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav> }
      
    </header>
  );
};

export default Header;
