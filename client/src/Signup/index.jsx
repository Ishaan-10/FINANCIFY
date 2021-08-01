import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SignupElements'
import { signUp } from '../API';

const Signup = () => {

  const [email,setEmail]=React.useState();
  const [password,setPassword]=React.useState();
  const [name,setName]=React.useState();

  const formSubmitHandler= async (e)=>{
    await signUp({email,password,name}).then(res=>{
      
    }).catch({
      
    })
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>FinTech</Icon>
          <FormContent>
            <Form>
              <FormH1>Sign up for your account</FormH1>
              <FormLabel htmlFor='for'>Your Name</FormLabel>
                <FormInput htmlFor='name' required onChange={(e)=>setName(e.target.value)} />
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required onChange={(e)=>setEmail(e.target.value)} />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required onChange={(e)=>setPassword(e.target.value)} />
              <FormButton type='button' onClick={formSubmitHandler}>Continue</FormButton>
              <Text>Already have an account?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Signup
