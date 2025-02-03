import data from "./data.js";
let accordion = document.getElementById("inner");
function addToInner() {
  data.forEach(function (element) {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "accordion-item (" + element.id + ")");

    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("id", "accordion-title");
    innerDiv.classList.add("accordion-title");

    let innerTitleQues = document.createElement("h3");
    innerTitleQues.innerHTML = `${element.question}`;
    let upArrow = document.createElement("i");
    upArrow.className = "fa-solid fa-arrow-up";

    let innerAnswer = document.createElement("div");
    innerAnswer.innerHTML = `${element.answer}`;
    innerAnswer.classList.add("accordion-answer");

    innerDiv.appendChild(innerTitleQues);
    innerDiv.appendChild(upArrow);

    mainDiv.appendChild(innerDiv);
    mainDiv.appendChild(innerAnswer);

    accordion.appendChild(mainDiv);

    innerDiv.style.display = "flex";
    innerDiv.style.justifyContent = "left";

    upArrow.style.margin = "20px";
    innerAnswer.style.display = "none";

    // upArrow.addEventListener("click", function () {
    //   if (innerAnswer.style.display === "none") {
    //     innerAnswer.style.display = "block";
    //     upArrow.className = "fa-solid fa-arrow-down";
    //   } else {
    //     innerAnswer.style.display = "none";
    //     upArrow.className = "fa-solid fa-arrow-up";
    //   }
    // });

    //USING EVENT DELEGATION
  });
}
accordion.addEventListener("click", function (e) {
  // console.log(e.target);
  // if (e.target.classList.contains(".accordion-title")) { //! This will only work if the the element is just after the inner div
  //   console.log("clicked a ques");
  // }
  //Using closest() method to find the closest parent with the class name accordion-title

  //!best method
  let answer = e.target.closest(".accordion-title").nextElementSibling;
  let arrowIcon = e.target.closest(".accordion-title").querySelector("i");
  document.querySelectorAll(".accordion-answer").forEach(function (ans) {
    if (ans === answer) {
      ans.style.display = "block";
      ans.previousElementSibling
        .querySelector("i")
        .classList.replace("fa-arrow-up", "fa-arrow-down");
    } else {
      ans.style.display = "none"; // Hide answer
      ans.previousElementSibling
        .querySelector("i")
        .classList.replace("fa-arrow-down", "fa-arrow-up"); // Change arrow to up
    }
  });
  if (answer.style.display === "none") {
    answer.style.display = "block"; // Show answer
    arrowIcon.classList.replace("fa-arrow-up", "fa-arrow-down"); // Change arrow to down
  } else {
    answer.style.display = "none"; // Hide answer
    arrowIcon.classList.replace("fa-arrow-down", "fa-arrow-up"); // Change arrow to up
  }
});
////////////

addToInner();

//Functionality to add-> If one opens then other one closed
