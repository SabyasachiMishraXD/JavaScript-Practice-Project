let stars = document.querySelectorAll(".fa-star");
let totalStar = document.getElementById("calcStar");
// console.log(stars);
let currentTotalSelectedStars = 0;
stars.forEach((star, index) => {
  star.dataset.rating = index + 1;
  star.addEventListener("mouseover", handleMouseOver);
  star.addEventListener("click", handleMouseClick);
  star.addEventListener("mouseleave", handleMouseLeave);
});
function handleMouseOver(event) {
  let currentStar = event.target.dataset.rating;
  //   console.log(currentStar);
  handleUpdateRatingState(currentStar);
}

function handleUpdateRatingState(currentStar) {
  for (let i = 0; i < 5; i++) {
    if (i < currentStar) {
      stars[i].style.color = "yellow";
    } else {
      stars[i].style.color = "black";
    }
  }
}
function handleMouseClick(event) {
  const currentRatingValue = event.target.dataset.rating;
  currentTotalSelectedStars = currentRatingValue;
  handleUpdateRatingState(currentTotalSelectedStars);
  totalStar.textContent = currentTotalSelectedStars;
}

function handleMouseLeave() {
  handleUpdateRatingState(currentTotalSelectedStars);
}
