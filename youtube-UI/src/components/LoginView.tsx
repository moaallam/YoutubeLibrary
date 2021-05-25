import dompurify, { sanitize } from 'dompurify';
import { FunctionComponent} from 'react';
const LoginView:FunctionComponent<{setUser:any,logo:string,LoginIn:any}>= ({setUser,logo,LoginIn}
)=>{const sanitizer = dompurify.sanitize;
    
    
    return  <div className="container-fluid">
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
                                            <input type="text" name="username" aria-label="username" className="form__input" placeholder="Username" onChange={e=>{
                                            setUser(sanitize(e.target.value)); } }/>
                                        </div>
                                        <div className="row">
                                            <input  value="Submit" aria-label="Submit" className="btn" onClick={()=>
                                            LoginIn()}/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
}

export default LoginView