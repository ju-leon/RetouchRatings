import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCgMxCuyhMLu38fQ1_zwXOT3m5_85sn6Iw",
    authDomain: "retoucheu-b5812.firebaseapp.com",
    databaseURL: "https://retoucheu-b5812.firebaseio.com",
    projectId: "retoucheu-b5812",
    storageBucket: "retoucheu-b5812.appspot.com",
    messagingSenderId: "71926711569",
    appId: "1:71926711569:web:d4daba8a1c5359860978b0",
    measurementId: "G-23BG4B0G04"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
    firebase.analytics();
}

export const auth = firebase.auth();
export const f = firebase;
// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = firebase.storage();
// Create a storage reference from our storage service
export const storageRef = storage.ref();
export const database = firebase.firestore();
