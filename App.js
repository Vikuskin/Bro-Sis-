import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/UseOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyBKE4Nt76OVkGUQGqgvFyZZM3YBxArN_Qs",
  authDomain: "mr-donalds-dac9f.firebaseapp.com",
  projectId: "mr-donalds-dac9f",
  storageBucket: "mr-donalds-dac9f.appspot.com",
  messagingSenderId: "594249578447",
  appId: "1:594249578447:web:c34217e882d8099ca184ba",
  measurementId: "G-QVKL7BVVH3",
};
firebase.initializeApp(firebaseConfig);

function App() {
  const authFirebase = firebase.auth;
  const auth = useAuth(authFirebase);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <React.Fragment>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order {...orders} {...openItem} {...auth} firebaseDatabase={firebase.database}/>
      <Menu {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </React.Fragment>
  );
}

export default App;
