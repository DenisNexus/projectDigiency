//===========Mobile menu=========
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav_btn');
const navBtn1 =document.querySelector('#nav_btn1');

navBtn.addEventListener('click', function(){
  nav.classList.toggle('open');
  event.preventDefault();
})

navBtn1.addEventListener('click', function(){
  nav.classList.toggle('open');
  event.preventDefault();
})

// ==========Switch theme========
const switchMode =document.querySelector('#switchMode')
switchMode.addEventListener('click',function(){
  const theme = document.querySelector('#theme');
  if(theme.getAttribute("href")=="style/style-light.css"){
    theme.href="style/style-dark.css"
  }else{
    theme.href="style/style-light.css"
  }
  event.preventDefault();
})
//=========== Slider ============
$(document).ready(function(){
    $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots:true,
        autoplay: false,
        fade: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
        ]
    });
});
// ============Numbers===========
var time = 2,
  cc = 1;
$(window).scroll(function() {
  $('#expereince').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 200) {
      if (cc < 2) {
        $(".expereince__cardTitle").addClass("viz");
        $('div').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});
