// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase, ref, child, get, onValue} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRthH5xX0TnL3_imTsfKmwOEgVdcmCsLQ",
    authDomain: "telemetria-63174.firebaseapp.com",
    databaseURL: "https://telemetria-63174-default-rtdb.firebaseio.com",
    projectId: "telemetria-63174",
    storageBucket: "telemetria-63174.appspot.com",
    messagingSenderId: "22842419226",
    appId: "1:22842419226:web:921c52e5f2e8b3d10709a3",
    measurementId: "G-KJRWSYLPY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const dbRef = ref(getDatabase());
const db = getDatabase(app);

export const getData = () => get(child(dbRef, 'telemetry_data'))

//const db = getDatabase();
const starCountRef = ref(db, 'telemetry_data/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});




/*var query = ref('telemetry_data/').orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
      console.log(key);
  });
});*/

//var tabla = document.getElementById('tabla');

/*get(child(dbRef, `telemetry_data/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});*/
