import { styled } from "styled-components";

export const Button = styled.button`
  background-color: #313f57;
  border-radius: 0.5rem;
  border: 0.125rem solid #1f2836;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin: 1rem 0.8rem;
  padding: 0.7rem 2rem;
  text-align: center;
  transition: background-color 300ms linear;
  -webkit-transition: background-color 300ms linear;
  -ms-transition: background-color 300ms linear;
  -o-transition: background-color 300ms linear;
  -ms-transition: background-color 300ms linear;

  &:hover {
    background-color: #1f2836;
    transition: background-color 300ms linear;
    -webkit-transition: background-color 300ms linear;
    -ms-transition: background-color 300ms linear;
    -o-transition: background-color 300ms linear;
    -ms-transition: background-color 300ms linear;
  }

  &:focus-visible {
    outline: none !important;
    border-color: #d8b26e;
    box-shadow: 0 0 10px #cfcfcf;
  }

  &:active {
    transform: scale(0.95);
    transition: transform 50ms linear;
    -webkit-transition: transform 50ms linear;
    -ms-transition: transform 50ms linear;
    -o-transition: transform 50ms linear;
    -ms-transition: transform 50ms linear;
  }
`;

export const ButtonSecondary = styled(Button)`
  color: #000;
  background-color: #e8e8e8;
  border-color: #1f2836;

  &:hover {
    background-color: #cfcfcf;
  }
`;
