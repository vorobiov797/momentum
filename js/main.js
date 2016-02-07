;(function($){

	$(function(){
		$('.ba-slider').slick({
			dots:true,
			vertical:false,
			verticalSwiping:true,
			infinity:false,
		});

		var qtyField = $('.ba-product__qty-field'),
		qtyUp = $('.ba-product__qty-up'),
		qtyDown = $('.ba-product__qty-down');

		qtyUp.on('click', function(event){
			event.preventDefault();
			var oldVal = qtyField.val();
			qtyField.val(++oldVal);



		});
		qtyDown.on('click', function(event){
			event.preventDefault();
			var oldVal = qtyField.val();
			if (--oldVal > 0){
				qtyField.val(oldVal);
			}





		});
		var prodColor = $('[name="product_color"]'),
		background = $('img#photo');
		prodColor.on('change', function(){
			if (this.value =="grey"){
				background.attr({
					'src':'img/Sennheiser-G4me-zero-review.png',
					'alt':'headphones'});
			} else if (this.value === "black"){
				background.attr({
					'src':'img/headphones1.png',
					'alt':'headphones'});
			}
				else {
				background.attr({
					'src':'../img/gold.png',
					'alt':'headphones'});
			}
			});



	});
	console.log('')
})(jQuery);
