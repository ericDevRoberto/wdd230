
const date = new Date()
let year = new Date().getFullYear();
document.querySelector(".footer-year").innerHTML = `&copy; ${year}`

let lastModification = Date.parse(document.lastModified);
let lastDate = new Date(lastModification)
document.querySelector(".footer-date").innerHTML = `Last Modification: ${lastDate.toLocaleString('sv')}`

