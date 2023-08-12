// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  ChildContainer,
  Heading,
  Para,
  PasswordInput,
  Alert,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  //    const showErrorMessage = password.length < 8

  const onChangePass = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <ChildContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangePass}
        />
        <Alert>
          {password.length > 8
            ? ''
            : 'Your password must be at least 8 characters'}
        </Alert>
        {/* {showErrorMessage && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )} */}
      </ChildContainer>
    </MainContainer>
  )
}

export default PasswordValidator
