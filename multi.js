function appendToResult(value) {
    document.getElementById('num').value += value;
    
  }

  function clearResult() {
    document.getElementById('num').value = '';
  }

  function multiply() {
    var userInput = document.getElementById('num').value;
    var numeros = document.getElementsByClassName('numero');
    for (var i = 0; i <10;i++){
        numeros[i].innerHTML=userInput
    }
    
    var inputNumber = parseFloat(userInput);
    for (var i = 1; i <= 10; i++) {
        var result = inputNumber * i;
        document.getElementById('result' + i).innerHTML = result;
    }
}