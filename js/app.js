$(document).ready(function() {
	var container = $('.isotope');

	container.isotope({
		itemSelector: '.item',
		layoutMode: 'fitRows'
	});

	$('.filters').on( 'click', 'button', function(event) {
    	var filterValue = $( this ).attr('data-filter');
    	container.isotope({ filter: filterValue });
  	});

	$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  $('#about').hover( function() {
    $('.dark-black-overlay').fadeIn('slow');
  });

  $('#about_link').on( 'click', function() {
  	$('.dark-black-overlay').fadeIn('slow');
  });

});