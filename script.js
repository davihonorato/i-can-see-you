var eyeball = document.querySelectorAll(".pupil-eye");

window.addEventListener('mousemove', function(e) {
    // define o comprimento e a altura da tela
    var screenWidth = this.innerWidth;
    var screeHeight = this.innerHeight;

    // define a posição do mouse
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    // define a posição da pupila dos olhos
    var positionX = (mouseX / screenWidth) * 100 + "%";
    var positionY = (mouseY / screeHeight) * 100 + "%";

    // define a posição de cada pupila
    eyeball.forEach(eyeball => {
        eyeball.style.left = positionX;
        eyeball.style.top = positionY;
        eyeball.style.transform = `translate(-${positionX}, -${positionY})`
    });
})
