import useInput from './hooks/useInput'

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    ValueChangeHandler: firstNameChangeHandler,
    InputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== '')

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    ValueChangeHandler: lastNameChangeHandler,
    InputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    ValueChangeHandler: emailChangeHandler,
    InputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes('@'))

  let formIsValid = false
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault()
    firstNameReset()
    lastNameReset()
    emailReset()
  }
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">E-Mail Address</label>
          <input type="text" id="name" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
