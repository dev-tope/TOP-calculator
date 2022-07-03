//UI
const body = document.querySelector("#body-div");
const screen = document.querySelector('.screen-div');
const btnDiv = document.querySelector('.btn-div');
const displayDiv = document.querySelector('.display-div');
const clearBtn = document.querySelector('.clear-btn');
const numBtn = document.querySelectorAll('.num');
const operatorBtn = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals');




//operations

let operationArr = []

function add (a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function display(value){
    displayDiv.innerText = value;
}

function cls(){
    displayDiv.innerText = "";
    firstValue = "";
    secondValue = "";
    operationArr = [];
}

function clearArr(array){
    for (let i = 0; i <= array.length + 1; i++){
        operationArr.pop();
    }
}

function equalsFn(){
    operationArr.push(secondValue);
    operate();
    clearArr(operationArr);
    operationArr.push(result);
    secondValue = "";
    firstValue = result;
    console.log(operationArr)
}



//events

clearBtn.addEventListener('click', function(){
    cls()
})

displayDiv.innerText = ""

let firstValue = "";
let secondValue = "";




// numBtn.forEach(btn => {
//     btn.addEventListener('click', function(){
//        if(displayDiv.innerText.length <= 12){
//            firstValue += btn.innerText; 
//            displayDiv.innerText = firstValue;
//        } else {
//             alert('Screen has reached limit')
//        }
       
//     })
// });

numBtn.forEach(btn =>{
    btn.addEventListener('click', function(){
        if(displayDiv.innerText.length <=12){
        if((operationArr.length === 0 && (!(operationArr.includes('+') || operationArr.includes('-') || operationArr.includes('x') || operationArr.includes('/'))))){
            firstValue += btn.innerText;
            display(firstValue);
        } else if (operationArr.length === 1){
            firstValue = operationArr[0].toString()
            firstValue += btn.innerText;
        } else {
            secondValue += btn.innerText
            display(secondValue);
        }
        }
    })
})



operatorBtn.forEach(btn => {
    btn.addEventListener('click', function(e){
        //checks if operationArr is empty
        if(typeof operationArr[0] === 'undefined'){
            operationArr.push(firstValue)
            console.log(operationArr)
            operationArr.push(e.target.innerText)
            displayDiv.innerText = ""      
        } else if (operationArr.length >= 1){
            equalsFn()
            operationArr.push(e.target.innerText)
        }else {
            operationArr.push(e.target.innerText)
            displayDiv.innerText = "";    
        }
    })
})

equalsBtn.addEventListener('click', function(){
    if (operationArr.length === 0){
        return operationArr;
    } else {
        equalsFn()
    }
})

let result;
function operate(){
    switch (operationArr[1]){
        case '+':
            result = add(parseInt(operationArr[0]), parseInt(operationArr[2]))
            return (display(result))
            break;
        case  '-':
            result = subtract(parseInt(operationArr[0]), parseInt(operationArr[2]));
            return (display(result))
            break;
        case 'x':
            result = multiply(parseInt(operationArr[0]), parseInt(operationArr[2]))
            return (display(result))
            break;
        case '/':
            result = divide(parseInt(operationArr[0]), parseInt(operationArr[2]))
            return (display(result))
            break;
    }
    
}