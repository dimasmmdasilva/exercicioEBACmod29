import React from "react";
import { VagaContainer, VagaTitulo, VagaLink } from "./Vaga";

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const Vaga: React.FC<Props> = (props) => (
  <VagaContainer>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink>Ver detalhes e candidatar-se</VagaLink>
  </VagaContainer>
);

export default Vaga;
