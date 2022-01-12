const images = [{
    id: 1,
    url: './assets/project_avatar/character_counter.jpg',
    detail: 'A web app that allows the user to insert series of characters which in turn changes the background color the input box!',
    name: 'Character Counter',
    project_url: 'https://character-counter-app.netlify.app/',
},
{
    id: 2,
    url: './assets/project_avatar/randomizer.jpg',
    detail: 'A random number guessing game where the user is able to pick a difficulty level. The random number is based on the difficulty level choosen.',
    name: 'Random Number Game',
    project_url: 'https://numberandomize.netlify.app/',
},
{
    id: 3,
    url: './assets/project_avatar/slider.jpg',
    detail: 'Implemented a slider image app in carousel format.',
    name: 'Image Slider',
    project_url: 'https://all-image-carousel.netlify.app/',
},
]

const openbtn = document.getElementById('openbtn')
var links = document.getElementById('links')


let slidePosition = 0;
let count = 0;

let body = document.getElementsByTagName("body")[0];
let mode = document.querySelector(".mode");

var photo = document.getElementsByTagName('img')[1]
var project_url = document.getElementById('view_project')
var details = document.getElementById('project_details')
var project_name = document.getElementById('project_name')

photo.setAttribute("src", images[slidePosition].url)
project_url.setAttribute("href", images[slidePosition].project_url)
details.textContent = images[slidePosition].detail
project_name.textContent = images[slidePosition].name

document
    .getElementById("button--next")
    .addEventListener("click", function() {
        moveToNextSlide(images.length);
        
    });
document
    .getElementById("button--prev")
    .addEventListener("click", function() {
        moveToPrevSlide(images.length);
        
    })

function moveToNextSlide(totalSlides) {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    photo.setAttribute("src", images[slidePosition].url)
    project_url.setAttribute("href", images[slidePosition].project_url)
    details.textContent = images[slidePosition].detail
    project_name.textContent = images[slidePosition].name

}

function moveToPrevSlide(totalSlides) {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    photo.setAttribute("src", images[slidePosition].url)
    project_url.setAttribute("href", images[slidePosition].project_url)

    details.textContent = images[slidePosition].detail
    project_name.textContent = images[slidePosition].name

}

function changeMode() {
    if (count < 40) {
      if (count == 0) {
        body.style.backgroundColor = "antiquewhite";
      } else {
        body.style.backgroundColor = "#ec66ec";
      }
      mode.style.transform = `translateX(${(count += 20)}px)`;
    } else {
      mode.style.transform = `translateX(${(count = 0)}px)`;
      body.style.backgroundColor = "#477998";
    }
  }

  openbtn.addEventListener('click', ()=> {
    if(links.style.display == "none" ){

        links.style.display = "flex"
    } else {
        links.style.display = "none"
    }
})