import React from "react";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { AnimatedGradient } from "./components/AnimatedGradient";
import { AnimatedGradientContainer } from "./App.style";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Container>
        <AnimatedGradientContainer>
          <AnimatedGradient />
        </AnimatedGradientContainer>
        <Header />
        <Main />
      </Container>
    </div>
  );
}

export default App;
