console.log("testing 1... 2... ");
var navbar_height = document.getElementById("navbar").offsetHeight;

function load() {
    window.scrollTo({top: navbar_height, behavior: 'smooth'});
}

function about_click() {
    var about_div = document.getElementById("about");
    window.scrollTo({top: document.getElementById("about").offsetTop - navbar_height, behavior: 'smooth'});
    document.getElementById("navbar-projects").classList.remove("uk-active");
    document.getElementById("navbar-about").classList.add("uk-active")
}

function projects_click() {
    var about_div = document.getElementById("projects");
    window.scrollTo({top: document.getElementById("projects").offsetTop - navbar_height, behavior: 'smooth'});
    document.getElementById("navbar-projects").classList.add("uk-active");
    document.getElementById("navbar-about").classList.remove("uk-active");
}
