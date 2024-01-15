import styled from "styled-components";

export const VagasContainer = styled.div`
  margin-top: 32px;
`;

export const VagasList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
