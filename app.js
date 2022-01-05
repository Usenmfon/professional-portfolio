const openbtn = document.getElementById('openbtn')
var links = document.getElementById('links')

openbtn.addEventListener('click', ()=> {
    if(links.style.display == "none" ){

        links.style.display = "flex"
    } else {
        links.style.display = "none"
    }
})