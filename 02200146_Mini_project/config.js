const firebase=require('firebase')

firebaseConfig = {
  apiKey: "AIzaSyDWOYO-J_gWIDmzRfVSlqZJ3tXhRz2efmw",
  authDomain: "miniproject-9fba2.firebaseapp.com",
  projectId: "miniproject-9fba2",
  storageBucket: "miniproject-9fba2.appspot.com",
  messagingSenderId: "457971449015",
  appId: "1:457971449015:web:1b3e28744dd4f69299a132",
  measurementId: "G-PSSG38EFK6"
};
firebase.initializeApp(firebaseConfig)
const db=firebase.firestore()
const User =db.collection('users')
module.exports =users;