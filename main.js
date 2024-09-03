function start() {
    document.getElementById('opening-screen').classList.remove("d-flex")
    document.getElementById('opening-screen').classList.add("d-none")
}

let knob = document.querySelector(".knob");
let circle = document.getElementById("circle2");
let pointer = document.querySelector(".pointer");
let text = document.querySelector(".text");
let manualInput = document.getElementById("manualInput");

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
            pointer.style.transform = `rotate(${rotationAngle - 45}deg)`;

            let progressPercent = rotationAngle / 180;

            // Sesuaikan strokeDashoffset untuk 180°
            circle.style.strokeDashoffset = `${880 - 440 * progressPercent}`;

            let value = Math.round(progressPercent * 100);
            text.innerHTML = value;
            manualInput.value = value;
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

// Function to update the knob based on manual input
manualInput.addEventListener("input", (e) => {
    let value = parseInt(e.target.value);
    if (value < 0 || value > 100) return;

    // Sesuaikan rotasi untuk 180°
    let rotationAngle = (value * 180) / 100;
    pointer.style.transform = `rotate(${rotationAngle - 45}deg)`;

    let progressPercent = rotationAngle / 180;
    circle.style.strokeDashoffset = `${880 - 440 * progressPercent}`;
    text.innerHTML = value;
});
