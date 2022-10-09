
const date = new Date()
let year = new Date().getFullYear();
document.querySelector(".footer-name").innerHTML = `&copy; ${year} .:|:. Eric R. Silva .:|:. Brazil`

let lastModification = Date.parse(document.lastModified);
let lastDate = new Date(lastModification)
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.querySelector(".footer-date").innerHTML = lastDate.toLocaleString('en-US', options)
