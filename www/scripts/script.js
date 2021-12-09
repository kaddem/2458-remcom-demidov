$(document).ready(function () {

  let servicesItems = $('.services-title').text();

  console.log(servicesItems);

  let linkText = $('.main-nav a').text();

  console.log(linkText);

  $('.services-title').hide();

  $('.main-nav a').css({
    'color': 'red',
    'font-size': '30px'
  });


  function summ(a, b) {
    console.log(a + b);
    return a + b;
    console.log('some');
  }

  let firstSumm = summ(2, 4);
  console.log(firstSumm);

});
