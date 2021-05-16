import React,{Component} from 'react';
import ReactPlayer from 'react-player/youtube';
import axios from 'axios'
import {YoutubeMainApp} from './youtubeMainApp'
import logo from '../easyvista-squarelogo-1486737482008.png'


export class Login extends React.Component<{},UserInfo>{

  constructor(props:{}){
        super(props);
        this.state={
            user:"",
            authService:false,       
        }
    }
    
  render(){      
        return (
            <div>
                {!this.state.authService?
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
                                            <input type="text" name="username" id="username" className="form__input" placeholder="Username" onChange={e=>
                                            this.setState({user:e.target.value})}/>
                                        </div>
                                        <div className="row">
                                            <input  value="Submit" className="btn" onClick={()=>
                                            this.LoginIn()}/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <YoutubeMainApp user={this.state.user}/>
                }
            </div>
          );           
  }

  LoginIn(){
    axios.get('http://localhost:3000/youtubeRestfulAPI/user.php?user='+this.state.user).then(response=>{
        if(response.status===200){
            this.setState({authService:true})
        }else{
            alert('user not found')
        }
         })
}   

}

interface UserInfo{
    user:string;
    authService:boolean
}


