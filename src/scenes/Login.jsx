import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCciKje8wF3cL27dStykexiUcxYecwFrIA",
  authDomain: "fb-jwt-c9.firebaseapp.com",
  projectId: "fb-jwt-c9",
  storageBucket: "fb-jwt-c9.appspot.com",
  messagingSenderId: "600375133983",
  appId: "1:600375133983:web:acb2af143b105a3fe1d22a"
};

export default function Login({ setIsLoggedIn }) {
  const handleSignin = () => {
    // connect to firebase project
    const app = initializeApp(firebaseConfig);
    // connect to auth
    const auth = getAuth(app);
    // create a provider
    const provider = new GoogleAuthProvider();
    // popup signing window
    signInWithPopup(auth, provider)
    // handle .then and .catch
      .then(() => setIsLoggedIn(true))
      .catch(alert)
  }
  return(
    <>
      <h1>Login</h1>
      <button onClick={handleSignin}>Sign In with Google</button>
    </>
  )
}
