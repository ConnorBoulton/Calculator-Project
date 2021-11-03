class CalcFunctions {
    constructor(prevOp, currentOp) { // The constructor will be the previous operation and current operation.
      this.prevOp = prevOp
      this.currentOp = currentOp
      this.allClear()
    }
    
    updateDisplay() { // This will update the display of the output
      this.currentOp.innerText = this.getDisplayNumber(this.currentOperation)
      if (this.operation != null) {
       this.prevOp.innerText = `${this.getDisplayNumber(this.previousOperation)} ${this.operation}`
      } else {
        this.prevOp.innerText = ''
      }
    }
  
    numAppend(num) { //This stops from being able to add more than one decimal to the equation 
      if (num === '.' && this.currentOperation.includes('.')) return
      this.currentOperation = this.currentOperation.toString() +num.toString()
    }
  
    operationSelect(operation) { // This function will move the current operation to the previous operation when desired
      if (this.currentOperation === '') return 
      if (this.previousOperation !== '') { // This will check to see which operation was chosen by invoking the calculate function
        this.calculate()
      }
      this.operation = operation
      this.previousOperation = this.currentOperation 
      this.currentOperation = ''
    }
  
    calculate() { // The actual computing of a given operation
      let computation // This will store the results of the computation
      const prev = parseFloat(this.previousOperation) // We need to turn the strings into numbers 
      const current = parseFloat(this.currentOperation)
      if (isNaN(prev) || isNaN(current)){ 
      return} //If the previous number is NaN then end it by returning
      switch (this.operation) { // The switch case is similar to many if else statments by returning the result if the statment matches
        case '+': // In this case
          computation = prev + current //Do this
          break // Dont go any further
        case '-':
          computation = prev - current
          break
        case 'x':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:
          return
      }
      this.currentOperation = computation // This allows the operation to equal the computation
      this.operation = '' // Sets the operation symbol to blank after calculated
      this.previousOperation = '' // Clears the prev operation to an empty string
    }
  
    getDisplayNumber(number) { // Splits the number into an two parts, integer and into a decimal
      const stringNumber = number.toString()
      const intDigits = parseFloat(stringNumber.split('.'))
      const decimalDigits = stringNumber.split('.')[1]
      let intDisplay
      if (isNaN(intDigits)) { 
        intDisplay = ''
      } else {
        intDisplay = 
        intDigits.toLocaleString('en', { maximumFractionDigits: 0 }) // Specifies a string with language of english
        // and sets the how far the decimal digits can go after the decimal seperator   
      }
      if (decimalDigits != null) {
        return `${intDisplay}.${decimalDigits}`
      } else {
        return intDisplay
      }
    }

    delete() { // Deletes the previous number by using the slice method
      this.currentOperation = this.currentOperation.toString()
      this.currentOperation = this.currentOperation.slice(0, -1)
    }

    allClear() { // clears the display by setting the display to an empty string
      this.currentOperation = ''
      this.previousOperation = ''
      this.operation = undefined
    }

}

const prevOp = document.querySelector('[data-previous-operand]')
const currentOp = document.querySelector('[data-current-operand]')
  
const numberButtons = document.querySelectorAll('.number')

const operationButtons = document.querySelectorAll('.operation')

const deleteButton = document.querySelector('.del')
const equalsButton = document.getElementById('equals')
const allClearButton = document.getElementById('all-clear')

  
const calculator = new CalcFunctions(prevOp, currentOp)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.numAppend(button.innerText)
      calculator.updateDisplay()
    })
})
  
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.operationSelect(button.innerText)
      calculator.updateDisplay()
    })
})
  
equalsButton.addEventListener('click', button => {
    calculator.calculate()
    calculator.updateDisplay()
})
  
allClearButton.addEventListener('click', button => {
    calculator.allClear()
    calculator.updateDisplay()
})
  
deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if(keyName === '1') {

    const num1 = document.getElementById("number-1")
    calculator.numAppend(num1.innerText)
    calculator.updateDisplay()
  }

  if(keyName === '2') {

    const num2 = document.getElementById("number-2")
    calculator.numAppend(num2.innerText)
    calculator.updateDisplay()
  }

  if(keyName === '3') {

    const num3 = document.getElementById("number-3")
    calculator.numAppend(num3.innerText)
    calculator.updateDisplay()
  }

  if(keyName === '4') {

    const num4 = document.getElementById("number-4")
    calculator.numAppend(num4.innerText)
    calculator.updateDisplay()
  }

  if(keyName === '5') {

    const num5 = document.getElementById("number-5")
    calculator.numAppend(num5.innerText)
    calculator.updateDisplay()
  }

  if(keyName === '6') {

    const num6 = document.getElementById("number-6")
    calculator.numAppend(num6.innerText)
    calculator.updateDisplay()
  }

  if(keyName === '7') {

    const num7 = document.getElementById("number-7")
    calculator.numAppend(num7.innerText)
    calculator.updateDisplay()
  }

  if(keyName === '8') {

    const num8 = document.getElementById("number-8")
    calculator.numAppend(num8.innerText)
    calculator.updateDisplay()
  }

  if(keyName === '9') {

    const num9 = document.getElementById("number-9")
    calculator.numAppend(num9.innerText)
    calculator.updateDisplay()
  }

  if(keyName === '0') {

    const num0 = document.getElementById("number-0")
    calculator.numAppend(num0.innerText)
    calculator.updateDisplay()
  }

  if(event.ctrlKey && keyName === 'c') {
    
    calculator.allClear()
    calculator.updateDisplay()
  }

  if(event.keyCode == 8){

    const backspace = document.querySelector('.del')
    calculator.delete()
    calculator.updateDisplay()
  }

  if(event.keyCode == 13){

  const enter = document.getElementById('equals')
  calculator.calculate()
  calculator.updateDisplay()
  }

  if(event.keyCode == 107 || event.keyCode == 187){

  const plusSign = document.getElementById('plus-sign')
  calculator.operationSelect('+')
  calculator.updateDisplay()
  }

  if(event.keyCode == 109 || event.keyCode == 189){
   
  const minusSign = document.getElementById('minus-sign')
  calculator.operationSelect('-')
  calculator.updateDisplay()  
  }

  if(event.keyCode == 106 || keyName == "x"){

  const multipySign = document.getElementById('multiply-sign')
  calculator.operationSelect('x')
  calculator.updateDisplay()
  }

  if(event.keyCode == 111 || event.keyCode == 191){
  
  const divideSign = document.getElementById('divide-sign')
  calculator.operationSelect('÷')
  calculator.updateDisplay()
  }

  if(event.keyCode == 190 || event.keyCode == 110){

  const decimal = document.getElementById('decimal')
  calculator.numAppend(decimal.innerText)
  calculator.updateDisplay()
  }
})

const toggleBtn = document.getElementById('checkbox')
const toggleText = document.getElementById("toggle-text")

toggleBtn.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

function changeText(e){
  e.preventDefault()
  
  if(toggleText.innerHTML === "Try Dark Theme!"){
  toggleText.innerHTML = "Try Light Theme!"
  }
  else if(toggleText.innerHTML === "Try Light Theme!"){
    toggleText.innerHTML = "Try Dark Theme!"
  }
}

toggleBtn.addEventListener('change', changeText)