// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
// import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: "AIzaSyBF_KGd5CBew2HCO-ZFs3LIte7JE5xuWxw",
    authDomain: "bangunruang-270999.firebaseapp.com",
    databaseURL: "https://bangunruang-270999-default-rtdb.firebaseio.com",
    projectId: "bangunruang-270999",
    storageBucket: "bangunruang-270999.appspot.com",
    messagingSenderId: "733243158000",
    appId: "1:733243158000:web:86a26bd3e3ca74b5b34135",
    measurementId: "G-B725RS3VHF"
  };
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
let signinButton = document.getElementById("signin-button");
let signupButton = document.getElementById("signup-button");

signupButton.addEventListener("click", (e) => {
  let nama = document.getElementById("nama_daftar").value;
  let username = document.getElementById("uname_daftar").value;
  let emailDaftar = document.getElementById("email_daftar").value;
  let passwordDaftar = document.getElementById("pw_daftar").value;

  createUserWithEmailAndPassword(auth, email_daftar, passwordDaftar)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

    //   set(ref(database, "users/" + user.uid), {
    //     nama: nama,
    //     username: username,
    //     email:  emailDaftar,
    //     password: passwordDaftar
      })
        .then(() => {
          // Data saved successfully!
          alert("Akun telah sukses dibuat");
        })
        .catch((error) => {
          //the write failed
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
// });

signinButton.addEventListener("click", (e) => {
  let emailSignin = document.getElementById("email_signin").value;
  let passwordSignin = document.getElementById("psw_signin").value;
  signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      let lgDate = new Date();
      update(ref(database, "users/" + user.uid), {
        last_login: lgDate
      })
        .then(() => {
          // Data saved successfully!
          //   alert("user telah sukses login");
          location.href = "http://127.0.0.1:5500/auth_firebase_cdn/admin.html";
        })
        .catch((error) => {
          //the write failed
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
});
