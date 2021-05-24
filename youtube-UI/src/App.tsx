import { useState } from 'react';
import './App.css';
import LoginController from './components/LoginController';
import Youtubemain from './components/Youtubemain';



function App() {  
  const [user,setUser]=useState('')
  const[authService,setAuthService]=useState(false) 
  return (
    <div className="App">
      <div>
      {!authService?<LoginController setAuthService={setAuthService} setUser={setUser} user={user} />:<Youtubemain user={user}/>}
      </div>
    </div>
  );
}

export default App;
