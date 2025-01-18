let api_url = "https://picsum.photos/v2/list?page=1&limit=5";

let images = document.getElementById("images");
let imageArray = [];
let currIndex = 0;

async function fetchImages() {
  let val = await fetch(api_url, {
    method: "GET",
  });
  let res = await val.json();
  imageArray = res.map(function (img) {
    return img.download_url;
  });
  displayImage();
}

function displayImage() {
  images.innerHTML = "";
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", imageArray[currIndex]);
  imgElement.setAttribute("width", "300px");
  imgElement.setAttribute("height", "200px");
  images.appendChild(imgElement);
}

let left = document.getElementById("left");
let right = document.getElementById("right");

left.addEventListener("click", function () {
  currIndex = (currIndex - 1 + imageArray.length) % imageArray.length;
  displayImage();
});

right.addEventListener("click", function () {
  currIndex = (currIndex + 1) % imageArray.length;
  displayImage();
});
fetchImages();
