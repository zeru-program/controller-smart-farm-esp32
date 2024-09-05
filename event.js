document.addEventListener("keydown", (e) => {
    console.log(e.keyCode);
    if (e.keyCode == 27) {
        closeSetting()
    } else if (e.keyCode == 83) {
        openSetting()
    }
})