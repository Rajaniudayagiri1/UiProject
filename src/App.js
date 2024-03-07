
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//  import { Signup } from './Components/Registrationpage/Signup';
// import { Login } from './Components/Login/signin';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Approuter';
import { ButtonAppBar } from './Components/profile/Dashboard';
import ForgetPassword from './Components/Forgetpassword/forgetpassword';


function App() {
  return (

    <BrowserRouter>
        <ButtonAppBar></ButtonAppBar>
        {/* <ForgetPassword></ForgetPassword> */}
       {/* <Signup></Signup>  */}
       <AppRouter></AppRouter> 
    </BrowserRouter>

  );
}

export default App;
