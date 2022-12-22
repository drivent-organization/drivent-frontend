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
import useSavePayment from '../../hooks/api/useSavePayment';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function PaymentForm({ ticketId, setIsPaid }) {
  console.log('🚀 passa aqui por favor meu jesus ~ file: PaymentForm.js:16 ~ PaymentForm ~ setIsPaid', setIsPaid);
  const navigate = useNavigate();
  const [payment, setPayment] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });
  const { savePaymentLoading, savePayment } = useSavePayment();
  function handlePayment(e) {
    e.preventDefault();
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  }
  function validateCreditCardInformation({ payment }) {
    const numberPattern =
      '^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$';
    const expiryPattern = '^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$';
    const cvcPattern = '^[0-9]{4}$';
    const { cvc, expiry, name, number } = payment;
    if (!cvc || !expiry || !name || !number) {
      toast('Necessário preencher todos os dados!');
      return;
    }

    if (!number.match(numberPattern)) {
      toast('Insira um número de cartão válido');
      return;
    }

    if (!expiry.match(expiryPattern)) {
      toast('Insira uma data de validade válida');
      return;
    }

    if (!cvc.match(cvcPattern)) {
      toast('Insira um cvc válido');
      return;
    }
    return;
  }
  async function payTicket(payment, ticketId) {
    validateCreditCardInformation({ payment });
    const body = {
      ticketId: Number(ticketId),
      cardData: {
        issuer: String(1), //TODO
        number: Number(payment.number),
        name: payment.name,
        expirationDate: payment.expiry,
        cvv: Number(payment.cvc),
      },
    };

    try {
      await savePayment(body);
      setPayment({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
      });
      toast('Informações salvas com sucesso!');
      setIsPaid(true);
    } catch (err) {
      console.log('🚀 passa aqui por favor meu jesus ~ file: PaymentForm.js:84 ~ payTicket ~ err', err);
      toast('Não foi possível salvar suas informações!');
    }
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
      <Button type="submit" onClick={() => payTicket(payment, ticketId)} disabled={savePaymentLoading}>
        FINALIZAR PAGAMENTO
      </Button>
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
