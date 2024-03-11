import {Route,Routes} from 'react-router-dom';
 import { Signup } from './Components/Registrationpage/Signup';
import { Login } from './Components/Login/signin';
import {ForgetPassword} from './Components/Forgetpassword/forgetpassword';
import { Resetpassword} from './Components/Resetpassword/resetpassword';
// import { Otpverfication } from './Components/Otpverfication/otpverfication';
import { AddEmployeeDetails } from './Components/Employeedetails/employeedetails';
import { ViewEmployeeDetails } from './Components/Viewemployeedetails/getemployeedeatails';


export function AppRouter(){
    return(
        <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route> 
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/addEmployeeDetails' element={<AddEmployeeDetails></AddEmployeeDetails>}></Route>
            <Route path='/viewEmployeeDetails'element={<ViewEmployeeDetails></ViewEmployeeDetails>}></Route>
            <Route path='/forgetpassword'element={<ForgetPassword></ForgetPassword>}></Route>
            {/* <Route path='/otpverfication' element={<Otpverfication></Otpverfication>}></Route> */}
            <Route path='/resetpassword'element={<Resetpassword></Resetpassword>} ></Route>
            
        </Routes>
    )
}