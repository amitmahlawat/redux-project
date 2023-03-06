import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {authenticationActions} from '../store/index'
const Auth = () => {
  const LoginStatus=useSelector(state=>state.authentication.LoginStatus)
  const dispatch=useDispatch()

  const loginHandler=(e)=>{
    e.preventDefault()
    console.log(authenticationActions)
    dispatch(authenticationActions.Login())
    console.log('login clicked')
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type='Submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
