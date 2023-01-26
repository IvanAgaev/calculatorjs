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


// Табулювання функції

//e^-x^2
function forloop1(x) {
  return Math.exp(-(Math.pow(Number(x), 2)));
}

//1 - x^2
function forloop2(x) {
  return 1 - Math.pow(Number(x), 2);
}

//sin2x+cos(3+x)
function forloop3(x) {
return Math.sin(2*x) + Math.cos(3+x);
}

//|x+4|^5
function forloop4(x) {
  return Math.abs(Math.pow(Number(x)+4,5));
  }

  //1 - e^x
function forloop5(x) {
  return (1 - Math.exp(Number(x)));
  }

function loop(a, b, n) {

  let h = (b - a) / n;
  let p = 0;
  console.log("f(x) = e^-x^2");

  for (let i = 0; i < 4; i = i + h) {
    let xi = Number(a) + Number(p) * Number(h);
    console.log( "x(i):" + xi  + " " + "a:" + a + " " + "b:" + b + " " + "n:" + p++ + " " + "x:" + i + " " + "y:" + forloop1(i)); 

  }
  console.log("f(x) = 1 - x^2");
  let r = 0;
  for (let i = 0; i < 4; i = i + h) {
    let xi = Number(a) + Number(r) * Number(h);
    console.log( "x(i):" + xi  + " " + "a:" + a + " " + "b:" + b + " " + "n:" + r++ + " " + "x:" + i + " " + "y:" + forloop2(i));
  }
  console.log("f(x) = sin2x+cos(3+x)");
  let z = 0;
  for (let i = 0; i < 4; i = i + h) {
    let xi = Number(a) + Number(z) * Number(h);
    console.log( "x(i):" + xi  + " " + "a:" + a + " " + "b:" + b + " " + "n:" + z++ + " " + "x:" + i + " " + "y:" + forloop3(i));
  }
  console.log("f(x) = |x+4|^5 ");
  let l = 0;
  for (let i = 0; i < 4; i = i + h) {
    let xi = Number(a) + Number(l) * Number(h);
    console.log( "x(i):" + xi  + " " + "a:" + a + " " + "b:" + b + " " + "n:" + l++ + " " + "x:" + i + " " + "y:" + forloop4(i));
  } 
  console.log("f(x) = 1 - e^x");
  let m = 0;
  for (let i = 0; i < 4; i = i + h) {
    let xi = Number(a) + Number(m) * Number(h);
    console.log( "x(i):" + xi  + " " + "a:" + a + " " + "b:" + b + " " + "n:" + m++ + " " + "x:" + i + " " + "y:" + forloop5(i));
  } 

}

loop(0, 4, 14); 