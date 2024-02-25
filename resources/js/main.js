const homescreen = document.querySelector('.block-homescreen');
const homeSlider = homescreen.querySelector('.swiper-container');
new Swiper(homeSlider, {
    loop: false,
    slidesPerView: 'auto',
    freeMode: false,
    breakpoints: {
        320: {
            slidesPerView: 1.48,
            centeredSlides: true,
            freeMode: false,
            loop: true,
            speed: 800,
            autoplay: true,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 'auto',
            centerMode: false,
            freeMode: true,
            loop: false,
            spaceBetween: 0,
        },
    }
});

// const cookieModal = document.getElementById('cookie-modal');
// const joinModal = document.getElementById('join-modal');

// const mobileCheck = () => {
//     let check = false;
//     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
//     return check;
// };

// console.log(mobileCheck());

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         let block = document.querySelector(this.getAttribute('href'));
//         let headerOffset = document.querySelector('header').offsetHeight;
//         let blockPosition = block.getBoundingClientRect().top;
//         let offsetPosition = blockPosition + window.pageYOffset - headerOffset / 2;

//         window.scrollTo(0, offsetPosition);

//         document.body.classList.contains('mobile-menu-open') && document.body.classList.remove('mobile-menu-open');
//     });
// });

// document.querySelector('.burger-btn').addEventListener('click', () => document.body.classList.toggle('mobile-menu-open'));


// const blockAbout = document.querySelector('.block-about');
// if (blockAbout) {
//     const aboutSwiper = blockAbout.querySelector('.swiper-container');

//     new Swiper(aboutSwiper, {
//         loop: false,
//         slidesPerView: 'auto',
//         freeMode: true,
//         mousewheel: {
//             releaseOnEdges: true,
//             forceToAxis: true,
//         },
//         navigation: {
//             prevEl: '.swiper-button-prev',
//             nextEl: '.swiper-button-next',
//         },
//         pagination: {
//             el: '.swiper-pagination',
//         },

//         breakpoints: {
//             320: {
//                 slidesPerView: 1.48,
//                 centeredSlides: true,
//                 freeMode: false,
//                 loop: true,
//                 speed: 800,
//                 // spaceBetween: 20,
//             },
//             768: {
//                 slidesPerView: 'auto',
//                 centerMode: false,
//                 freeMode: true,
//                 loop: false,
//                 spaceBetween: 0,
//             },
//         }
//     });
// }

// const blockFaq = document.querySelector('.block-faq');
// if (blockFaq) {
//   const accordeonItems = blockFaq.querySelectorAll('.faq-item');
//   accordeonItems.forEach(item => {
//     item.addEventListener('click', () => item.classList.toggle('is-expanded'));
//   })
// }

// const tabsGroups = document.querySelectorAll('.tabs-wrapper');
// if (tabsGroups) {
//     tabsGroups.forEach( group => {
//         const tabSelectors = group.querySelectorAll('.tab-selector');
//         const tabs = group.querySelectorAll('.tab');
//         tabSelectors.forEach( (btn, index) => {
//             btn.addEventListener('click', () => {
//                 tabSelectors.forEach( btn => btn.classList.contains('active') && btn.classList.remove('active'));
//                 btn.classList.add('active');
//                 tabs.forEach( tab => tab.classList.contains('active') && tab.classList.remove('active'));
//                 tabs[index].classList.add('active');
//             });
//         })
//     });
// }

// const blockApp = document.querySelector('.block-app');
// if (blockApp) {
//     const tabSelectors = blockApp.querySelectorAll('.tab-selector');
//     // const tabs = blockApp.querySelectorAll('.tab');
//     const desktopFigures = blockApp.querySelectorAll('.figure img');

//     let currentSlideIndex = 0;

//     const updateDesktopFigure = () => {
//         desktopFigures.forEach(img => img.classList.contains('active') && img.classList.remove('active'));

//         // if ( currentSlideIndex < tabs.length )
//         if ( currentSlideIndex < tabSelectors.length )
//             desktopFigures[currentSlideIndex].classList.add('active');
//         else
//             desktopFigures[0].classList.add('active');
//     }

//     tabSelectors.forEach( (btn, btnIndex) => btn.addEventListener('click', () => {
//         tabSelectors.forEach(btn => btn.classList.remove('active'));
//         currentSlideIndex = btnIndex;
//         btn.classList.add('active');
//         !mobileCheck() && updateDesktopFigure();
//     }));


//     const autoPlay = () => {
//         tabSelectors.forEach( btn => btn.classList.contains('active') && btn.classList.remove('active'));
//         // tabs.forEach( tab => tab.classList.contains('active') && tab.classList.remove('active'));
//         // desktopFigures.forEach(img => img.classList.contains('active') && img.classList.remove('active'));


//         // if ( currentSlideIndex < tabs.length ) {
//         if ( currentSlideIndex < tabSelectors.length ) {
//             tabSelectors[currentSlideIndex].classList.add('active');
//             // tabs[currentSlideIndex].classList.add('active');
//             // desktopFigures[currentSlideIndex].classList.add('active');
//         }
//         else {
//             currentSlideIndex = 0;
//             tabSelectors[0].classList.add('active');
//             // tabs[0].classList.add('active');
//             // desktopFigures[0].classList.add('active');
//         }
//         updateDesktopFigure();

//         currentSlideIndex++;
//     }

//     !mobileCheck() && setInterval(() => autoPlay(), 4000);
// }

// // Cookies

// // Create cookie
// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = 'expires='+ d.toUTCString();
//     document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
// }

// // Delete cookie
// function deleteCookie(cname) {
//     const d = new Date();
//     d.setTime(d.getTime() + (24*60*60*1000));
//     let expires = 'expires='+ d.toUTCString();
//     document.cookie = cname + '=;' + expires + ';path=/';
// }

// // Read cookie
// function getCookie(cname) {
//     let name = cname + '=';
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');

//     for(let i = 0; i <ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return '';
// }

// // Set cookie consent
// function acceptCookieConsent() {
//     deleteCookie('user_cookie_consent');
//     setCookie('user_cookie_consent', 1, 30);
//     cookieModal.classList.remove('active');
// }

// // modals
// let cookie_consent = getCookie('user_cookie_consent');

// if (cookie_consent != '') {
//     cookieModal.classList.remove('active');
// } else {
//     cookieModal.classList.add('active');
// }


// document.querySelectorAll('[data-modal-join="open"]').forEach(btn => {
//     btn.addEventListener('click', () => {
//         joinModal.classList.add('active');
//         document.body.classList.contains('mobile-menu-open') && document.body.classList.remove('mobile-menu-open');
//     });
// });
// document.querySelectorAll('[data-modal-action="close"]').forEach(btn => {
//     btn.addEventListener('click', () => btn.closest('.modal').classList.remove('active'));
// });

