// Получаем ссылку на элемент изображения
const image = document.querySelector(".card--1");

// Добавляем обработчик события клика на изображение
image.addEventListener("click", function () {
  // Перенаправляем пользователя на другую страницу
  window.location.href = "./obsor.html";
});

// Получаем ссылку на элемент ссылки на Instagram
const instagramLink = document.querySelector(".fab.fa-instagram");

// Добавляем обработчик события клика на ссылку на Instagram
instagramLink.addEventListener("click", function (event) {
  // Отменяем стандартное поведение ссылки
  event.preventDefault();

  // Перенаправляем пользователя на Instagram в новой вкладке
  window.open("https://www.instagram.com/", "_blank");

  // Останавливаем распространение события клика к родительскому элементу
  event.stopPropagation();
});
