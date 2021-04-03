// hamberger
if (document.documentElement.clientWidth > 768) {
  var hamburger = document.querySelector('.hamburger');
  var navigation = document.querySelector('.menu');
  hamburger.addEventListener('click', function() {
    console.log('ddddd');
    if (hamburger.classList.contains('hamburger_active')) {
      hamburger.classList.remove('hamburger_active');
      navigation.classList.remove('menu_active');
    } else {
      hamburger.classList.add('hamburger_active');
      navigation.classList.add('menu_active');
    }
  });
}
