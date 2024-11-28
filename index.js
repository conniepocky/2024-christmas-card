
const content = document.getElementById('firstBg');
const globeContainer = document.getElementById('globeContainer');
const button = document.getElementById('submitButton');
const title = document.getElementById("message");

button.addEventListener('click', (event) => {

    var name = document.getElementById("name-input").value;

    event.preventDefault();

    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'black';

    title.innerHTML = `Hello ${name}!`;

    content.classList.add('hidden');
    globeContainer.classList.remove('hidden');
});
