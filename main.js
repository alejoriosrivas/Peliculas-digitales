$(window).ready(function(){
  $('.home').hover(function(){
    $('.ico1').addClass('dimensionar')
  }, function(){
    $('.ico1').removeClass('dimensionar')
  })
  $('.trending').hover(function(){
    $('.ico2').addClass('dimensionar')
  }, function(){
    $('.ico2').removeClass('dimensionar')
  })
  $('.likes').hover(function(){
    $('.ico3').addClass('dimensionar')
  }, function(){
    $('.ico3').removeClass('dimensionar')
  })
  $('.settings').hover(function(){
    $('.ico4').addClass('dimensionar')
  }, function(){
    $('.ico4').removeClass('dimensionar')
  })
})