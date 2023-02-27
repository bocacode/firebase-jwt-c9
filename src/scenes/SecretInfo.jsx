import { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCciKje8wF3cL27dStykexiUcxYecwFrIA",
  authDomain: "fb-jwt-c9.firebaseapp.com",
  projectId: "fb-jwt-c9",
  storageBucket: "fb-jwt-c9.appspot.com",
  messagingSenderId: "600375133983",
  appId: "1:600375133983:web:acb2af143b105a3fe1d22a"
};

export default function SecretInfo() {
  const [secretStuff, setSecretStuff] = useState()
  useEffect(() => {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    auth.currentUser.getIdToken(false)
      .then(token => {
        // make a secure call to our API to get the secret info
        fetch('http://localhost:3030/secrets', {
          headers: { Authorization: token },
        }) // SEND TOKEN
          .then(res => res.json())
          .then(data => setSecretStuff(data.message))
      })
      .catch(alert)
  }, [])
  return(
    <>
      <h1>Secret Info</h1>
      {secretStuff
        ? <h2>{secretStuff}</h2>
        : <h2>Loading...</h2>
      }
    </>
  )
}
