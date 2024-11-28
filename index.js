
const content = document.getElementById('firstBg');
const globeContainer = document.getElementById('globeContainer');
const button = document.getElementById('submitButton');
const title = document.getElementById("message");

button.addEventListener('click', (event) => {

    var name = document.getElementById("name-input").value;

    event.preventDefault();

    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'black';

    title.innerHTML = `Merry Christmas ${name}!`;

    content.classList.add('hidden');
    globeContainer.classList.remove('hidden');
});

let globe = document.getElementById("snowglobe");
let particles;

tsParticles.loadJSON('particles', 'particles.json')
    .then(function () {
    particles = tsParticles.domItem(0);
    particles.pause()

    globe.addEventListener('click', () => {
        shakeItUp()
    });

    window.addEventListener("devicemotion", (event) => {
        const acceleration = calculateAcceleration(event);

        if (acceleration > 23) {
        shakeItUp()
        }
    });
});

function calculateAcceleration(event) {
    const {x, y, z} = event.accelerationIncludingGravity;
    const accelerationMagnitude = Math.sqrt(x * x + y * y + z * z);
    return accelerationMagnitude;
}

function shakeItUp() {
    particles.play();
    
    globe.classList.add("shake")
    setTimeout(() => {globe.classList.remove("shake")}, 1100)
}