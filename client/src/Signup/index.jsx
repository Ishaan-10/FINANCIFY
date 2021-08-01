import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SignupElements'

const Signup = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>FinTech</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign up for your account</FormH1>
              <FormLabel htmlFor='for'>Your Name</FormLabel>
                <FormInput htmlFor='name' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Already have an account?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Signup
