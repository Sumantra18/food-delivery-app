import {getApp,getApps, initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAPfA2FH265doYmp3s_AciUn2KWke0M3Rg",
    authDomain: "restaurantapp-4e518.firebaseapp.com",
    databaseURL: "https://restaurantapp-4e518-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-4e518",
    storageBucket: "restaurantapp-4e518.appspot.com",
    messagingSenderId: "503895851374",
    appId: "1:503895851374:web:3ac3a12747438a7b7fc17f"
  };

  
  const app=getApps.length >0 ? getApp() : initializeApp(firebaseConfig);

  const firestore= getFirestore(app);

  const storage= getStorage(app);

  export {app,firestore,storage};