import { useEffect, useState } from "react";
// import { GoogleAuthProvider } from "firebase/auth";


export function useAuth(authFirebase, provider) {
  const [authentication, setAuthentication] = useState(null);

  const auth = authFirebase();
  // const provider = new GoogleAuthProvider();

  const logIn = () => auth.signInWithPopup(provider);

  const logOut = () => auth.signOut()
    .catch(err => console.error())

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setAuthentication(user)
      } else {
        setAuthentication(null)
      }
    })
  });

  return { authentication, logIn, logOut };
}