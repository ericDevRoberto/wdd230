
const date = new Date()
let year = new Date().getFullYear();
document.querySelector(".footer-name").innerHTML = `&copy; ${year} .:|:. Eric R. Silva .:|:. Brazil`

let lastModification = Date.parse(document.lastModified);
let lastDate = new Date(lastModification)
document.querySelector(".footer-date").innerHTML = `Last Updated: ${lastDate.toLocaleString('sv')}`
