import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAGOGAaDwUmq4To2O_c-saZfB4_fStjmcM",
    authDomain: "login-408c8.firebaseapp.com",
    projectId: "login-408c8",
    storageBucket: "login-408c8.appspot.com",
    messagingSenderId: "954042799546",
    appId: "1:954042799546:web:c7f3137a9292264a393983"
  };
  // Initialize Firebase
  
  
  
const fire = firebase.initializeApp(firebaseConfig);

export default fire;