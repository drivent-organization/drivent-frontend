import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '../Form/Button';
import { FormWrapper } from './FormWrapper';
import { InputWrapper } from './InputWrapper';
import { DisplayFlex } from './DisplayFlex';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <Payment>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <FormWrapper>
            <InputWrapper>
              <input
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <StyledCard variant="subtitle2" color="textSecondary">
                E.g: 49..., 51..., 36..., 37...
              </StyledCard>
            </InputWrapper>
            <InputWrapper>
              <input
                type="tel"
                name="name"
                placeholder="Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </InputWrapper>
            <DisplayFlex>
              <InputWrapper>
                <input
                  type="tel"
                  name="expiry"
                  placeholder="Valid Thru"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </InputWrapper>
              <InputWrapper>
                <input
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </InputWrapper>
            </DisplayFlex>
          </FormWrapper>
        </Payment>
        <Button type="submit">FINALIZAR PAGAMENTO</Button>
      </>
    );
  }
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
