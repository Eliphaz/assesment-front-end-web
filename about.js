console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('message submit');
}


let form = document.querySelector('form#contact');
let ducks = document.querySelector('#ducks')

const userCompliment = (event) =>{
	event.preventDefault() 
	alert('whos a good little user') }

form.addEventListener('submit', handleSubmit);
ducks.addEventListener('mouseover', userCompliment)
