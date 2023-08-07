import React from "react";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { AnimatedGradient } from "./components/AnimatedGradient";
import {
  AnimatedGradientContactContainer,
  AnimatedGradientMainContainer,
} from "./App.style";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Container>
        <AnimatedGradientMainContainer>
          <AnimatedGradient />
        </AnimatedGradientMainContainer>
        <Header />
        <Main />
        <About />
        <Contact />
        <AnimatedGradientContactContainer>
          <AnimatedGradient />
        </AnimatedGradientContactContainer>
      </Container>
    </div>
  );
}

export default App;
