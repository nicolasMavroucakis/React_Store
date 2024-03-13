import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

function StartFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyDAHR0XdLFtoK229sP4jVuqoYm3WQaQZBo",
        authDomain: "log-realtimedatabase.firebaseapp.com",
        databaseURL: "https://log-realtimedatabase-default-rtdb.firebaseio.com",
        projectId: "log-realtimedatabase",
        storageBucket: "log-realtimedatabase.appspot.com",
        messagingSenderId: "912733218093",
        appId: "1:912733218093:web:198cfa43499007b8521fa4",
        measurementId: "G-0G38Y4VN77"
      };

      const app = initializeApp(firebaseConfig);
      return getDatabase(app);
}

export default StartFirebase