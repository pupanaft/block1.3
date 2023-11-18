let pageWrapper = document.querySelector('.content-box__wrapper');
let readMoreButton = document.querySelector('.read-more__button');
let buttonIcon = readMoreButton.querySelector('.read-more__icon');
let readMoreText = document.querySelector('.read-more__text');

readMoreButton.onclick = () =>{
    pageWrapper.classList.toggle('content-box__wrapper--more');
    buttonIcon.classList.toggle('read-more__icon--active');
    readMoreText.textContent = buttonIcon.classList.contains('read-more__icon--active') ? 'Скрыть':'Показать все'
}

const swiper = new Swiper('.swiper', {
        
    direction: 'horizontal',
    loop: true,
    freeMode:true,
    centeredSliders:true,
    autoHeight:true,
    updateOnWindowResize: true,
    spaceBetween: 16,
    slidesPerView: "auto",

    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },

    breakpoints: {
        768: {      
            spaceBetween: 0,
            enabled: false,
        },
            
    }
        
})

