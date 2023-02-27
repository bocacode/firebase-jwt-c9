import { useState } from 'react';
import SecretInfo from './scenes/SecretInfo';
import Login from './scenes/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn
        ? <SecretInfo />
        : <Login setIsLoggedIn={setIsLoggedIn} />
      }
    </>
  );
}

export default App;
