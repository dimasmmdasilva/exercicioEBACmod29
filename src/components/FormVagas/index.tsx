import React from "react";
import { FormEvent, useState } from "react";
import { Props, StyledButton, StyledForm, StyledInput } from "./FormVagas";

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('');

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLocaleLowerCase());
  };

  return (
    <form onSubmit={aoEnviarForm}>
    <StyledForm>
      <StyledInput>
      <input placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search" />
      </StyledInput>
      <StyledButton>
        <button type="submit">Pesquisar</button></StyledButton>
    </StyledForm>
    </form>
  );
};

export default FormVagas;
