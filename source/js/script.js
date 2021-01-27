/* Меню */
var menuBlock = document.querySelector(".nav");
var menuList = menuBlock.querySelector(".nav__list-wrapper");
var menuBtn = menuBlock.querySelector(".nav__toggle");

menuBlock.classList.add("nav--js");

menuBtn.onclick = function () {

  if (menuBtn.classList.contains("nav__toggle--close")) {

    menuBtn.classList.remove("nav__toggle--close");
    menuList.classList.remove("nav__list-wrapper--open");

  } else {

    menuBtn.classList.add("nav__toggle--close");
    menuList.classList.add("nav__list-wrapper--open");
  }

};

/* Модальное окно */
var modalBlock = document.querySelector(".modal");
var modalOpenAll = document.querySelectorAll(".modal-open");

if (modalOpenAll.length > 0) {

  for (var i = 0; i < modalOpenAll.length; i++) {

    var btnList = modalOpenAll[i];

    btnList.onclick = function(e) {
      e.preventDefault();

      modalBlock.classList.add("modal--open");

    }

  }

}

if (modalBlock) {

  modalBlock.onclick = function (e) {

    var target = e.target;

    if (!target.classList.contains("modal__wrapper") && target.classList.contains("modal")) {

      modalBlock.classList.remove("modal--open");

    }

  };

}

/* Карта */
var mapIframe = document.querySelector('.contacts__map-iframe');
var mapLink = document.querySelector('.contacts__map-link');

mapIframe.classList.add('contacts__map-iframe--js');
mapLink.remove();
