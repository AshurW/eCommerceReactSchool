import firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBlAqTT82k4mP7pCgUpTTWnBvnKEKrYibs",
    authDomain: "bofecommercetask.firebaseapp.com",
    databaseURL: "https://bofecommercetask.firebaseio.com",
    projectId: "bofecommercetask",
    storageBucket: "bofecommercetask.appspot.com",
    messagingSenderId: "644178951037",
    appId: "1:644178951037:web:2fab9974964797246baa14"
};

firebase.initializeApp(firebaseConfig)

export default firebase