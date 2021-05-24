import axios from 'axios'
import logo from '../easyvista-squarelogo-1486737482008.png'
import { FunctionComponent } from 'react';
import LoginView from './LoginView';


const LoginController:FunctionComponent<{setAuthService:any,setUser:any,user:string}>=({setAuthService,setUser,user})=>{
    
    function  LoginIn(){

        axios.get('http://localhost:3000/youtubeRestfulAPI/user.php?user='+user).then(response=>{
            if(response.status===200){
                setAuthService(true)
            }else{
                alert('user not found')
            }
             })
    }  

        return <div>
                <LoginView setUser={setUser} logo={logo} LoginIn={LoginIn}/>
                </div>
          ;           
  }

  export default LoginController

