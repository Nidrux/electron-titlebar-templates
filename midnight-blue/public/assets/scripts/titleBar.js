let closeIcon = document.getElementById('title-bar-icon-close');
closeIcon.addEventListener('click', (e) => {
    titleBar.closeApp()
})
let minIcon = document.getElementById('title-bar-icon-min');
minIcon.addEventListener('click', (e) => {
    titleBar.minimizeApp()
})
