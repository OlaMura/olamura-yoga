let burger = document.getElementById('burger'),
	 nav = document.getElementById('main-nav'),
	 navItems = document.querySelectorAll('.navItem');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');


window.addEventListener('load', function(e) {

	for (let i = 0; i < navItems.length; i++) {
		navItems[i].addEventListener("click", function() {
			console.log('click')
			nav.classList.toggle('is-open');
			burger.classList.toggle('is-open');
		});
	}
	

	// burger.dispatchEvent(clickEvent);
	
	// setTimeout(function(){
	// 	burger.dispatchEvent(clickEvent);
		

	// }, 5500);
});