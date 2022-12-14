const numberBtn = document.querySelectorAll('.number-btn')
const AC = document.getElementById('ac')
const plusOrMinus = document.getElementById('plus-or-minus')
const operationBtn = document.querySelectorAll('.operations')
const equals = document.getElementById('equals')
const currentOperand = document.querySelector('#current-operand span')
const previousOperand = document.querySelector('#previous-operand span')

let currentOperation = ''

allClear()

// Clear the calculator
function allClear () {
  currentOperand.textContent = ''
  previousOperand.textContent = ''
  currentOperation = ''
}

// Append number to screen when number button pressed
function appendNumber (number) {
  const x = currentOperand.textContent += number
  if (
    x.toString[0] === '0' &&
    x.toString[1] === '0'
  ) {
    x.toString = '0'
  }
}

// Update operation
function updateOperation (operation) {
  currentOperation = operation
  if (currentOperand.textContent !== '' && previousOperand.textContent !== '') {
    return
  }
  if (currentOperand.textContent !== '') {
    previousOperand.textContent = currentOperand.textContent
    currentOperand.textContent = ''
  }
}

// Perform calculation and update display
function calculate () {
  let result = ''
  const b = Number(currentOperand.textContent)
  const a = Number(previousOperand.textContent)
  console.log(a, b, currentOperation)

  switch (currentOperation) {
    case 'plus':
      result = a + b
      break
    case 'minus':
      result = a - b
      break
    case 'times':
      result = a * b
      break
    case 'division':
      result = a / b
      break
    case 'percentage':
      result = a * (b / 100)
      break
  }
  currentOperand.textContent = result
  previousOperand.textContent = ''
  currentOperation = 'equals'
}

// Change the sign of currentOperand
function changeSign () {
  const b = Number(currentOperand.textContent)
  if (b >= 0) {
    currentOperand.textContent = '-' + currentOperand.textContent
  } else {
    currentOperand.textContent = currentOperand.textContent.substring(1)
  }
}

// EVENT LISTENERS
AC.addEventListener('click', allClear)

// number buttons
numberBtn.forEach((button) => {
  button.addEventListener('click', () => {
    if (currentOperation === 'equals') {
      allClear()
      appendNumber(button.textContent)
    } else {
      appendNumber(button.textContent)
    }
  })
})

// operation buttons
operationBtn.forEach((button) => {
  button.addEventListener('click', () => {
    updateOperation(button.id)
  })
})

// equals button
equals.addEventListener('click', () => {
  calculate()
})

// plusorMinus button
plusOrMinus.addEventListener('click', () => {
  changeSign()
})
