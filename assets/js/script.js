// Main Script
(function($) {
	"use strict";
	// -----------------------------
	// Document Ready Function
	// -----------------------------
	$(document).ready(function() {
		// Video Play
		$(".video-play").click(function() {
			var video = '<iframe allowfullscreen src="' +
				$(this).attr("data-video") +
				'"></iframe>';
			$(this).replaceWith(video);
		});
		// -----------------------------
		//  Video Replace
		// -----------------------------
		$(".video-box i").click(function() {
			var video = '<iframe allowfullscreen src="' +
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
		function smoothScroll() {
			$("a.page-scroll").on("click", function(event) {
				var $anchor = $(this);
				$("html, body")
					.stop()
					.animate(
						{
							scrollTop: $($anchor.attr("href")).offset().top - 0,
						},
						1000,
					);
				event.preventDefault();
			});
		}
		smoothScroll();
	});

	$(window).on("load", function() {
		$("#preloader").fadeOut(2000);
	});
})(jQuery);
