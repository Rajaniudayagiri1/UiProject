import {Route,Routes} from 'react-router-dom';
 import { Signup } from './Components/Registrationpage/Signup';
import { Login } from './Components/Login/signin';
import ForgetPassword from './Components/Forgetpassword/forgetpassword';


export function AppRouter(){
    return(
        <Routes>
            
            <Route path='/signup' element={<Signup></Signup>}></Route> 
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/forgetpassword'element={<ForgetPassword></ForgetPassword>}></Route>
            
        </Routes>
    )
}