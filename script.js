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
     
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                enabled: true,
            },
            320: {
                slidesPerView: 1.25,
                enabled: true,
            },
            345: {
                slidesPerView: 1.35,
                enabled: true,
            },
            370: {
                slidesPerView: 1.45,
                enabled: true,
            },
            395: {
                slidesPerView: 1.55,
                enabled: true,
            },
            420: {
                slidesPerView: 1.65,
                enabled: true,
            },
            445: {
                slidesPerView: 1.75,
                enabled: true,
            },
            470: {
                slidesPerView: 1.85,
                enabled: true,
            },
            495: {
                slidesPerView: 1.95,
                enabled: true,
            },
            520: {
                slidesPerView: 2.05,
                enabled: true,
            },
            545: {
                slidesPerView: 2.15,
                enabled: true,
            },
            570: {
                slidesPerView: 2.25,
                enabled: true,
            },
            595: {
                slidesPerView: 2.35,
                enabled: true,
            },
            620: {
                slidesPerView: 2.45,
                enabled: true,
            },
            645: {
                slidesPerView: 2.55,
                enabled: true,
            },
            670: {
                slidesPerView: 2.65,
                enabled: true,
            },
            695: {
                slidesPerView: 2.75,
                enabled: true,
            },
            720: {
                slidesPerView: 2.85,
                enabled: true,
            },
            745: {
                slidesPerView: 2.95,
                enabled: true,
            },
            767: {
                
                slidesPerView: "auto",
                enabled: false,
            },
            
        }
        
    })

