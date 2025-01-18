let main = document.getElementById("container");
const api_url = "https://jsonplaceholder.typicode.com/posts";
let btn = document.getElementById("getPosts");
// async function fetchPosts() {
//   let posts = await fetch(api_url);
//   let res = await posts.json();
//   //   console.log(res);
//   return res;
// }
// btn.addEventListener("click", async function () {
//   let posts = await fetchPosts();
//   console.log(posts);

//   posts.forEach(function (post) {
//     let div = document.createElement("div");
//     let h3 = document.createElement("h3");
//     let p = document.createElement("p");
//     p.innerHTML = post.body;
//     h3.innerHTML = post.title;
//     div.style.backgroundColor = "aqua";
//     div.appendChild(h3);
//     div.appendChild(p);
//     main.appendChild(div);
//   });
// });

function displayPosts(posts) {
  posts.forEach(function (post) {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    p.innerHTML = post.body;
    h3.innerHTML = post.title;
    div.style.backgroundColor = "aqua";
    div.appendChild(h3);
    div.appendChild(p);
    main.appendChild(div);
  });
}
// function fetchUsingXHR() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", api_url);
//   xhr.send();
//   xhr.responseType = "json";
//   xhr.onload = () => {
//     displayPosts(xhr.response);
//   };
// }
// btn.addEventListener("click", fetchUsingXHR);

function fetchUsingPromise() {
  let data = fetch(api_url);
  data
    .then(function (res) {
      return res.json();
    })
    .then(function (post) {
      displayPosts(post);
    });
}
btn.addEventListener("click", fetchUsingPromise);
