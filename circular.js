
let knob = document.querySelector(".knob");
let circleSuhu = document.getElementById("circle2");
let circleKelembapan = document.getElementById("circle3");
let textSuhu = document.querySelector(".textSuhu");
let textKelembapan = document.querySelector(".textKelembapan");

let isRotating = false;

document.addEventListener("mousedown", (e) => {
    if (e.target.closest(".knob")) {
        isRotating = true;
    }
});

const rotateKnob = (e) => {
    if (isRotating) {
        let clientX, clientY;
        if (e.touches) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        let knobX = knob.getBoundingClientRect().left + knob.clientWidth / 2;
        let knobY = knob.getBoundingClientRect().top + knob.clientHeight / 2;

        let deltaX = clientX - knobX;
        let deltaY = clientY - knobY;

        let angleRad = Math.atan2(deltaY, deltaX);
        let angleDeg = (angleRad * 180) / Math.PI;

        let rotationAngle = (angleDeg - 135 + 360) % 360;

        // Ubah logika menjadi 180°
        if (rotationAngle <= 180) {
             let progressPercent = rotationAngle / 180;

            // Sesuaikan strokeDashoffset untuk 180°
            circleSuhu.style.strokeDashoffset = `${880 - 440 * progressPercent}`;
            circleKelembapan.style.strokeDashoffset = `${880 - 440 * progressPercent}`;

            let value = Math.round(progressPercent * 100);
            textSuhu.innerHTML = value + "°<br>Suhu";
            textKelembapan.innerHTML = value + "<br>Kelembapan";
        }
    }
};

document.addEventListener("mousemove", rotateKnob);
document.addEventListener("mouseup", () => {
    isRotating = false;
});

document.addEventListener("touchstart", (e) => {
    if (e.target.closest(".knob")) {
        isRotating = true;
    }
});

document.addEventListener("touchmove", rotateKnob);
document.addEventListener("touchend", () => {
    isRotating = false;
});

