
const date = new Date()
let year = new Date().getFullYear();
document.querySelector(".footer-year").innerHTML = `&copy; ${year}`

let lastModification = Date.parse(document.lastModified);
let lastDate = new Date(lastModification)
document.querySelector(".footer-date").innerHTML = `Last Modification: ${lastDate.toLocaleString('sv')}`

const hamButton = document.querySelector('#menuHamburger');
const navigation = document.querySelector('.vertical-menu');
const mapContainer = document.querySelector('.menu-map-container');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	mapContainer.classList.toggle('open');
});