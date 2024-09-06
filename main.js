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

const endpoint = "http://192.168.110.16/"

getDht()

function getDht() {
    var showTemp = document.getElementById("display-temp")
    fetch(endpoint + "dht", {
        method: "GET"
    })
    .then(res => res.json())
    .then(result => {
        showTemp.innerText = result.temperature + "°C"
        console.log(result)
    })
}

setInterval(getDht, 10);

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
        
        fetch(endpoint + "kipas", {
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

        fetch(endpoint + "kipas", {
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

        fetch(endpoint + "air", {
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

        fetch(endpoint + "air", {
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