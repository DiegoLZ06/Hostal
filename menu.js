	const desglose = document.querySelector('.menu');
	const menu = document.querySelector('.menu-navegacion');

	console.log(menu)
	console.log(desglose)

	desglose.addEventListener('click', ()=>{
		menu.classList.toggle("spread")
	})

	window.addEventListener('click', e=>{
		if(menu.classList.contains('spread') && e.target != menu && e.target != desglose){


			menu.classList.toggle("spread")
		}
	})