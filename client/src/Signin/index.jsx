import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Text,
} from "./SigninElements";
import { signIn } from "API";
import { useHistory } from "react-router";
import { Spinner } from "reactstrap";
import { Link } from "react-router-dom";

import img1 from "images/favicon.png";

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const formSubmitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    await signIn({ email, password })
      .then((res) => {
        setLoading(false);
        history.push("/admin/dashboard");
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div>
        <Spinner animation="border" role="status" className="">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    return (
      <>
        {!loading && (
          <Container>
            <FormWrap>
              <Icon to="/"><img src={img1} height="30px" width="30px"></img>Financify</Icon>
              <FormContent>
                <Form>
                  <FormH1>Sign in to your account</FormH1>
                  <FormLabel htmlFor="for">Email</FormLabel>
                  <FormInput
                    htmlFor="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormLabel htmlFor="for">Password</FormLabel>
                  <FormInput
                    type="password"
                    htmlFor="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FormButton onClick={formSubmitHandler}>Continue</FormButton>
                  <Link to="/signup" className="text-center mt-4">Don't have an account?</Link>
                </Form>
              </FormContent>
            </FormWrap>
          </Container>
        )}
      </>
    );
  }
};

export default Signin;
