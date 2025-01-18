import data from "./data.js";
let accordion = document.getElementById("inner");
function addToInner() {
  data.forEach(function (element) {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "accordion-item (" + element.id + ")");

    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("id", "accordion-title");

    let innerTitleQues = document.createElement("h3");
    innerTitleQues.innerHTML = `${element.question}`;
    let upArrow = document.createElement("i");
    upArrow.className = "fa-solid fa-arrow-up";

    let innerAnswer = document.createElement("div");
    innerAnswer.innerHTML = `${element.answer}`;

    innerDiv.appendChild(innerTitleQues);
    innerDiv.appendChild(upArrow);

    mainDiv.appendChild(innerDiv);
    mainDiv.appendChild(innerAnswer);

    accordion.appendChild(mainDiv);

    innerDiv.style.display = "flex";
    innerDiv.style.justifyContent = "left";

    upArrow.style.margin = "20px";
    innerAnswer.style.display = "none";

    upArrow.addEventListener("click", function () {
      if (innerAnswer.style.display === "none") {
        innerAnswer.style.display = "block";
        upArrow.className = "fa-solid fa-arrow-down";
      } else {
        innerAnswer.style.display = "none";
        upArrow.className = "fa-solid fa-arrow-up";
      }
    });
  });
  ////////////
}
addToInner();

//Functionality to add-> If one opens then other one closed
