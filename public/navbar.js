const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const top = document.querySelector('.menu');

    burger.addEventListener('click',() =>{
        top.classList.toggle('menu-active');
    });
};
navSlide();