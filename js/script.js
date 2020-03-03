$(window).on('load', function () {
	var preloader = $('.box-preloader'),
		spinner = preloader.find('.loader');
	spinner.delay(1000).fadeOut();
	preloader.delay(1000).fadeOut()
});

$(document).ready(function () {
	$('.btn-menu-hidden, .top-menu-hidden ul a').click(function () {
		if ($('.top-menu-hidden').is(':hidden')) {
			$('.top-menu-hidden').show();
			$('body').css('overflow', 'hidden')
		} else {
			$('.top-menu-hidden').hide();
			$('body').css('overflow', 'visible')
		}
	});
});
//(function () {
//
//	$(".submit").click = function () {
//		$.ajax({
//			type: 'POST',
//			url: 'https://mandrillapp.com/api/1.0/messages/send.json',
//			data: {
//				'key': '0583dde16ff94cd3fded877cbce1aaa5-us3',
//				'message': {
//					'from_email': $('#email').val(),
//					'to': [
//						{
//							'email': 'vasyl.dzuba1@gmail.com',
//							'name': $('#name').val(),
//							'type': 'to'
//              }
//            ],
//					'autotext': 'true',
//					'subject': 'YOUR SUBJECT HERE!',
//					'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
//				}
//			}
//		}).done(function (response) {
//			console.log(response); // if you're into that sorta thing
//		});
//	}
//});
//(function () {
//	$('.Home').mouseover(function () {
//		$(this).css({
//			display: 'none'
//		});
//		$(this).addClass('aHomeText');
//	})
//})
