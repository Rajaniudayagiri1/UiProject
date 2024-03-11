
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {createContext } from "react";
//  import { Signup } from './Components/Registrationpage/Signup';
// import { Login } from './Components/Login/signin';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Approuter';
//  import {AddEmployeeDetails}  from './Components/Employeedetails/employeedetails';
// import { ViewEmployeeDetails } from './Components/Viewemployeedetails/viewemployeedetails';
export const RecoveryContext = createContext();


function App() {
  return (

    <BrowserRouter>
      {/* <AddEmployeeDetails></AddEmployeeDetails>  */}
      {/* <ViewEmployeeDetails></ViewEmployeeDetails>   */}
      <AppRouter></AppRouter> 
    
       
    </BrowserRouter>

  );
}

export default App;
