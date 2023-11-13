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

  let kmplanId = [];


let kuisnya = document.getElementById('kuis');


let tmp = document.querySelector('.disini');
tmp.innerHTML = "";
kelasnya = document.getElementById('kelas');
// sekolah = document.getElementById('sekolah');
let kelasfix = '';
// let sekolahfix = '';

let cek11 = 0;
kuisfix = kuisnya.value;


function readlah() {
    kuisfix = kuisnya.value;
    console.log(kuisfix);
    var task = firebase.database().ref(kuisfix);

    tmp.innerHTML = "";
    if (kelasnya.value == "1") {
        kelasfix = "IV A";
    } else if (kelasnya.value == "2") {
        kelasfix = "IV B";
    }

    let jwbfixx = [];

    let jwb1 = ["b", "d", "a", "c", "a", "b", "d", "c", "c", "d"]; // jawaban kuis 1
    if (kuisfix == "kuis1/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb1.length; i++) {
            hhh += `<td class="table-info"> ${jwb1[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb1;
    }

    let jwb2 = ["d", "a", "b", "d", "c"]; // jawaban kuis 2
    if (kuisfix == "kuis2/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb2.length; i++) {
            hhh += `<td class="table-info"> ${jwb2[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb2;
    }

    let evaluasi = ["c", "a", "a", "c", "b", "c", "a", "b", "b", "d"]; // jawaban evaluasi
    if (kuisfix == "evaluasi/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < evaluasi.length; i++) {
            hhh += `<td class="table-info"> ${evaluasi[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = evaluasi;
    }

    if (kelasfix != '') {
        task.orderByChild("nama").on("child_added", function (data) {
            // task.on("child_added", function (data) {
            var taskvalue = data.val();

            console.log(taskvalue);

            if (kelasfix == taskvalue.kelas) {
                let mm = '';
                mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
                // console.log(taskvalue.jawabsiswa[0]);


                for (let i = 0; i < jwbfixx.length; i++) {
                    if (taskvalue.jawab[i] == jwbfixx[i]) {
                        mm += `<td class="benar">${taskvalue.jawab[i]}</td>`;
                    } else {
                        mm += `<td class="salah">${taskvalue.jawab[i]}</td>`;
                    }
                }
                mm += `</tr>`;
                tmp.innerHTML += mm;
            }

        });

    } else {
        alert('Tentukan filter pencarian');
    }

}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    // sekolah = document.getElementById('sekolah');
    kuis = document.getElementById('kuis');
    kelasnya.value = value = "0";
    // sekolah.value = value = "0";
    // kuis.value = value = "kuis1/";
}
