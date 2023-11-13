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
  firebase.initializeApp(firebaseConfig);

  let idnya = [];

  const db = firebase.database();
  const dbkkm = db.ref('kkm').on('value', handleSuccess, handleError)
  
  let getKKM;
  function handleSuccess(items){
      getKKM = items.val();
  
      let kkm1 = getKKM[0]['kkm'];
      let kkm2 = getKKM[1]['kkm'];
      let kkm3 = getKKM[2]['kkm'];
      let kkmeva = getKKM[3]['kkm'];
  
  
      var kkm1html = document.querySelector('.kkm1');
      kkm1html.innerHTML = kkm1;
  
      var editkkm1 = document.querySelector('.kkmkuis1');
      editkkm1.value = kkm1;
  
      var kkm2html = document.querySelector('.kkm2');
      kkm2html.innerHTML = kkm2;
  
      var editkkm2 = document.querySelector('.kkmkuis2');
      editkkm2.value = kkm2;
  
      var kkm3html = document.querySelector('.kkm3');
      kkm3html.innerHTML = kkm3;
  
      var editkkm3 = document.querySelector('.kkmkuis3');
      editkkm3.value = kkm3;
  
      var kkm4html = document.querySelector('.kkm4');
      kkm4html.innerHTML = kkmeva;
  
      var editkkm4 = document.querySelector('kkmeva');
      editkkm4.value = kkmeva;
  
  
  }
  
  function handleError(err){
      console.log(err);
  }
  
  function updatekkmkuis1(){
      const kkminput = document.getElementById('kkm1').value;
  
      var task = {
          id: 0,
          kkm: kkminput
      }
      
      let database = firebase.database().ref("kkm/" + 0);
      database.set(task);
    //   kkminput.value="";
  }
  
  function updatekkmkuis2(){
      const kkminput = document.getElementById('kkm2').value;
  
      var task = {
          id: 1,
          kkm: kkminput
      }
      
      let database = firebase.database().ref("kkm/" + 1);
      database.set(task);
  }
  
  function updatekkmkuis3(){
      const kkminput = document.getElementById('kkm3').value;
  
      var task = {
          id: 2,
          kkm: kkminput
      }
      
      let database = firebase.database().ref("kkm/" + 2);
      database.set(task);
  }
  function updatekkmeva(){
      const kkminput = document.getElementById('kkmeva').value;
  
      var task = {
          id: 3,
          kkm: kkminput
      }
      
      let database = firebase.database().ref("kkm/" + 3);
      database.set(task);
  }