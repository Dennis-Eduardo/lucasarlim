var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".nav-bar").classList.toggle("show-menu");
    document.querySelector(".close").classList.toggle("show-span");
});




