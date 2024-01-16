import styled from 'styled-components';
import { corPrincipal, corSecundaria } from '../../styles';

export type Props = {
  aoPesquisar: (termo: string) => void;
};

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`;

export const StyledInput = styled.input`
  padding: 0 16px;
  outline-color: ${corPrincipal};
  border: none;
  height: 40px;
`;

export const StyledButton = styled.button`
  background-color: ${corPrincipal};
  border: 1px solid ${corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${corSecundaria};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darken(${corPrincipal}, 10%);
  }
`;
