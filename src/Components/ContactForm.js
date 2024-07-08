import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  return (
    <FormSection id="contact">
      <h1>Contact Me</h1>
      <form>
        <FormContent>
          <InputContainer>
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="name" id="name" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="message">Message</Label>
            <TextArea name="message" id="message"></TextArea>
          </InputContainer>
          <Button type="submit">Send</Button>
        </FormContent>
      </form>
    </FormSection>
  );
};

const FormSection = styled.section`
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
  max-width: 600px;
  margin: 2rem auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #343a40;
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 25px;
`;

const Input = styled.input`
  width: 99%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  min-height: 50px;
`;

const TextArea = styled.textarea`
  width: 99%;
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  min-height: 150px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #ee6c4d;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 476;
  font-style: normal;
  font-variation-settings:
  "slnt" 0;

  &:hover {
    background-color: #ee6c4d;
  }
`;

export default ContactForm;
