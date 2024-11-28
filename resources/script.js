// Calculation Logic 

// DOM search of variables 
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

// Initial screen input value
let screenValue = '';

// calculator button utility
for (item of buttons) {
    item.addEventListener('click', (e) => {

        // To get text value of buttons  
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText); 

        // button functionality algorithm
        if (buttonText == 'AC') {
            // clear screen function
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            // eval js function is used to calculate end result of problem
            screen.value = eval(screenValue);
        }
        else {
            // to get values on input
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
