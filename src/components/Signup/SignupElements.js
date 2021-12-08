import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index:0;
  overflow: hidden;
  background: linear-gradient(100deg, rgba(1,147,86,1) 0%, rgba(10,201,122,1) 100%);
  background: linear-gradient(100deg, rgba(246, 246, 246,1) 0%, rgba(230, 230, 230,1) 100%);
  
`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%
  }
`

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration:none;
  color: #00b5b5;
  font-weight: 700;
  font-size: 32px;
  /* margin-bottom: -50px; */

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top:8px;
  }
`
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;;
  
  @media screen and (max-width: 480px){
    padding: 10px;
  }
  `
export const Form = styled.form`
  background: #f9f9f9;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index:1;
  display: grid;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius:8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.8);
  box-shadow:0px 4px 10px 1px rgba(0,0,0,0.4);

  @media screen and (max-width:400px){
    padding: 32px;
  }
`
export const FormH1 = styled.h1`
  margin-bottom: 20px;
  color:#101522;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`
export const FormLabel = styled.label`
  margin-bottom: 2px;
  font-size: 14px;
  color: #101522;
`
export const FormInput = styled.input`
  padding: 12px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  font-size: 1rem ;
  color:#101522 ;
  background-color: #f6f6f6;
  border:1px solid rgba(16, 21, 34, 0.5);

  &:focus{
    border: 2px solid #00b5b5;
    outline: none;
  }
`

export const FormButton = styled.button`
  background: #00b5b5;
  padding: 16px 0;
  border:none;
  border-radius: 4px;
  color:#fff;
  font-size: 20px;
  cursor: pointer;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: #00d4d4;
  }
`

export const Text = styled(Link)`
  text-align:center;
  margin-top: 24px;
  color: #101522;
  font-size:15px;
  text-decoration:none;
  &:hover{
    transition: all 0.2s ease-in;
    color:#000;
  }
`