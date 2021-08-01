import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SigninElements'

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>FinTech</Icon>
          <FormContent>
            <Form>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type="password" htmlFor='password' required />
              <FormButton >Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Signin
