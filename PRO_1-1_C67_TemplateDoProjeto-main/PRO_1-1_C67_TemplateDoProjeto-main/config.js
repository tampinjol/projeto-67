import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBR_LWhhaanByiU18tJ8HagocheJPC-g0g",
  authDomain: "projeto-58-4ddb2.firebaseapp.com",
  databaseURL: "https://projeto-58-4ddb2-default-rtdb.firebaseio.com",
  projectId: "projeto-58-4ddb2",
  storageBucket: "projeto-58-4ddb2.appspot.com",
  messagingSenderId: "250515249570",
  appId: "1:250515249570:web:3a5b2eefd9ff772a627afb"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();