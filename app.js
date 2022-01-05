const openbtn = document.getElementById('openbtn')

openbtn.addEventListener('click', ()=> {
    var links = document.getElementById('links')
    if(links.style.display == "none" ){

        links.style.display = "flex"
    } else {
        links.style.display = "none"
    }
})