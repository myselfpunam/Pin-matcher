 function getPin(){
  const pin = generatePin()
  const pinString = pin + ''
  if(pinString.length === 4){
    return pin
  }
  else{
    return getPin()
  }

 }
 
 function generatePin(){
  const generatePinNumber = Math.round(Math.random()*10000)
  return generatePinNumber
  
 }
 document.getElementById('generate-pin').addEventListener('click', function(){
  const pinValue = getPin()
  const displayPinField = document.getElementById('display-pin')
  displayPinField.value = pinValue
 })

 document.getElementById('calculator-button').addEventListener('click', function(event){
  const typedNumber = event.target.innerText
  const displayNumber = document.getElementById('display-numbers')
   const previousTypedNumber = displayNumber.value
  if(isNaN(typedNumber)){
    if(typedNumber === 'C'){
     displayNumber.value = ''
    }
    else if(typedNumber === '<'){
      const digits = previousTypedNumber.split('')
      digits.pop()
      const remainingDigits = digits.join('')
      displayNumber.value =remainingDigits

    }
  }
  
  else{
    const newTypedNumber = previousTypedNumber + typedNumber
   displayNumber.value = newTypedNumber
  }
   
 })

 document.getElementById('btn-submit').addEventListener('click', function(){


  const showGeneratePin = document.getElementById('display-pin')
  const showGeneratePinValue = showGeneratePin.value
  const showDisplayPin = document.getElementById('display-numbers')
  const showDisplayPinValue = showDisplayPin.value
  showDisplayPin.value =''

  const verificationSuccess = document.getElementById('success')
  const verificationFailure = document.getElementById('failur')
   if(showGeneratePinValue === showDisplayPinValue){
    
    verificationSuccess.style.display = 'block'
    verificationFailure.style.display = 'none'

   }
   else{
    verificationSuccess.style.display = 'none'
    verificationFailure.style.display = 'block'
   }
   
 })