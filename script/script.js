//Функція calculate з умовним тернарним оператором і вводом змінних та отриманням результатів у інпути.
function calculate(a, operator, b) {
  a = document.getElementById("firstValue").value;
  b = document.getElementById("secondValue").value;
  var res = document.getElementById("res");
  operator.value === "+" ? res.value = Number(a) + Number(b) :
    (operator.value === "-" ? res.value = Number(a) - Number(b) : (operator.value === "*" ? res.value = Number(a) * Number(b) :
      (operator.value === "/" ? res.value = Number(a) / Number(b) :
        (operator.value === "%" ? res.value = Number(a) / 100 :
          (operator.value === "square" ? res.value = Math.pow(Number(a), 2) :
            (operator.value === "√" ? res.value = Math.sqrt(Number(a)) : res.value = 0))))));
}


// Функція calculate з if else та вивідом результата на консоль.
function calculateonconsole(a, operator, b) {
  var a;
  var b;
  if (operator === "+") {
    console.log(Number(a) + Number(b));
  }
  else if (operator === "-") {
    console.log(Number(a) - Number(b));

  }
  else if (operator === "*") {
    console.log(Number(a) * Number(b));

  }
  else if (operator === "/") {
    console.log(Number(a) / Number(b));
  }
  else if (operator === "%") {
    console.log(Number(a) / 100);
  }
  else if (operator === "√") {
    console.log(Math.sqrt(Number(a)));
  }
  else if (operator === "square") {
    console.log(Math.pow(Number(a), 2));
  }
  else {
    console.log("Невірно занесено дані");
  }
}

calculateonconsole(9, "√", 0);
calculateonconsole(9, "square", 0);
calculateonconsole(9, "%", 0 );
