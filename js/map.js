'use strict';
// модуль, который управляет карточками объявлений и метками:
// добавляет на страницу нужную карточку, отрисовывает метки и осуществляет взаимодействие карточки и метки на карте;
(function () {
  const {cardGeneration} = window.card;

  // 2. создаем ДОМ элементы из этих пинов
  // Функция для создание DOM элемента из одного объекта объявления
  const map = document.querySelector(`.map`);

  const clonedAds = function (newMapPin, template) {
    const fragment = document.createDocumentFragment();

    newMapPin.forEach(function (pinClone) {
      const clonElement = template.cloneNode(true);
      const clonPictures = clonElement.querySelector(`img`);
      clonElement.style = `left: ${pinClone.location.x}px; top: ${pinClone.location.y}px`;
      clonPictures.src = `${pinClone.autor.avatar}`;
      fragment.appendChild(clonElement);

      clonElement.addEventListener(`click`, cardOpen);

      const activatingMap = function () {
        const card = map.querySelector(`.popup`);
        if (card && clonElement === `click`) {
          card.remove();
          clonElement.removeEventListener(`click`, cardOpen);
        }
      };

      function cardOpen() {
        const mapContainer = map.querySelector(`.map__filters-container`);
        map.insertBefore(cardGeneration(pinClone, templateCard), mapContainer);
        activatingMap();
      }
    });
    return fragment;
  };

  // найдем шаблон
  const templateCard = document.querySelector(`#card`)
.content
 .querySelector(`.popup`);

  window.map = {
    clonedAds
  };

})();
