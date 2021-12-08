import React from 'react'
import { Container, FormInput, FormLabel, Icon, FormH1, FormWrap, FormContent,FormButton,Form,Text } from './SignupElements'

const SignUp = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/" >BankEase</Icon>
        <FormContent>
          <Form action='#'>
            <FormH1>Create an account</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email'  required />
            <FormLabel htmlFor='for'>Name</FormLabel>
            <FormInput type='name' 
            required />
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput type='password'
            required />
            <FormButton type='submit'>Sign Up</FormButton>
            <Text to='/signin'>Already have an account? login</Text>
          </Form>
        </FormContent>
      </FormWrap>
      
    </Container>
  )
}

export default SignUp
