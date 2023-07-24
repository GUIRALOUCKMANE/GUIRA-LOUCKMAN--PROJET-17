//selecteurs
// document.querySelector("h4").style.background="yello";
// const baliseHTML=document.querySelector("h4");

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const reponse = document.querySelector("p");
questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  reponse.classList.add("show-reponse");
  reponse.style.background = "green";
});

btn2.addEventListener("click", () => {
  reponse.classList.add("show-reponse");
  reponse.style.background = "red";
});
