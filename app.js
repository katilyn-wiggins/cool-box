const myGreeting = document.getElementById('greeting') 
//works best if you copy paste - so you don't misspell//

const myImput = document.getElementById('greeting-input');
const myButton = document.getElementById('greeting-button');

//this is how we tell the button to listen for clicks// 
myButton.addEventListener('click', () => {
 //the cool zone -- the place where stuff happens in response to a click! // 
 //go grab the current value of the text input//  
const userInput = myImput.value;

myGreeting.textContent = userInput;

});


//DOM - Document, Object, Model (framework/concept) How we get stuff from HTML to javascript// 









