import Swiper from 'swiper';
// import Swiper styles

let pageWrapper = document.querySelector('.box__wrapper');
let contentBrands = document.querySelector('.content__brands');
let readMoreButtonBrands = contentBrands.querySelector('.read-more__button');
let buttonIconBrands = readMoreButtonBrands.querySelector('.read-more__icon');
let readMoreTextBrands = readMoreButtonBrands.querySelector('.read-more__text');

readMoreButtonBrands.onclick = () =>{
    pageWrapper.classList.toggle('box__wrapper--more');
    buttonIconBrands.classList.toggle('read-more__icon--active');
    readMoreTextBrands.textContent = buttonIconBrands.classList.contains('read-more__icon--active') ? 'Скрыть':'Показать все'
}

let contentTech = document.querySelector('.content__tech')
let pageWrapperTech = contentTech.querySelector('.box__wrapper')
let readMoreButtonTech = contentTech.querySelector('.read-more__button');
let buttonIconTech = readMoreButtonTech.querySelector('.read-more__icon');
let readMoreTextTech = readMoreButtonTech.querySelector('.read-more__text');

readMoreButtonTech.onclick = () =>{
    pageWrapperTech.classList.toggle('box__wrapper--more-b');
    buttonIconTech.classList.toggle('read-more__icon--active');
    readMoreTextTech.textContent = buttonIconTech.classList.contains('read-more__icon--active') ? 'Скрыть':'Показать все'
}

    let swiper = new Swiper('.swiper', {
            
        direction: 'horizontal',
        loop: true,
        freeMode:true,
        centeredSliders:true,
        spaceBetween: 16,
        slidesPerView: "auto",
        updateOnWindowResize: true,
        
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        },
        breakpoints: {
            768: {      
                spaceBetween: 0,
                enabled: false,
                
            },            
        },            
    })
    
    