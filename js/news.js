let currentPage = 1;
let newsList = document.querySelectorAll(".news .card");
let limitNewsPosts = 4;

// console.log(newsList)

function showNews() {
// Starting value
let start = limitNewsPosts * (currentPage - 1);
// Ending value
let end = limitNewsPosts * currentPage - 1;
newsList.forEach((item, num) => {
if (num >= start && num <= end) {
item.style.display = "block";
// console.log(item)
} else {
item.style.display = "none";
}
});
getNewsPage();
}
showNews();

function getNewsPage() {
let count = Math.ceil(newsList.length / limitNewsPosts);
document.querySelector(".page-numbers").innerHTML = "";
if (currentPage != 1) {
let prev = document.createElement("li");
prev.classList.add("prevBtn");
prev.setAttribute("onclick", "changeNewsPage(" + (currentPage - 1) + ")");
document.querySelector(".page-numbers").appendChild(prev);
}else{
let prev = document.createElement("li");
prev.classList.add("prevBtn");
prev.setAttribute("disabled", "");
document.querySelector(".page-numbers").appendChild(prev);
prev.style.cursor = "not-allowed";
}
for (i = 1; i <= count; i++) {
let newPage = document.createElement("li");
newPage.classList.add("page-number");
newPage.innerText = i;
if (i == currentPage) {
newPage.classList.add("active");
}
newPage.setAttribute("onclick", "changeNewsPage(" + i + ")");
document.querySelector(".page-numbers").appendChild(newPage);
}
if (currentPage != count) {
let next = document.createElement("li");
next.classList.add("nextBtn");
next.setAttribute("onclick", "changeNewsPage(" + (currentPage + 1) + ")");
document.querySelector(".page-numbers").appendChild(next);
}else{
let next = document.createElement("li");
next.classList.add("nextBtn");
next.setAttribute("disabled", "");
document.querySelector(".page-numbers").appendChild(next);
next.style.cursor = "not-allowed";
}
}

function changeNewsPage(i){
currentPage = i;
showNews();
}