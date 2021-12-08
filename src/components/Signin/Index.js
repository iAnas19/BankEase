import React from 'react'
import { Container, FormInput, FormLabel, Icon, FormH1, FormWrap, FormContent,FormButton,Form,Text } from '../Signup/SignupElements'

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/" >BankEase</Icon>
        <FormContent>
          <Form action='#'>
            <FormH1>Log in to your account</FormH1>
            {/* <FormLabel htmlFor='for'>Email</FormLabel> */}
            <FormInput type='email'
            placeholder='Your Email Address' required />
            {/* <FormLabel htmlFor='for'>Password</FormLabel> */}
            <FormInput type='password' placeholder='Password'
            required />
            <FormButton type='submit'>Log in</FormButton>
            <Text to='/'>Forgot password?</Text>
            <Text to='/signup'>Create an account</Text>
          </Form>
        </FormContent>
      </FormWrap>
      
    </Container>
  )
}

export default SignIn
