//UI
const body = document.querySelector("#body-div");
const screen = document.querySelector('.screen-div');
const btnDiv = document.querySelector('.btn-div');
const displayDiv = document.querySelector('.display-div');
const clearBtn = document.querySelector('.clear-btn');
const numBtn = document.querySelectorAll('.num');
const operatorBtn = document.querySelectorAll('.operator')





//operations

const operationArr = []

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

function operate (operator, a, b){
    
}

function cls(){
    displayDiv.innerText = ""
}

// function display(number){
//     let number = num.innerText
// }


//events

clearBtn.addEventListener('click', function(){
    cls()
})

displayDiv.innerText = ""

numBtn.forEach(btn => {
    btn.addEventListener('click', function(){ 
        if(displayDiv.innerText.length <= 12){
            displayDiv.innerText = displayDiv.innerText + btn.innerText;
        } else {
            alert('screen has reached max input')
        }
    })
});


operatorBtn.forEach(btn => {
    btn.addEventListener('click', function(e){
        operationArr.push(displayDiv.innerText)
        operationArr.push(e.target.innerText)
        console.log(operationArr)
    } )
})
