'use strict';
// Создайте новый модуль и опишите в нем функции взаимодействия удалённым сервером через XHR
(function () {
  const SUCCESSFUL_DOWNLOAD = {
    OK: 200
  };
  const TIMEOUT_IN_MS = 8000;
  const URL_TO_GET = `https://21.javascript.pages.academy/keksobooking/data`;
  const URL_TO_POST = `https://21.javascript.pages.academy/keksobooking`;
  const GET = `GET`;
  const POST = `POST`;

  const dataProcessing = function (method, url, data, onLoad, onError) {

    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;
    xhr.timeout = TIMEOUT_IN_MS;
    xhr.open(method, url);
    xhr.send(data);

    xhr.addEventListener(`load`, function () {
      if (xhr.status === SUCCESSFUL_DOWNLOAD.OK) {
        onLoad(xhr.response);
      } else {
        onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
      }
    });
    xhr.addEventListener(`error`, function () {
      onError(`Произошла ошибка соединения`);
    });
    xhr.addEventListener(`timeout`, function () {
      onError(`Запрос не выполнился за ${xhr.timeout} мс`);
    });
  };

  window.test = {
    load(onLoad, onError) {
      dataProcessing(GET, URL_TO_GET, null, onLoad, onError);
    },
    save(data, onLoad, onError) {
      dataProcessing(POST, URL_TO_POST, data, onLoad, onError);
    }
  };

})();
