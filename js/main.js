// 
// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');
let liHeader = document.querySelectorAll('.header__menu-item');

burger.addEventListener('click', rotateBurger); 

for(let i = 0; i < liHeader.length; i++ ) {
	if (window.innerWidth < 990 ) {
		liHeader[i].addEventListener('click', rotateBurger);
	}
}


function rotateBurger() { 
  burger.classList.toggle('burger-active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}


// ======== swiper ========

const swiper = new Swiper('.swiper', {
	// Optional parameters
	autoplay: 500,
	slidesPerView: 1,
	spaceBetween: 100,
	centeredSlides: true, 
	loop: true,
	// If we need pagination
	pagination: {
	el: '.swiper-pagination',
	},
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		850: {
			slidesPerView: 1.3,
			spaceBetween: 30,
		},
		960: {
			slidesPerView: 1.6,
			spaceBetween: 30,
		},
		1150: {
			slidesPerView: 1.8,
			spaceBetween: 30,
		},
		1250: {
			slidesPerView: 2.0,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 2.2,
			spaceBetween: 30,
		},
		1500: {
			slidesPerView: 2.5,
			spaceBetween: 30,
		},
		1700: {
			slidesPerView: 2.8,
			spaceBetween: 30,
		},
	},

});
// ======== swiper / ========



// ========= slyder slick ==========
$('.slyder__box').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: true,
	arrow: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
		  breakpoint: 1400,
		  settings: {
			 slidesToShow: 2,
			 slidesToScroll: 1,
			 infinite: true,
			 dots: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			 slidesToShow: 1,
			 slidesToScroll: 1
		  }
		}
	 ]
 });


// отправка формы =============>
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо. Ваша заявка была отправлена.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
// ============================

// ======== akkardion-2 ========
class ItcAccordion2 {
	constructor(target, config) {
	  this._el = typeof target === 'string' ? document.querySelector(target) : target;
	  const defaultConfig = {
		 alwaysOpen: false
	  };
	  this._config = Object.assign(defaultConfig, config);
	  this.addEventListener();
	}
	addEventListener() {
	  this._el.addEventListener('click', (e) => {
		 const elHeader = e.target.closest('.accordion-2__header');
		 if (!elHeader) {
			return;
		 }
		 if (!this._config.alwaysOpen) {
			const elOpenItem = this._el.querySelector('.accordion-2__item_show');
			if (elOpenItem) {
			  elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion-2__item_show') : null;
			}
		 }
		 elHeader.parentElement.classList.toggle('accordion-2__item_show');
	  });
	}
 }

 new ItcAccordion2('#accordion2');
// ======== akkardion2 / ========
// ===============================================

new WOW().init();