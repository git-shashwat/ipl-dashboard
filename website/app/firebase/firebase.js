import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCH_TVvTfxd-vo8xukjv8j1Pa0Dc9gs0zQ",
    authDomain: "cwc-wms.firebaseapp.com",
    databaseURL: "https://cwc-wms.firebaseio.com",
    projectId: "cwc-wms",
    storageBucket: "cwc-wms.appspot.com",
    messagingSenderId: "531232720364",
    appId: "1:531232720364:web:649820ecce345ea520ecc9",
    measurementId: "G-1FZ0YXQ240"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export { firebase, database as default };