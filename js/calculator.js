const result = document.querySelector("#result");
const numbers = document.querySelectorAll(".numbers");
const div = document.querySelector("#divader");
const mult = document.querySelector("#multiple");
const subst = document.querySelector("#substraction");
const add = document.querySelector("#add");
const dot = document.querySelector("#dot");
const equal = document.querySelector("#equal");

numbers.forEach((element) => {
    element.addEventListener("click", (e) => {
        oper(e);
    })
})

let numberOne = null;
let operation = null;
let numberTwo = null;
let res = 0;

const oper = (element) => {
  element.preventDefault(); 
  if(numberOne === null && res === 0){
    numberOne = res === 0 ? Number(element.target.value): res;
    result.innerHTML = numberOne;
  }
  else if (numberOne != null && operation === null){
      operation = element.target.value;
      result.innerHTML = `${numberOne} ${operation}`;
  }
  else if(numberOne != null && operation != null){
    numberTwo = Number(element.target.value);
    switch(operation){
      case "+":
       (res = numberOne + numberTwo);
      console.log(res,numberOne,numberTwo)
      result.innerHTML = res;
      numberOne = res;
      numberTwo = null;
      operation = null;
      break;
      case "-":
       (res = numberOne - numberTwo); 
      result.innerHTML = res;
      numberOne = res;
      numberTwo = null;
      operation = null;
      break;
      case "/":
      (res = numberOne / numberTwo);
      result.innerHTML = res;
      numberOne = res;
      numberTwo = null;
      operation = null;
      break;
      case "*":
      (res = numberOne * numberTwo);
      result.innerHTML = res
      numberOne = res;
      numberTwo = null;
      operation = null;
      break;
  }
  }
  
    

}
result.innerHTML = res
//const  all = document.querySelectorAll(".numbers");




