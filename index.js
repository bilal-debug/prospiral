
async function fetchImage() {
    const response = await fetch('https://source.unsplash.com/random/400x200');
    const imageURL = response.url;
    document.getElementById('card-image').src = imageURL;
  }
  
 
  async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();
  
    document.getElementById('title').innerText = data.title;
    document.getElementById('subtitle').innerText = data.subtitle;
    document.getElementById('description').innerText = data.description;
    document.getElementById('author-name').innerText = data.author.name;
    document.getElementById('author-image').src = data.author.image;
  }
  

  function init() {
    fetchImage();
    fetchData();
  }
  
  window.onload = init;
  