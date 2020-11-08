'use strict';
// модуль, который управляет карточками объявлений и метками:
// добавляет на страницу нужную карточку, отрисовывает метки и осуществляет взаимодействие карточки и метки на карте;
(function () {
  const {cardGeneration} = window.card;
  //  const {weGenerateAds} = window.data;
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

      // остановилась здесь
      function cardDrawing() {
        const mapContainer = map.querySelector(`.map__filters-container`);
        map.insertBefore(cardGeneration(pinClone, templateCard), mapContainer);
      }
      // что здесь не так
      const activatingMap = function (evt) {
        if (evt.button === 0) {
          clonElement.addEventListener(`mousedown`, cardDrawing);
        }
        clonElement.removeEventListener(`mousedown`, activatingMap);
      //  const card = map.querySelector(`.map__card`);
      //  card.remove();
      };
      activatingMap();
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
