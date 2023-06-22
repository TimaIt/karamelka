// Получаем ссылки на элементы формы
const form = document.querySelector("form");
const phoneNumberInput = document.querySelector(".form-control");

// Обработчик события отправки формы
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем отправку формы

  const phoneNumber = phoneNumberInput.value;

  // Проверяем, что введен номер телефона
  if (phoneNumber) {
    // Получаем ранее сохраненные номера телефонов из локального хранилища
    const savedPhoneNumbers =
      JSON.parse(localStorage.getItem("phoneNumbers")) || [];

    // Добавляем новый номер телефона в массив
    savedPhoneNumbers.push(phoneNumber);

    // Сохраняем обновленный массив номеров телефонов в локальном хранилище
    localStorage.setItem("phoneNumbers", JSON.stringify(savedPhoneNumbers));
    console.log("Номер телефона сохранен в локальном хранилище.");

    phoneNumberInput.value = ""; // Очищаем поле ввода
    location.reload(); // Обновляем страницу
  }
});
