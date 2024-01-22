$(document).ready(function(){
  $('.hideBox').click(function(){
    $(this).children('.content').slideToggle();
    let buttonText = $(this).children('.header').children('.material-symbols-outlined');
    if (buttonText.text().includes('more')) {
      buttonText.text(buttonText.text().replace('more', 'less'));
    } else {
      buttonText.text(buttonText.text().replace('less', 'more'));
    }
  });
});