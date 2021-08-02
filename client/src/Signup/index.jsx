import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SignupElements'
import { signUp } from '../API';
import { useHistory } from "react-router";
import { Spinner } from "reactstrap";

const Signup = () => {

  const [email,setEmail]=React.useState();
  const [password,setPassword]=React.useState();
  const [name,setName]=React.useState();
  const [loading, setLoading] = React.useState(false);

  const history = useHistory();

  const formSubmitHandler= async (e)=>{
    setLoading(true)
    await signUp({email,password,name}).then(res=>{
      setLoading(false);
      history.push("/admin/dashboard");
    }).catch(e=>{
      console.log(e.message)
      setLoading(false);
    })
  }


  return (
    <>
      {loading && (
        <div>
          <Spinner animation="border" role="status" className="">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {!loading && <Container>
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
      </Container>}
    </>
  )
}

export default Signup
