// Unsplash Images API request

const apiKey = "_PvfhiYCQkSn9SSZqnTn9i31nB19gHmt4grhczRO4Oc";
const images = document.querySelectorAll(".image");

fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const banner_image = data.urls.regular;
    const author_image = data.user.profile_image.small;

    document.getElementById("author-image").src = author_image;
    document.getElementById("card-image").src = banner_image;
  });

async function fetchData() {
  const response = await fetch("data.json");
  const data = await response.json();

  document.getElementById("title").innerText = data.title;
  document.getElementById("subtitle").innerText = data.subtitle;
  document.getElementById("description").innerText = data.description;
  document.getElementById("author-name").innerText = data.author.name;
}

// function init() {
  fetchData();
// }

// window.onload = init;
