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

let slidePosition = 0;

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