
//Вопрос № 1
//Галерея картинок ДЛЯ САЙТА!!!!!!!!!!!!!!

//проверка src
const checkImgSrc = src => {
    const img = new Image();
    img.onload = function () { console.log(`valid src: ${src}`); }
    img.onerror = function () { console.log(`invalid src: ${src}`); }
    img.src = src;
  }
  
  
  checkImgSrc('gallery');
  // возможно ссылка уже устареет, но все же
  checkImgSrc('https://picsum.photos/seed/1/150?blur');

function openImage(event){

   

    //получаем div элемент галереи
 const gallery = document.getElementsByClassName("gallery")[0];

 //Очищаем галерею перед тем как вставить новую картинку
 gallery.innerHTML ="";

 //получаем пораждающий событие объект
 const target = event.target;
 

 //получаем data-атрибут с номером картинки
 const seed = target.dataset.seed;

 //если номер пустой, то прерываем выполнение
 if (!seed) {
     return;
 }

 //создаем картинку
 const image = document.createElement("img");

 //добавляем атрибуты к картинке

 image.src = `https://picsum.photos/seed/${seed}/800`;


 //добавляем новый блок в галерею
 gallery.appendChild(image);
 
}


function init() {
    const images = document.querySelectorAll(".thumbnails > img"); //коротка запись (ищу класс .thumbnails и в неем все картинки)

    for (let image of images) { //далее используя цикл for итерируюсь по images и создаю на каждую итерацию переменную image где у нас содержиться 1 картинка
        image.addEventListener('click', openImage); //и далее для каждой переменной imsge  я добавляю EventListener и функцию openImage чтобы повесить на каждую картинку событие клика
    }
}



window.addEventListener('load', init); //Обработка Событий

