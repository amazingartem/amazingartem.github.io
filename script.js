let button1 = document.querySelector("#button1");

button1.addEventListener("click", () => {
  let confirmAction = confirm("Перейти на Ozone.ru?");
  if (confirmAction === true) {
    document.location.href =
      "https://www.ozon.ru/context/detail/id/243592913/?asb=gemsFaxfc7R3MrV%252F3rlbZVQjZ5Tv5xlqPuflKeg45Gw%253D";
  }
});

let button2 = document.querySelector("#button2");

button2.addEventListener("click", () => {
  let confirmAction = confirm("Перейти на Ozone.ru?");
  if (confirmAction === true) {
    document.location.href =
      "https://www.ozon.ru/product/verevka-igrovaya-hlopkovaya-dlya-shibari-pink-rabbit-krasnaya-20-m-239731437/?asb=yl5H7GIOmasM21MaKLAF4aiXyXV8CS7TiNuKc4kJGd8%253D";
  }
});

let button3 = document.querySelector("#button3");

button3.addEventListener("click", () => {
  let confirmAction = confirm("Перейти на Ozone.ru?");
  if (confirmAction === true) {
    document.location.href =
      "https://www.ozon.ru/product/sedobnyy-lubrikant-jo-h2o-flavored-myatnaya-prohlada-30-ml-217265901/";
  }
});
