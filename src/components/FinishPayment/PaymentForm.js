import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '../Form/Button';
import { FormWrapper } from './FormWrapper';
import { InputWrapper } from './InputWrapper';
import { DisplayFlex } from './DisplayFlex';
import { useState } from 'react';

export default function PaymentForm() {
  const [payment, setPayment] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  function handlePayment(e) {
    e.preventDefault();
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <Payment>
        <Cards cvc={payment.cvc} expiry={payment.expiry} name={payment.name} number={payment.number} />
        <FormWrapper>
          <InputWrapper>
            <input type="tel" name="number" placeholder="Card Number" onChange={handlePayment} />
            <StyledCard variant="subtitle2" color="textSecondary">
              E.g: 49..., 51..., 36..., 37...
            </StyledCard>
          </InputWrapper>
          <InputWrapper>
            <input type="tel" name="name" placeholder="Name" onChange={handlePayment} />
          </InputWrapper>
          <DisplayFlex>
            <InputWrapper>
              <input type="tel" name="expiry" placeholder="Valid Thru" onChange={handlePayment} />
            </InputWrapper>
            <InputWrapper>
              <input type="tel" name="cvc" placeholder="CVC" onChange={handlePayment} />
            </InputWrapper>
          </DisplayFlex>
        </FormWrapper>
      </Payment>
      <Button type="submit">FINALIZAR PAGAMENTO</Button>
    </>
  );
}
const StyledCard = styled(Typography)`
  margin: 2px !important;
`;

const Payment = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
`;
