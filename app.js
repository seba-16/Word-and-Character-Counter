// 1. Listen for button click



document.querySelector('#stats').addEventListener('click',function (){

// 2. Fetch USER INPUT

	let UserInput = document.querySelector('#user_input').value;

// 3. Calculate No. of characters	

//alert(UserInput.length)

let numCharacters = UserInput.length;

// 4.Display in HTML
document.querySelector('#character').textContent=numCharacters;

//5. Calculate Words

let numWords = UserInput.split(" ");
let wordss = numWords.length;

// 6. Display 
document.querySelector('#Words').textContent=wordss;

// 7. Empty the Text Area
 document.querySelector('#user_input','#character','#Words').value=" ";
})