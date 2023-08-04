// Header start
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// Header End

//Start innerHTML
const btnDongeng = document.querySelector("#btnDongeng");
btnDongeng.onclick = () => {
  const judul = document.querySelector("#judul");
  const cerita = document.querySelector("#cerita");
  //   const btnDongeng = document.querySelector("#btnDongeng");

  if (judul.innerHTML == "Si Kura-Kura yang Sombong") {
    judul.innerHTML = "Persahabatan Tikus & Singa";
    cerita.innerHTML =
      "Seekor tikus jail menggoda singa yang sedang tertidur, karena jengkel singa pun marah dan berniat memakan si tikus. Ketakutan dengan kemarahan singa, tikus pun menangis dan meminta ampun. Karena kebaikan singa, singa pun memaafkan si tikus dan melepaskan tikus. Tikus berterima kasih pada singa dan berjanji akan membalas kebaikan singa. Suatu saat, terdengar suara meringis singa yang tertangkap jaring pemburu. Tikus pun segera membantu singa dengan menggerogoti jaring pemburu sampai keduanya bisa kabur dari jeratan pemburu.";
    btnDongeng.innerHTML = "<< Dongeng Sebelumnya";
  } else {
    judul.innerHTML = "Si Kura-Kura yang Sombong";
    cerita.innerHTML =
      "Seekor kura-kura sombong merasa dirinya lebih pantas terbang dibanding berenang dan jengkel karena tempurungnya yang berat. Dia pun selalu kesal ketika melihat burung-burung yang terbang bebas di langit. Suatu hari, kura-kura memaksa seekor angsa untuk membantunya terbang dan si angsa mengusulkan kura-kura berpegangan pada sebatang kayu. Batang kayu tersebut pun kemudian diangkat oleh angsa dan dibawa terbang. Sayangnya, genggaman tangan kura-kura melemah dan dia jatuh dengan keras. Untungnya kura-kura selamat karena keberadaan tempurung yang paling ia benci.";
    btnDongeng.innerHTML = "Ganti Dongeng >>";
  }
};
// End innerHTML

// Date & Time Start
setInterval(() => {
  const dateElement = document.querySelector("#date");
  const date = new Date();
  dateElement.innerHTML = date;
});
setInterval(() => {
  const dateFormat = document.querySelector("#dateFormat");
  const dateNow = new Date();
  const tahun = dateNow.getFullYear(); //tahun
  const bulan = dateNow.getMonth(); //bulan januari [0]
  const hari = dateNow.getDay(); //hari minggu [0]
  const tanggal = dateNow.getDate(); //tanggal
  const jam = dateNow.getHours(); //jam
  const menit = dateNow.getMinutes(); //menit
  const detik = dateNow.getSeconds(); //detik

  const format = `${tahun}-${getNum(bulan + 1)}-${getNum(tanggal)} ${getNum(
    jam
  )}:${getNum(menit)}:${getNum(detik)}`;

  dateFormat.innerHTML = format;
}, 1000);
function getNum(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

var countDownDate = new Date("Mar 12, 2023 00:00:00").getTime();
var x = setInterval(() => {
  // Today date & time
  var now = new Date().getTime();
  // Find distance between now & target
  var distance = countDownDate - now;
  // Time calculation for days, hour, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output result
  document.querySelector(
    "#countdown"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    document.querySelector("#countdown").innerHTML = "Waktu Habis";
  }
});
// Date & Time End

// If (Pengkondisian) start
function cekNilai() {
  var nilai = document.querySelector("#nilai").value;
  var hasil = document.querySelector("#hasil");

  if (nilai > 100) {
    hasil.innerHTML = "Nilai Melebihi Batas Maximum, Max 100.";
  } else if (nilai >= 90) {
    hasil.innerHTML = "Nilai anda A";
  } else if (nilai >= 80) {
    hasil.innerHTML = "Nilai anda B";
  } else if (nilai >= 70) {
    hasil.innerHTML = "Nilai anda C";
  } else if (nilai >= 60) {
    hasil.innerHTML = "Nilai anda D";
  } else if (nilai <= 60) {
    hasil.innerHTML = "Nilai anda E";
  }
}
// If (Pengkondisian) end

// Math Random (Bermain Warna) start
const warnaAcak = document.querySelector("#warnaAcak");
const canvas = document.querySelector("#canvas");
warnaAcak.onclick = function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  canvas.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
};

const tRed = document.querySelector("#tRed");
tRed.value = 0;
const tBlue = document.querySelector("#tBlue");
tBlue.value = 0;
const tGreen = document.querySelector("#tGreen");
tGreen.value = 0;

tRed.addEventListener("input", function () {
  const r = tRed.value;
  const g = tGreen.value;
  const b = tBlue.value;
  const tes = (canvas.style.backgroundColor =
    "rgb(" + r + "," + g + "," + b + ")");
  console.log(r);
});

tGreen.addEventListener("input", function () {
  const r = tRed.value;
  const g = tGreen.value;
  const b = tBlue.value;
  const tes = (canvas.style.backgroundColor =
    "rgb(" + r + "," + g + "," + b + ")");
  console.log(tes);
});

tBlue.addEventListener("input", function () {
  const r = tRed.value;
  const g = tGreen.value;
  const b = tBlue.value;
  const tes = (canvas.style.backgroundColor =
    "rgb(" + r + "," + g + "," + b + ")");
  console.log(tes);
});
// Math Random (Bermain Warna) end

// Email & Password Validation start
function validateEmail() {
  const email = document.querySelector("#email").value;
  let regularExpresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regularExpresion.test(email) === false) {
    alert(`${email}, Was Invalid Email, Please Following the Example`);
  } else if (regularExpresion.test(email)) {
    alert("Hurray! Your Email is Valid");
  }
}

function vadlidatePassword() {
  const password = document.querySelector("#password").value;
  let regularExpresion =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&@? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
  if (regularExpresion.test(password) === false) {
    alert(
      "password should contain atleast one number and one special character"
    );
  } else if (regularExpresion.test(password)) {
    alert("Hurray! Your Password is Valid and Strong.");
  }
}
// Email & Password Validation end
