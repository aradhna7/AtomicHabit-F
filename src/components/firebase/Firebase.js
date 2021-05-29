import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB-R6344zty4iFtdZZJ2HaahW4_iud2s_8",
    authDomain: "atomichabits-f6c6f.firebaseapp.com",
    databaseURL: "https://atomichabits-f6c6f-default-rtdb.firebaseio.com",
    projectId: "atomichabits-f6c6f",
    storageBucket: "atomichabits-f6c6f.appspot.com",
    messagingSenderId: "562608692942",
    appId: "1:562608692942:web:a5760560ee907280faba9f",
    measurementId: "G-67TVGM92YG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export  {
    storage, firebase as default
}