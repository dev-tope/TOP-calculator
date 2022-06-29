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
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}



function cls(){
    displayDiv.innerText = "";
    firstValue = "";
    secondValue = "";
    operationArr = [];
}

// function display(number){
//     let number = num.innerText
// }


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
        if(!(operationArr.includes('+') || operationArr.includes('-') || operationArr.includes('x') || operationArr.includes('/'))){
            firstValue += btn.innerText;
            displayDiv.innerText = firstValue;
        } else {
            secondValue += btn.innerText
            displayDiv.innerText = secondValue;
        }
        }
    })
})



operatorBtn.forEach(btn => {
    btn.addEventListener('click', function(e){
        operationArr.push(displayDiv.innerText)
        operationArr.push(e.target.innerText)
        displayDiv.innerText = ""   
    } )
})

equalsBtn.addEventListener('click', function(){
    operationArr.push(secondValue);
    console.log(operationArr)
    operate()
})

function operate(){
    let result;
    if(operationArr[1] = '+'){
        result = add(parseInt(operationArr[0]), parseInt(operationArr[2]))
        return (displayDiv.innerText = result)
    } else if (operationArr[1] = '-'){
        result = subtract(parseInt(operationArr[0])), parseInt(operationArr[2])
        return (displayDiv.innerText = result)
    } else if (operationArr[1] = 'x'){
        result = multiply(parseInt(operationArr[0]), parseInt(operationArr[2]))
        return (displayDiv.innerText = result)
    } else if (operationArr[1] = '/'){
        result = divide(parseInt(operationArr[0]), parseInt(operationArr[2]))
        return (displayDiv.innerText = result)
    }
}