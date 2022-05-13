let i = 0;
function typeWriter() {
    const txt = "I'm a Software Enigneer.";
    const speed = 50;

    if (i < txt.length) {
        document.getElementById("auto-write").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function ToggleButton() {
    navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", ToggleButton);
