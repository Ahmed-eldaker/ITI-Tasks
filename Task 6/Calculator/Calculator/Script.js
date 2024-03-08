var Answer = document.getElementById("Answer");
var currentInput = "";
var currentOperator = "";
var storedValue = "";
function EnterNumber(e) {
  currentInput += e;
  Answer.value += currentOperator + currentInput;
}
function EnterOperator(e) {
  storedValue = parseFloat(currentInput);
  currentOperator = e;
  currentInput = "";
}
function EnterClear(e) {
  storedValue = "";
  currentInput = "";
  currentOperator = "";
  Answer.value = "";
}
function EnterEqual(e) {
  if (currentInput !== "") {
    var currentValue = parseFloat(currentInput);
    switch (currentOperator) {
      case "+":
        storedValue += currentValue;
        break;
      case "-":
        storedValue -= currentValue;
        break;
      case "*":
        storedValue *= currentValue;
        break;
      case "/":
        break;
      default:
        break;
    }

    Answer.value = storedValue;
  }
}
