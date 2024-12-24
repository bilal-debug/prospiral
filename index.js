
 // Unsplash Images API request

 const apiKey = 'rba6OSYhYgsFIoI0ZLr-mpA1Vp8pqCYjbuDY9g9B3oA';
 const images = document.querySelectorAll('.image');
 
 
 fetch(`https://api.unsplash.com/photos/random?query=restaurant&count=10&client_id=${apiKey}`)
   
 .then(response => response.json())
   
   .then(data => {
    
    
     data.forEach((photo, index) => {
        (document.getElementById('author-image').src=photo.urls.regular);
        (document.getElementById('card-image').src=photo.urls.regular);

      
       
     });
   });
 
  
 
  async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();
  
    document.getElementById('title').innerText = data.title;
    document.getElementById('subtitle').innerText = data.subtitle;
    document.getElementById('description').innerText = data.description;
    document.getElementById('author-name').innerText = data.author.name;
    
  }
  

  function init() {
    
    fetchData();
  }
  
  window.onload = init;
  