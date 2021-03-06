'use strict';

//////////////////////////
//                      //
//        МОДАЛКА       //
//    «БИЗНЕС-ТАРИФЫ»   //
//                      //
//////////////////////////

if (document.querySelector('.business-rates')) {
  const showBusinessRatesLink = document.querySelector('.new-profile__show-business-rates-link');
  const businessRatesModal = document.querySelector('.business-rates');
  const businessRatesCloseButton = document.querySelector('.business-rates__close');
  const businessRatesBackground =document.querySelector('.business-rates__background');

  // Открытие модалки

  showBusinessRatesLink.addEventListener('click', function(evt) {
    evt.preventDefault();

    businessRatesModal.classList.add('business-rates--shown');

    if (pageYOffset === 0) {
      scrolledMenu();
    };
  });

  // Закрытие модалки

  function closeBusinessRatesModal() {
    businessRatesModal.classList.remove('business-rates--shown');
  };

  businessRatesCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    closeBusinessRatesModal();

    if (pageYOffset === 0) {
      notScrolledMenu();
    };
  });

  businessRatesBackground.addEventListener('click', function(evt) {
    evt.preventDefault();

    closeBusinessRatesModal();

    if (pageYOffset === 0) {
      notScrolledMenu();
    };
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.code === 'Escape') {
      if (businessRatesModal.classList.contains('business-rates--shown')) {
        evt.preventDefault();

        closeBusinessRatesModal();

        if (pageYOffset === 0) {
          notScrolledMenu();
        };
      };
    };
  });
};
