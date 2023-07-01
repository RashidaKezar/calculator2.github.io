 resultField = document.getElementById('result');

 // Function to handle button clicks
 function handleClick(value) {
    currentExpression += value;
    resultField.value = currentExpression;
  }

  // Function to clear the result
function clearResult() {
    currentExpression = '';
    resultField.value = '';
  }

  // Function to calculate the result
function calculateResult() {
  let calculatedResult = eval(currentExpression); 
  resultField.value = calculatedResult;
  currentExpression = '';
  }