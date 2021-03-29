		// Mansory 
		document.addEventListener("DOMContentLoaded", function(event) {
			masonryBuild();
		});
		(function() {
			var $gallery = new SimpleLightbox('.grid-item img', {
				close: true,
				preloading: true,
				widthRatio: 0.7,
				heightRatio: 0.8,
				scaleImageToRatio: true,
				disableScroll: true,
				showCounter: false
			});
		})