// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  PasswordValidatorContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  console.log('fhfh')
  const [password, setPassword] = useState('')

  const showErrorMsg = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordValidatorContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {showErrorMsg && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordValidatorContainer>
    </MainContainer>
  )
}

export default PasswordValidator
