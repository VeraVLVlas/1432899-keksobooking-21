'use strict';
// модуль, который отвечает за создание карточки объявлений;

(function () {
  // создайте DOM-элемент объявления (карточка объявления), заполните его данными из объекта:
  const cardGeneration = function (advt, pattern) {
    const cardFragment = document.createDocumentFragment();
    const addingToAd = pattern.cloneNode(true);
    addingToAd.querySelector(`.popup__title`).textContent = `${advt.offer.title}`;
    addingToAd.querySelector(`.popup__text--address`).textContent = `${advt.offer.address}`;
    addingToAd.querySelector(`.popup__text--price`).textContent = `${advt.offer.price} ₽/ночь`;
    addingToAd.querySelector(`.popup__type`).textContent = `${advt.offer.type}`;
    addingToAd.querySelector(`.popup__text--capacity`).textContent = `${advt.offer.rooms} комнат для ${advt.offer.quests} гостей`;
    addingToAd.querySelector(`.popup__text--time`).textContent = `Заезд после ${advt.offer.checkin} выезд до ${advt.offer.checkuot}`;
    addingToAd.querySelector(`.popup__features`).textContent = `${advt.offer.features}`;
    addingToAd.querySelector(`.popup__description`).textContent = `${advt.offer.description}`;
    addingToAd.querySelector(`.popup__photos img`).src = `${advt.offer.photos}`;

    cardFragment.appendChild(addingToAd);

    addingToAd.querySelector(`.popup__close`).addEventListener(`click`, function () {
      addingToAd.remove();
    });

    const eventHandler = function (evt) {
      if (evt.key === `Escape`) {
        evt.preventDefault();
        addingToAd.remove();
      }
      document.removeEventListener(`keydown`, eventHandler);
    };
    document.addEventListener(`keydown`, eventHandler);
    return cardFragment;
  };

  window.card = {
    cardGeneration
  };
})();
