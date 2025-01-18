let stars = document.querySelectorAll(".fa-star");
let ratingValue = document.getElementById("ratingValue");
let totalStars = 0;
console.log(stars);

stars.forEach(function (star, index) {
  star.dataset.rating = index + 1;
  star.addEventListener("mouseover", handleOnMouseOver);
  star.addEventListener("click", handleOnMouseClick);
});
function handleOnMouseOver(e) {
  let rating = e.target.dataset.rating;
  console.log(rating);
  handleRating(rating);
}
function handleRating(rating) {
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars[i].style.color = "yellow";
    } else {
      stars[i].style.color = "black";
    }
  }
}
function handleOnMouseClick(e) {
  let rating = e.target.dataset.rating;
  ratingValue.textContent = rating;
  totalStars = rating;
  console.log(totalStars);
}
