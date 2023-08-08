const operators = ['+', '-', '*', '/', '%'];
let string = "";
const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    try {
      const buttonText = e.target.innerHTML;

      if (buttonText === '=') {
        string = eval(string);
        input.value = string;
      } 
      else if (buttonText === 'AC') {
        string = "";
        input.value = string;
      } 
      else if (buttonText === "DEL") {
        string = string.substring(0, string.length - 1);
        input.value = string;
      } 
      else if (buttonText === '.') {
        const lastChar = string.charAt(string.length - 1);
        if (!operators.includes(lastChar) && lastChar !== '.') {
          string = string + buttonText;
          input.value = string;
        }
      } 
      else if (operators.includes(buttonText)) {
        const lastChar = string.charAt(string.length - 1);
        if (!operators.includes(lastChar)) {
          string = string + buttonText;
          input.value = string;
        }
      } 
      else {
        string = string + buttonText;
        input.value = string;
      }
    } catch (Exception) {
      string = "";
      input.value = string;
    }
  });
});
