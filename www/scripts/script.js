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

  $('.j-review-btn').on('click', function () {

    $.ajax({
      type: 'POST',
      url: '../json/reviews.json',
      data: 'count=2',
      success: function (response) {
        createHtml(response.reviews);
      },
      error: function () {
        console.log('error');
      }
    });

  });

  function createHtml(reviewsArray) {
    let newHtml = '';

    for (let i = 0; i < reviewsArray.length; i++) {
      newHtml = newHtml + `
      <div class="reviews-item">
        <div class="review">
          <div class="review-ava-wrap">
            <img src="${reviewsArray[i].avaUrl}" alt="${reviewsArray[i].avaAlt}" class="review-ava">
          </div>
          <div class="review-content">
            <span class="review-name">${reviewsArray[i].name}</span>
            <blockquote class="review-quote">
              “${reviewsArray[i].text}”
            </blockquote>
          </div>
        </div>
      </div>`;
    }

    addToPage(newHtml);
  }

  function addToPage(htmlString) {
    $('.reviews-list').append(htmlString);
  }

});
