
jQuery(function($){
	$('#search_trigger').click(function(){
		$('#search_input').toggleClass('search_input_open');
	});
	$(document).click(function(e){
		if(!$ e.target).closest('.ngen_search_form').length){
		$('#search_input').removeClass('search_input_open');
	}
	})
})

