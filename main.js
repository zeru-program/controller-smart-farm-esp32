function start() {
    document.getElementById('opening-screen').classList.remove("d-flex")
    document.getElementById('opening-screen').classList.add("d-none")
}

/* waktu tanggal */
function updateDateTime() {
    var now = new Date();
    var date = now.toLocaleDateString('id-ID'); // Format tanggal sesuai lokal Indonesia
    var time = now.toLocaleTimeString('id-ID'); // Format waktu sesuai lokal Indonesia
    document.getElementById('date-time').innerHTML = date + ' - ' + time;
}
setInterval(updateDateTime, 1000);
updateDateTime();
/* waktu tanggal */

/* open setting */
var settingPopup = document.getElementById("setting-popup")
function openSetting() {
    settingPopup.classList.remove("d-none")
    settingPopup.classList.add("d-flex")
}
function closeSetting() {
    settingPopup.classList.remove("d-flex")
    settingPopup.classList.add("d-none")
}
/* open setting */

var db = "https://controler-smart-farm-default-rtdb.firebaseio.com/"
var endpointServer = "http://192.168.237.16:8080/"
var endpointClient = "http://192.168.237.173/"

getDht()
getSoil()

function getDht() {
    var showTemp = document.getElementById("display-temp")
    fetch(endpointServer + "temp", {
        method: "GET"
    })
    .then(res => res.json())
    .then(result => {
        showTemp.innerText = result + "°C" 
        updateProgress(0, result);
  
    })
}

function getSoil() {
    var showSoil = document.getElementById("display-soil")
    fetch(endpointServer + "soil", {
        method: "GET"
    })
    .then(res => res.text())
    .then(result => {
        showSoil.innerText = result + "%"
        updateProgress(2, result);
    })
}

setInterval(getDht, 500);
setInterval(getSoil, 500);

function kipas(state) {
    const kipasOn = document.getElementById("on-kipas")
    const kipasOff = document.getElementById("off-kipas")
    
    if (state === "on") {
        kipasOn.classList.add("pri-bg")
        kipasOn.classList.remove("bg-transparent")
        kipasOn.classList.add("text-light")
        kipasOff.classList.remove("pri-bg")
        kipasOff.classList.remove("text-light")
        kipasOff.classList.remove("border-0")
        kipasOff.classList.add("bg-transparent")
        kipasOff.classList.add("outline-pri")
        kipasOff.classList.add("primary-color")
        
        fetch("/kipas", {
            method: "POST"
        })
        .then(res => res.text())
        .then(result => {
            Swal.fire({
                title: "Berhasil !",
                text: result,
                icon: "success"
              });
        })
    } else if (state === "off") {
        kipasOff.classList.add("pri-bg")
        kipasOff.classList.remove("bg-transparent")
        kipasOff.classList.add("text-light")
        kipasOn.classList.remove("pri-bg")
        kipasOn.classList.remove("text-light")
        kipasOn.classList.remove("border-0")
        kipasOn.classList.add("bg-transparent")
        kipasOn.classList.add("outline-pri")
        kipasOn.classList.add("primary-color")

        fetch("/kipas", {
            method: "GET"
        })
        .then(res => res.text())
        .then(result => {
            Swal.fire({
                title: "Berhasil !",
                text: result,
                icon: "info"
              });
        })
    } else {
        alert("?")
    }
}

function siram(state) {
    const kipasOn = document.getElementById("on-air")
    const kipasOff = document.getElementById("off-air")
    
    if (state === "on") {
        kipasOn.classList.add("pri-bg")
        kipasOn.classList.remove("bg-transparent")
        kipasOn.classList.add("text-light")
        kipasOff.classList.remove("pri-bg")
        kipasOff.classList.remove("text-light")
        kipasOff.classList.remove("border-0")
        kipasOff.classList.add("bg-transparent")
        kipasOff.classList.add("outline-pri")
        kipasOff.classList.add("primary-color")

        fetch("/air", {
            method: "POST"
        })
        .then(res => res.text())
        .then(result => {
            Swal.fire({
                title: "Berhasil !",
                text: result,
                icon: "success"
              });
        })
    } else if (state === "off") {
        kipasOff.classList.add("pri-bg")
        kipasOff.classList.remove("bg-transparent")
        kipasOff.classList.add("text-light")
        kipasOn.classList.remove("pri-bg")
        kipasOn.classList.remove("text-light")
        kipasOn.classList.remove("border-0")
        kipasOn.classList.add("bg-transparent")
        kipasOn.classList.add("outline-pri")
        kipasOn.classList.add("primary-color")

        fetch("/air", {
            method: "GET"
        })
        .then(res => res.text())
        .then(result => {
            Swal.fire({
                title: "Berhasil !",
                text: result,
                icon: "info"
              });
        })
    } else {
        alert("?")
    }
}

let clickShow = false;
var popupController = document.getElementById("popupController")

function toggleShowController() {
    if (clickShow) {
        popupController.classList.add("d-none")
        popupController.classList.remove("d-flex")
    } else {
        popupController.classList.remove("d-none")
        popupController.classList.add("d-flex")
    }
    clickShow = !clickShow
}
