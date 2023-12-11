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
  if(numberOne != null && numberTwo === null) {
    let delArray = String(numberOne).split("");
    let deleted = delArray.splice(0, delArray.length -1)
    numberOne = Number(deleted.join(""))
    result.innerHTML = numberOne
  }
  else if (numberOne != null  && operation != null && numberTwo !=null && res === 0) {
    let delArray = String(numberTwo).split("");
    let deleted = delArray.splice(0, delArray.length -1)
    numberTwo = Number(deleted.join(""))
    result.innerHTML = numberTwo
  }
  else if (numberOne != null  && operation != null && numberTwo !=null && res != 0){
    let delArray = String(res).split("");
    let deleted = delArray.splice(0, delArray.length -1)
    res = Number(deleted.join(""))
    result.innerHTML = res
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
      console.log(typeof(element.target.value), "add number 1")
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
      console.log(test,numberOne, "add number 1")
      numberOne = Number(test);
      result.innerHTML = test;
    }
    else if(numberOne != null && operation !== null && numberTwo === null && (element.target.value !== "/" 
    || element.target.value !== "-" || element.target.value !== "*" || element.target.value !== "+") && element.target.value !== "="){
      console.log(typeof(element.target.value), "number 2")
      numberTwo =  Number(element.target.value);
      result.innerHTML = numberTwo;
    }
    else if(numberOne !== null && operation !== null && numberTwo !== null && (element.target.value !== "/" 
    || element.target.value !== "-" || element.target.value !== "*" || element.target.value !== "+") && element.target.value !== "=" ){
      let test1= String(numberTwo).split("").concat(element.target.value).join("");
      console.log(test1 ,"add number 2")
      numberTwo = Number(test1);
      console.log(numberTwo,"add number 2")
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


//dot function 
const addDot = (element) => {
  element.preventDefault()
  console.log("before")
  let valDot = "."
  let arrDot = [".", "  "];

    if(numberOne != null && numberTwo === null){
      //
      let testNumber  = String(numberOne).split("").includes(".") ? numberOne: String(numberOne).split("").concat(valDot).join("");
      numberOne = testNumber 
      console.log(numberOne, testNumber, typeof(testNumber), "dot 1")
      result.textContent = testNumber
    }
    else if(numberOne != null && numberTwo != null && operation != null){
      //
      let testNumber  = String(numberTwo).split("").includes(".") ? numberTwo :String(numberTwo).split("").concat(valDot).join("");
      numberTwo = testNumber
      console.log(numberTwo, testNumber, typeof(testNumber))
      result.textContent = testNumber
    }
    else if(numberOne != null && numberTwo != null && operation != null && res !== 0 && preOp != null){
      //
      let testNumber  = String(res).split("").includes(".") ? res : String(res).split("").concat(valDot).join("");
      res = testNumber
      console.log(res, testNumber, typeof(testNumber))
      result.textContent = testNumber
    }
  }
  dot.addEventListener("click" , (e) => {
    addDot(e);
})

result.innerHTML = res
//const  all = document.querySelectorAll(".numbers");




