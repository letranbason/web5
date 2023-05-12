$(function() {
	$('.hamburger-button').on('click', function(event){
		event.preventDefault();
		
		$(this).toggleClass('active');
		$('.overlay').toggleClass('visible');
	});
});

const image = document.getElementById('my-image');
const zoomInButton = document.getElementById('zoom-in-button');
const zoomOutButton = document.getElementById('zoom-out-button');

let scale = 1;

zoomInButton.addEventListener('click', function() {
  scale += 0.1;
  image.style.transform = `scale(${scale})`;
});

zoomOutButton.addEventListener('click', function() {
  scale -= 0.1;
  if (scale <= 0) {
    scale = 0;
  }
  image.style.transform = `scale(${scale})`;
});

document.addEventListener('keydown', function(event) {
  if (event.key === '+') {
    scale += 0.1;
    image.style.transform = `scale(${scale})`;
  }
  if (event.key === '-') {
    scale -= 0.1;
    if (scale <= 0) {
      scale = 0;
    }
    image.style.transform = `scale(${scale})`;
  }
});


var App = {
    slideView : function(){
        //count number slide
        jQuery('.slider-view-img').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            //count
            jQuery('.count-slide .current-slide').text((nextSlide*1+1));

        });
        //total slide
        var divCount = $('.slider-view-img div').length;
        $('.total').html(divCount);
        jQuery('.slider-view-img').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1500,
            dots: false,
            arrows: true,
            fade: false,
            focusOnSelect: true,
            asNavFor: '.slider-view-content',
            nextArrow: '.btn-control.right',
            prevArrow: '.btn-control.left'
        });
        jQuery('.slider-view-content').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1500,
            dots: false,
            arrows: false,
            fade: true,
            focusOnSelect: true,
            asNavFor: '.slider-view-img',
        });
    },
    sliderAmenity:function(){
        jQuery('.slider_amenity').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1500,
            arrows: false,
            variableWidth: true,
        });
    },

    mobileHandle:function(){
        jQuery('.menu-option').click(function(){
            jQuery('.overlay').css({'display':'block',});
            jQuery('.nav__mobile').css({'transform':'translateX(0%)'})
        })
        jQuery('.overlay').click(function(){
          jQuery('.overlay').css({'display':'none',});
          jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
        })
        jQuery('.nav-mobile__list li a').click(function(){
            jQuery('.overlay').css({'display':'none',});
            jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
        })
    },
    handleBtnTop : function(){
        var btn = jQuery('.btn-top');
        btn.on('click', function(e) {
        e.preventDefault();
        jQuery('html, body').animate({scrollTop:0}, 1000);
        });
        jQuery('.logo_site').click(function(e){
            e.preventDefault();
            jQuery('html, body').animate({scrollTop:0}, 1000);
        })
    }
};

jQuery(document).ready(function () {
   // App.sliderHome();
   $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position
        },1200 );
    });
    App.handleBtnTop();
    App.slideView();
    App.sliderAmenity();
    App.mobileHandle();
    AOS.init({duration: 2500,disable: 'mobile'});
});

