import React from "react";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { AnimatedGradient } from "./components/AnimatedGradient";
import { AnimatedGradientContainer } from "./App.style";
import { Header } from "./components/Header";
import { About } from "./components/About";

function App() {
  return (
    <div className="App">
      <Container>
        <AnimatedGradientContainer>
          <AnimatedGradient />
        </AnimatedGradientContainer>
        <Header />
        <Main />
        <About />
      </Container>
    </div>
  );
}

export default App;
