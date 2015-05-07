//fizzbuzz refactor!

var number= prompt("Please enter a number:", 0);
parseInt(number, 10); 

console.log('number', number);

var $ul = document.querySelector('ul'); 

fizzBuzz(number); 

function present(result) {
	console.log(result); 

	var $li=document.createElement('li'); 
		$li.innerText= result; 
		$ul.appendChild($li); 
		}


function fizzBuzz(number) {
	console.log('fizzBuzz', number)

for (var counter=1; counter < number; counter ++) {
	if ((counter%15) == 0)  {
		present('FizzBuzz'); }

	else if ((counter%3) == 0) {
		present('Fizz'); }

	else if ((counter%5) == 0) {
		present('Buzz');  }

	else {
		present(counter);
		
			}
}
}



