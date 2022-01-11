const images = [{
    id: 1,
    url: './assets/project_avatar/keyboard.jpg',
    detail: 'Picture of a keyboard and a cup of coffe',
},
{
    id: 2,
    url: './assets/project_avatar/snow.jpg',
    detail: 'Picture of snow and a house',
},
{
    id: 3,
    url: './assets/project_avatar/UsenmfonPassport.jpg',
    detail: 'Passport photo of Usenmfon Uko',
},
]

const openbtn = document.getElementById('openbtn')
var links = document.getElementById('links')


let slidePosition = 0;
let count = 0;

let body = document.getElementsByTagName("body")[0];
let mode = document.querySelector(".mode");

var photo = document.getElementsByTagName('img')[1]
var details = document.getElementById('project_details')

photo.setAttribute("src", images[slidePosition].url)
details.textContent = images[slidePosition].detail

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
    details.textContent = images[slidePosition].detail
}

function moveToPrevSlide(totalSlides) {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    photo.setAttribute("src", images[slidePosition].url)
    details.textContent = images[slidePosition].detail
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