$(document).ready(function () {

  let isMenuOpen = false;

  // $('.burger').on('click', function () {

  //   if (isMenuOpen) {
  //     $('.main-nav').slideUp();

  //     // $('.main-nav').removeAttr('style');
  //     isMenuOpen = false;
  //     return;
  //   }

  //   $('.main-nav').slideDown();
  //   isMenuOpen = open;

  // });

  // Открытие.закрытие мобильного меню
  $('.burger').on('click', function () {
    $('.main-nav').slideToggle();
  });


  // Табы на странице контактов
  $('.tabs-link').on('click', function (e) {
    e.preventDefault();
    const activeClass = 'active';
    let index = $(this).index('.tabs-link');

    $('.tabs-link').removeClass(activeClass);
    $(this).addClass(activeClass);

    $('.contacts-content').removeClass(activeClass);
    $('.contacts-content').eq(index).addClass(activeClass);
  });

  // Фильтрация в портфолио

  $('.filter-link').on('click', function (e) {
    e.preventDefault();
    let dataFilter = $(this).data('filter');

    $('.filter-link').removeClass('active');
    $(this).addClass('active');

    if (dataFilter === 'all') {
      $('.portfolio-item').show();
      return;
    }

    $('.portfolio-item').each(function () {
      let dataType = $(this).data('type');

      if (dataFilter === dataType) {
        $(this).show();
        return;
      }

      $(this).hide();
    });

  });


  let prevIndex;
  $('.accordeon-question').on('click', function () {
    const currentIndex = $(this).index('.accordeon-question');

    if (prevIndex === currentIndex) {
      $(this).next().slideToggle();
      return;
    }

    $('.accordeon-answear').slideUp();
    $(this).next().slideDown();

    prevIndex = currentIndex;
  });


  // Галерея
  if ($('.slider').length) {
    $('.slider').slick({
      dots: true
    });
  }

});
