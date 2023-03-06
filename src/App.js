import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userProfile from './components/UserProfile';
function App() {
const LoginStatus=useSelector(state=>state.authentication.LoginStatus)
const dispatch=useDispatch()
 
  return (
    <Fragment>
      <Header/>
      {!LoginStatus && <Auth/>}
      {LoginStatus && <userProfile/>}
    <Counter />
    </Fragment>
  );
}

export default App;
