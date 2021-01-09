'use strict';

//////////////////////////
//                      //
//     «ФИЛЬТРАЦИЯ      //
//      ПО СТРАНАМ»     //
//                      //
//////////////////////////

if (document.querySelector('.countries-filter')) {
  const countriesFilter = document.querySelector('.countries-filter');
  const countriesFilterToggle = countriesFilter.querySelector('.countries-filter__toggle');
  const countriesFilterToggleText = countriesFilterToggle.querySelector('.countries-filter__toggle-text');
  const countriesFilterClose = countriesFilter.querySelector('.countries-filter__close')
  const countriesFilterInner = countriesFilter.querySelector('.countries-filter__inner');
  const countriesFilterContinents = countriesFilter.querySelector('.countries-filter__continents');
  const countriesFilterLetters = countriesFilter.querySelector('.countries-filter__letters');
  const countriesFilterCountriesAll = countriesFilter.querySelector('.countries-filter__countries-all');
  const pageMainCountriesFilterInner = document.querySelector('.page-main__countries-filter-inner');

  const letters = countriesFilter.querySelectorAll('.countries-filter__letter');
  const lettersFields = countriesFilter.querySelectorAll('.countries-filter__letter-field');
  const countriesLists = countriesFilter.querySelectorAll('.countries-filter__countries-wrapper');

  // Скрытие/открытие

  countriesFilterToggle.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (countriesFilterToggle.classList.contains('countries-filter__toggle--open')) {
      countriesFilterToggleText.textContent = countriesFilterToggle.dataset.textOpen;
    } else {
      countriesFilterToggleText.textContent = countriesFilterToggle.dataset.textClose;
    };

    countriesFilterToggle.classList.toggle('countries-filter__toggle--open');
    countriesFilterInner.classList.toggle('countries-filter__inner--open');
    countriesFilterContinents.classList.toggle('countries-filter__continents--open');
    countriesFilterLetters.classList.toggle('countries-filter__letters--open');
    countriesFilterCountriesAll.classList.toggle('countries-filter__countries-all--open');
    countriesFilterClose.classList.toggle('countries-filter__close--open');
    pageMainCountriesFilterInner.classList.toggle('page-main__countries-filter-inner--open');
  });

  countriesFilterClose.addEventListener('click', function(evt) {
    evt.preventDefault();

    countriesFilterToggle.classList.remove('countries-filter__toggle--open');
    countriesFilterInner.classList.remove('countries-filter__inner--open');
    countriesFilterContinents.classList.remove('countries-filter__continents--open');
    countriesFilterLetters.classList.remove('countries-filter__letters--open');
    countriesFilterCountriesAll.classList.remove('countries-filter__countries-all--open');
    countriesFilterClose.classList.remove('countries-filter__close--open');
    pageMainCountriesFilterInner.classList.remove('page-main__countries-filter-inner--open');
  });

  // Выбор буквы

  function clearCurrentCountries() {
    for (let i = 0; i < letters.length; i += 1) {
      letters[i].classList.remove('countries-filter__letter--current');
      lettersFields[i].classList.remove('countries-filter__letter-field--current');
      countriesLists[i].classList.remove('countries-filter__countries-wrapper--current');
    };
  };

  for (let i = 0; i < letters.length; i += 1) {
    lettersFields[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      clearCurrentCountries();

      letters[i].classList.add('countries-filter__letter--current');
      lettersFields[i].classList.add('countries-filter__letter-field--current');
      countriesLists[i].classList.add('countries-filter__countries-wrapper--current');
    });
  };
};
