import React,{Component, useState} from 'react';
import ReactPlayer from 'react-player/youtube';
import axios from 'axios'
import logo from '../easyvista-squarelogo-1486737482008.png'
import Youtubemain from './Youtubemain';
import { FunctionComponent } from 'react';


const Login:FunctionComponent<{}>=()=>{

    const [user,setUser]=useState('')
    const[authService,setAuthService]=useState(false) 
    
    function  LoginIn(){
        console.log("hello")
        console.log(user)
        axios.get('http://localhost:3000/youtubeRestfulAPI/user.php?user='+user).then(response=>{
            if(response.status===200){
                setAuthService(true)
            }else{
                alert('user not found')
            }
             })
    }  


        return (
            <div>
                {!authService?
                <div className="container-fluid">
                    <div className="row main-content bg-success text-center">
                        <div className="col-md-4 text-center company__info">
                            <span className="company__logo">
                                <h2><span className="fa fa-android"></span></h2>
                            </span>
                            <img src={logo} alt=""/>
                        </div>
                        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                            <div className="container-fluid">
                                <div className="row">
                                    <h2>Log In</h2>
                                </div>
                                <div className="row">
                                    <form  className="form-group">
                                        <div className="row">
                                            <input type="text" name="username" id="username" className="form__input" placeholder="Username" onChange={e=>{
                                            setUser(e.target.value); } }/>
                                        </div>
                                        <div className="row">
                                            <input  value="Submit" className="btn" onClick={()=>
                                            LoginIn()}/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <Youtubemain user={user}/>
                }
            </div>
          );           
  }

  export default Login

