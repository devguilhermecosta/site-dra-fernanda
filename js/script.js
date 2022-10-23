function to_active() {
    var menu = document.getElementById('menu')

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function to_quit() {
    var menu = document.getElementById('menu')
    
    if (menu.style.display == "block") {
        menu.style.display = "none";
    }
}