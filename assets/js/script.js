// Main Script
(function($) {
	"use strict";
	// -----------------------------
	// Document Ready Function
	// -----------------------------
	$(document).ready(function() {
		// Video Play
		$(".video-play").click(function() {
			const video = '<iframe allowfullscreen src="' +
				$(this).attr("data-video") +
				'"></iframe>';
			$(this).replaceWith(video);
		});
		// -----------------------------
		//  Video Replace
		// -----------------------------
		$(".video-box i").click(function() {
			const video = '<iframe allowfullscreen src="' +
				$(this).attr("data-video") +
				'"></iframe>';
			$(this).replaceWith(video);
		});
		$(".product-slider-wrapper").slick({
			slidesToShow: 3,
			infinite: true,
			prevArrow:
				"<button type='button' class='slick-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
			nextArrow:
				"<button type='button' class='slick-next'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
			responsive: [
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
						centerMode: true,
					},
				},
			],
		});
		// Text Reveal
		$(".rev").waypoint(
			function() {
				$(this[(0, "element")]).addClass("reveal-text");
				this.destroy;
			},
			{
				offset: "bottom-in-view",
			},
		);

		$(".image-reveal").waypoint(
			function() {
				$(this[(0, "element")]).addClass("trigger");
				this.destroy;
			},
			{
				offset: "bottom-in-view",
			},
		);
		$(".vision-slider-wrapper").waypoint(
			function() {
				$(this[(0, "element")])
					.find(".slick-current")
					.find(".image")
					.addClass("trigger");
				this.destroy;
			},
			{
				offset: "bottom-in-view",
			},
		);
		// -----------------------------
		// Smmoth Scroll
		// -----------------------------
		// $('a[href^="#"]').click(function() {
		// 	const speed = 500;
		// 	const href = $(this).attr("href");
		// 	const target = $(href == "#" || href == "" ? "html" : href);
		// 	const position = target.offset().top;
		// 	$("html, body").animate({ scrollTop: position }, speed, "swing");
		// 	return false;
		// });
	});

	$(window).on("load", function() {
		$("#preloader").fadeOut(2000);
	});
})(jQuery);
