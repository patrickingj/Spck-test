const myDisplay = document.getElementById('calculator-screen');

function appendToDisplay(input) {
  myDisplay.value += input;
}

function clearDisplay() {
  myDisplay.value = '';
}

function calculate() {
  try {
    myDisplay.value = eval(myDisplay.value);
  } catch (e) {
    myDisplay.value = 'Error';
  }
}