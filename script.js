//toggle themes

function swapStyle(sheet){
    document.getElementById('mystylesheet').href = sheet                                       //https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/
}





//calculator
const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".btn-container")
const display = document.querySelector('.output')




//check for button press
keys.addEventListener("click", e => {
    if(e.target.matches('button')){
        //action
        var key = e.target
        var action = key.dataset.action
        var keyContent = key.textContent
        var displayedNum = display.textContent

        
    }
    //if there is no data action attribute it must be a number key
    if(!action){
    console.log('number key!')
    
    }
    //operator data-action, its an operator key
    if(
    action === 'add' ||
    action === 'subtract' ||
    action === 'divide' ||
    action === 'multiply' 
){             
    calculator.dataset.previousKeyType = 'operator'
    console.log('operator key!')
    calculator.dataset.firstValue = displayedNum
    calculator.dataset.operator = action
}
if (action === 'decimal') {
    console.log('decimal key!')
  }
  
  if (action === 'clear') {
    console.log('clear key!')
  }
  
  if (action === 'calculate') {
    console.log('equal key!')
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum

    display.textContent = calculate(firstValue,operator,secondValue)

  }
  //needs action
  if(action === 'delete'){
      console.log('delete key!')
  }
     
// this part checks the previous input then if the current displayedNum is 0 or if the last key
// pressed was an operator it will only display the next button pressed on the screen (n2/second)
    const previousKeyType = calculator.dataset.previousKeyType 

  if(!action){
      if(displayedNum === '0' || previousKeyType === 'operator'){                         //second value cannot be 2 digits - only allows 1 FIX NEEDED
          display.textContent =  keyContent
          if(displayedNum === '1' || displayedNum === '2' || displayedNum === '3' || displayedNum === '4' || displayedNum === '5' || displayedNum === '6' || displayedNum === '7' || displayedNum === '8' || displayedNum === '9' ){
              display.textContent = displayedNum + keyContent
          }
      }else{
        display.textContent = displayedNum + keyContent
      }
  }
  //display decimal
  if(action === 'decimal'){
      display.textContent = displayedNum + '.'
  }
  if (action === 'clear'){
      display.textContent = 0
      calculator.dataset.previousKeyType = 'clear'
  }
  if (action === 'clear'){
      if(key.textContent === 'RESET'){
          calculator.dataset.firstValue = ''
          calculator.dataset.operator = ''
          calculator.dataset.previousKeyType = ''
      } 
      
  display.textContent = 0
      calculator.dataset.previousKeyType = 'clear'
 
  }


})



const calculate = (n1,operator,n2) => {
    let result = ''

    if(operator === 'add'){
        result = parseFloat(n1) + parseFloat(n2)
    }else if (operator === 'subtract'){
        result = parseFloat(n1) - parseFloat(n2)
    }else if (operator === 'multiply'){
        result = parseFloat(n1) * parseFloat(n2)
    }else if (operator === 'divide'){
        result = parseFloat(n1) / parseFloat(n2)
    }

    return result
}


