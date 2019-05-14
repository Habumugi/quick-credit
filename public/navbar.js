const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const top = document.querySelector('.menu');

    burger.addEventListener('click',() =>{
        top.classList.toggle('menu-active');
    });
};
navSlide();

document.getElementById("demo").addEventLitener("click", myfunction());
function myfunction(){
    document.getElementById("demo").innerHTML = "user_panel.html";
};