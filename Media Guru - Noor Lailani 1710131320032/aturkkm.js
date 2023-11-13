const firebaseConfig = {
    apiKey: "AIzaSyD1mP-y6GX8-X4Tf4yk7G1S7G6N8h6meNM",
    authDomain: "pengolahan-data-2a96f.firebaseapp.com",
    databaseURL: "https://pengolahan-data-2a96f-default-rtdb.firebaseio.com",
    projectId: "pengolahan-data-2a96f",
    storageBucket: "pengolahan-data-2a96f.appspot.com",
    messagingSenderId: "1090045066591",
    appId: "1:1090045066591:web:4bb4dd1f6b9eeb93094aea",
    measurementId: "G-7H27TB3NB8"
  };

  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);

// const db = firebase.database();
// const dbkkm = db.ref('db_kkm/').on('value', kkmSuccess, handleError)

// let pk1 = 0;
// let perk1 = 0;

// let loop1;

// function kkmSuccess(items1) {

//     loop1 = items1.val();
//     let i = 0;
//     while (i < loop1.length) {
//         if (loop1[i] != undefined) {
//             pk1 += 1;
//         }
//         i++;
//     }
//     // console.log(items1.val()[0]['kkm']);
//     // pk1 = items1.val().length;
    
//     const kkm1 = items1.val()[0]['kkm'];
//     const kkm2 = items1.val()[1]['kkm'];
//     // const kkm5 = items1.val()[4]['kkm'];

//     const kkmKuis1 = document.querySelector('.kkmKuis1');
//     kkmKuis1.innerHTML = kkm1;
//     const kkmK1 = document.querySelector('.KKM1');
//     kkmK1.value = kkm1;

//     const kkmKuis2 = document.querySelector('.kkmKuis2');
//     kkmKuis2.innerHTML = kkm2;
//     const kkmK2 = document.querySelector('.KKM2');
//     kkmK2.value = kkm2;

//     const kkmEvaluasi = document.querySelector('.kkmEvaluasi');
//     kkmEvaluasi.innerHTML = kkm5;
//     const kkmK5 = document.querySelector('.KKM5');
//     kkmK5.value = kkm5;
// }

// function handleError(error) {
//     console.log(error);
// }

// function setKKM1() {
//     let KKM1 = document.getElementById('KKM1').value;
//     var task = {
//         id: 0,
//         kkm: KKM1
//         }
//         let database = firebase.database().ref("db_kkm/" + 0);
//         database.set(task);
// }

// function setKKM2() {
//     let KKM2 = document.getElementById('KKM2').value;
//     var task = {
//         id: 1,
//         kkm: KKM2
//         }
//         let database = firebase.database().ref("db_kkm/" + 1);
//         database.set(task);
// }

// function setKKM3() {
//     let KKM3 = document.getElementById('KKM3').value;
//     var task = {
//         id: 2,
//         kkm: KKM3
//         }
//         let database = firebase.database().ref("db_kkm/" + 2);
//         database.set(task);
// }

let idnya = [];

const db = firebase.database();
const dbkkm = db.ref('kkm').on('value', handleSuccess, handleError)

let getKKM;
function handleSuccess(items){
    getKKM = items.val();

    let kkm1 = getKKM[0]['kkm'];
    let kkm2 = getKKM[1]['kkm'];

//     const kkmKuis1 = document.querySelector('.kkmKuis1');
//     kkmKuis1.innerHTML = kkm1;
//     const kkmK1 = document.querySelector('.KKM1');
//     kkmK1.value = kkm1;

var kkm1html = document.querySelector('.kkm1');
kkm1html.innerHTML = kkm1;

var editkkm1 = document.querySelector('.editKKM1');
editkkm1.value = kkm1;

var kkm2html = document.querySelector('.kkm2');
kkm2html.innerHTML = kkm2;

var editkkm2 = document.querySelector('.editKKM2');
editkkm2.value = kkm2;


}

function handleError(err){
    console.log(err);
}

function setKKM1(){
    const kkminput = document.getElementById('kkm1').value;

    var task = {
        id: 0,
        kkm: kkminput
    }
    
    let database = firebase.database().ref("kkm/" + 0);
    database.set(task);
}

function setKKM2(){
    const kkminput = document.getElementById('kkm2').value;

    var task = {
        id: 1,
        kkm: kkminput
    }
    
    let database = firebase.database().ref("kkm/" + 1);
    database.set(task);
}
