import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyACoaiL2Db7LRKvI8_n7cS1MB8N2Xhxkds",
    authDomain: "movie-react-ec9ba.firebaseapp.com",
    projectId: "movie-react-ec9ba",
    storageBucket: "movie-react-ec9ba.appspot.com",
    messagingSenderId: "1067165195983",
    appId: "1:1067165195983:web:cd83615bea791e37b121ba",
    measurementId: "G-LBNPW49Y7M"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
