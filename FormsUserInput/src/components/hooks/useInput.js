import { useState } from 'react'
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = validateValue(enteredValue)
  const hasError = !valueIsValid && isTouched

  const ValueChangeHandler = (event) => {
    setEnteredValue(event.target.value)
  }

  const InputBlurHandler = (event) => {
    setIsTouched(true)
  }

    const reset=()=>{
        setEnteredValue('')
        setIsTouched(false)
    }
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    ValueChangeHandler,
    InputBlurHandler,
    reset
  }
}
export default useInput
