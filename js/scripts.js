// $(document).ready(function () {
// 	$('.main-nav__link, .logo[href^="#"], *[data-href^="#"]').on('click', function (e) {
// 		e.preventDefault();
// 		var t = 1000;
// 		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
// 		$('html,body').stop().animate({
// 			scrollTop: $(d).offset().top
// 		}, t);
// 	});
// });



$(".price__item").not(":first").hide();
$(".offer .offer__item").click(function() {
	$(".offer .offer__item").removeClass("active").eq($(this).index()).addClass("active");
	$(".price__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
	page.classList.toggle('dark-theme');
};