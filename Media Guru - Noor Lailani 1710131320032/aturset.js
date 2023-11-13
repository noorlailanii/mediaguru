// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  // Initialize Firebase
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
    let kkm3 = getKKM[2]['kkm'];
    let kkm4 = getKKM[3]['kkm'];

var kkm1html = document.querySelector('.kkm1');
kkm1html.innerHTML = kkm1;

var editkkm1 = document.querySelector('.editKKM1');
editkkm1.value = kkm1;

var kkm2html = document.querySelector('.kkm2');
kkm2html.innerHTML = kkm2;

var editkkm2 = document.querySelector('.editKKM2');
editkkm2.value = kkm2;

var kkm3html = document.querySelector('.kkm3');
kkm3html.innerHTML = kkm3;

var editkkm3 = document.querySelector('.editKKM3');
editkkm3.value = kkm3;

var kkm4html = document.querySelector('.kkm4');
kkm4html.innerHTML = kkm4;

var editkkm4 = document.querySelector('.editKKM4');
editkkm4.value = kkm4;

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

function setKKM3(){
    const kkminput = document.getElementById('kkm3').value;

    var task = {
        id: 2,
        kkm: kkminput
    }
    
    let database = firebase.database().ref("kkm/" + 2);
    database.set(task);
}

function setKKM4(){
    const kkminput = document.getElementById('kkm4').value;

    var task = {
        id: 3,
        kkm: kkminput
    }
    
    let database = firebase.database().ref("kkm/" + 3);
    database.set(task);
}