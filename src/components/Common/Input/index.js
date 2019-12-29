import React, { useEffect } from 'react'
import {Input} from 'components/common/inputs'
import {formActions} from 'reducers/form.reducer'

export const PlainInput = ({
  id,
  fieldStatus = {},
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  validator = ()=>{},
  formDispatch = ()=>{}
}) => {
  const checkForErrors = value => {
    if (required && (!value || value.trim() === '') ) {
      formDispatch(formActions.setError(id, `Please supply this information`))
      return true
    } else if (validator(value)) {
      formDispatch(formActions.setError(id, validator(value)))
      return true
    } else {
      formDispatch(formActions.clearError(id))
      return false
    }
  }

  useEffect(() => {
    if (!checkForErrors(value)) {
      console.log('in use effect for input', required, value)
      formDispatch(formActions.touch(id))
    }
  }, [])

  return (
    <Input 
      id={id}
      name={id}
      type={type}
      value={value}
      placeholder={placeholder}
      hasError={fieldStatus.blurred && fieldStatus.error}
      onBlur={e => {
        if (!fieldStatus.blurred) formDispatch(formActions.blur(id))
        checkForErrors(e.target.value)
      }}
      onChange={e => {
        e.preventDefault()
        if (!fieldStatus.touched) formDispatch(formActions.touch(id))
        checkForErrors(e.target.value)
        onChange(e.target.value)
      }}
    />
  )
}

export const DateInput = ({
  id,
  value,
  fieldStatus,
  onChange,
  required,
  placeholder,
  validator = ()=>{},
  formDispatch
}) => {
  const dateValidator = value => {
    const reg = RegExp(/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g)
    if (!reg.test(value)) {
      return `Please supply the date as DD/MM/YYYY`
    }
    return validator(value)
  }

  return (
    <PlainInput 
      id={id}
      required={required}
      placeholder={placeholder}
      value={value}
      validator={dateValidator}
      onChange={onChange}
      formDispatch={formDispatch}
      fieldStatus={fieldStatus}
    />
  )
}
