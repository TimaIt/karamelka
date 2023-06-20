function scrollToPage(url) {
  const body = document.querySelector("body");
  body.classList.add("scroll-out");

  setTimeout(function () {
    window.location.href = url;
  }, 500); // Здесь можно настроить задержку в миллисекундах
}
