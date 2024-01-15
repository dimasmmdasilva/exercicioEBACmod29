import React from 'react';
import Header from './components/Cabecalho';
import Hero from './components/Hero';
import ListaVagas from './containers/ListaVagas';
import { Container } from './styles'
import { GlobalStyle } from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  );
};

export default App;
