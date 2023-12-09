const result = document.querySelector("#result");
const result1 = document.querySelector("#result1");
const numbers = document.querySelectorAll(".numbers");
const dot = document.querySelector("#dot");
const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");

//add event all numbers and operators
numbers.forEach((element) => {
    element.addEventListener("click", (e) => {
        oper(e);
    })
})
// clean function
const clean = (e) => {
  numberOne = null;
  operation = null;
  numberTwo = null;
  preOp = null;
  res = 0;
  result.innerHTML = res;
  result1.innerHTML = "";
}
// add clean function
 clear.addEventListener("click" , () => {
    clean();
 })
// del function 
const deleting = () => {
  if(res !== 0) {
    let deleted = String(res).split("").pop();
    res = Number(deleted.join(""))
  }
}
del.addEventListener("click", () => {
    deleting();
})

// declarations for oper function
let numberOne = null;
let operation = null;
let numberTwo = null;
let preOp = null;
let res = 0;

// principal function
const oper = (element) => {
  element.preventDefault();  
    if(numberOne === null && res === 0 && element.target.value !== "="){
      console.log(typeof(element.target.value))
      numberOne = res === 0 ? Number(element.target.value): res;
      result.innerHTML = numberOne;
    }
    else if (numberOne != null && operation === null && element.target.value === "/" 
    || element.target.value === "-" || element.target.value === "*" || element.target.value === "+" && element.target.value !== "=" && numberTwo === null){
      operation = element.target.value;
      result1.innerHTML = `${numberOne} ${operation}`;
      result.innerHTML = `${numberOne}`
    }
    else if(numberOne != null && operation === null && numberTwo === null && (element.target.value !== "/" 
    || element.target.value !== "-" || element.target.value !== "*" || element.target.value !== "+")&& element.target.value !== "=" ){
      let test= String(numberOne).split("").concat(element.target.value).join("");
      console.log(test)
      numberOne = Number(test);
      result.innerHTML = numberOne;
    }
    else if(numberOne != null && operation !== null && numberTwo === null && (element.target.value !== "/" 
    || element.target.value !== "-" || element.target.value !== "*" || element.target.value !== "+") && element.target.value !== "="){
      console.log(typeof(element.target.value))
      numberTwo =  Number(element.target.value);
      result.innerHTML = numberTwo;
    }
    else if(numberOne !== null && operation !== null && numberTwo !== null && (element.target.value !== "/" 
    || element.target.value !== "-" || element.target.value !== "*" || element.target.value !== "+") && element.target.value !== "=" ){
      let test1= String(numberTwo).split("").concat(element.target.value).join("");
      console.log(test1)
      numberTwo = Number(test1);
      console.log(numberTwo)
      result.innerHTML = numberTwo;
    }       
    else if(numberOne != null && operation != null && numberTwo != null && element.target.value === "=" ){ 
      switch(operation){
          case "+":
            (res = numberOne + numberTwo);
            preOp = `${numberOne} ${operation} ${numberTwo}`
            result1.innerHTML = `${preOp} =`
            result.innerHTML = res;
            numberOne = res;
            numberTwo = null;
            operation = null;
          break;
          case "-":
            (res = numberOne - numberTwo);
            preOp = `${numberOne} ${operation} ${numberTwo}`
            result1.innerHTML = `${preOp} =`
            result.innerHTML = res;
            numberOne = res;
            numberTwo = null;
            operation = null;
          break;
          case "/":
            (res = numberOne / numberTwo);
            preOp = `${numberOne} ${operation} ${numberTwo}`
            result1.innerHTML = `${preOp} =`
            result.innerHTML = res;
            numberOne = res;
            numberTwo = null;
            operation = null;
          break;
          case "*":
            (res = numberOne * numberTwo);
            preOp = `${numberOne} ${operation} ${numberTwo}`
            result1.innerHTML = `${preOp} =`
            result.innerHTML = res;
            numberOne = res;
            numberTwo = null;
            operation = null;
          break;
              }
            }
}
result.innerHTML = res
//const  all = document.querySelectorAll(".numbers");




