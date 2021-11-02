import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Statistics } from './Components/Statistics/Statistics';
import { Buttons } from './Components/Buttons/Buttons';
import { Context } from './Components/Functions/context';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuth } from './Components/Hooks/useAuth';




const firebaseConfig = {
  apiKey: "AIzaSyD412OoK0uPA6YXy1mpcG0_YNGxRMxEwjM",
  authDomain: "bro-sis-e64f2.firebaseapp.com",
  projectId: "bro-sis-e64f2",
  storageBucket: "bro-sis-e64f2.appspot.com",
  messagingSenderId: "733953490548",
  appId: "1:733953490548:web:29432565599dbba0d15b21"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const authFirebase = firebase.auth;
  const providerGoogle = new GoogleAuthProvider();
  const providerGit = new GithubAuthProvider();
  const providerFB = new FacebookAuthProvider();
  const authGoogle = useAuth(authFirebase, providerGoogle);
  const authGit = useAuth(authFirebase, providerGit);
  const authFB = useAuth(authFirebase, providerFB);
  return (
      <Context.Provider value={{
        authGoogle,
        authGit,
        authFB
        }}>

        <GlobalStyle/>
        <NavBar/>
        <Statistics/>
        <Buttons/>
      </Context.Provider>
  );
}

export default App;
