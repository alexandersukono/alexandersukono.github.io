(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function closeSignIn() {
			$('#signin-modal').closeModal();
			setTimeout(function(){
				$('#signup-modal').openModal();
			}, 300);
}
		
  function closeSignUp() {
			$('#signup-modal').closeModal();
			setTimeout(function(){
				$('#signin-modal').openModal();
			}, 300)
}