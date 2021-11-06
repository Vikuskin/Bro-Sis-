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
import 'firebase/compat/database'
import { useDBBro } from './Components/Hooks/useDBBro';
import { useDBSis } from './Components/Hooks/useDBSis';
import { lastMessage } from "./Components/Functions/functions";
import { printLastMessage } from "./Components/Functions/functions";
import { useDB } from "./Components/Hooks/useDB";

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

  const database = firebase.database();
  const messagesBro = useDBBro(database);
  const messagesSis = useDBSis(database);
  let lastMessageBro = {};
  let lastMessageSis = {};
  
  const allMess = useDB(database);

  const click = () => {
    document.addEventListener('click', (event) => {
      const target = event.target;
      if (target.textContent === "SIS!") {
        lastMessageSis = lastMessage(messagesSis);
        if (lastMessageSis != null) {
          printLastMessage(lastMessageSis);
        }
      }
      if (target.textContent === "BRO!") {
        lastMessageBro = lastMessage(messagesBro);
        if (lastMessageBro != null) {
          printLastMessage(lastMessageBro);
        }
      }
    })
  }

  return (
      <Context.Provider value={{
        authGoogle,
        authGit,
        authFB,
        database: database,
        messagesBro: messagesBro,
        messagesSis: messagesSis,
        lastMessageBro: lastMessageBro,
        lastMessageSis: lastMessageSis
      }}>
        {click()}
        <GlobalStyle/>
        <NavBar/>
        {messagesBro && messagesSis ?
          <>
          <Statistics/>
          <p>Last message:</p>
          <div>{printLastMessage(lastMessage(allMess))}</div>
          </> :
          <>
          </>}
        <Buttons/>
      </Context.Provider>
  );
}

export default App;
