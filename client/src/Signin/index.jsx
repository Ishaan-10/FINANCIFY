import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SigninElements'
import { signIn } from 'API';

const Signin = () => {

  const [email,setEmail]=React.useState();
  const [password,setPassword]=React.useState();

  const formSubmitHandler= async (e)=>{
    e.preventDefault()
    await signIn({email,password}).then(res=>{
      
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
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required onChange={(e)=>setEmail(e.target.value)} />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type="password" htmlFor='password' required onChange={(e)=>setPassword(e.target.value)} />
              <FormButton onClick={formSubmitHandler}>Continue</FormButton>
              {/* <Text>Forgot password</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Signin
