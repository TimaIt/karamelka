const x = setInterval(function () {
  // получаем текущую дату и время
  const now = new Date().getTime();

  // вычисляем количество часов, минут и секунд
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  // выводим время на страницу
  document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
  document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
  document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
}, 1000);
