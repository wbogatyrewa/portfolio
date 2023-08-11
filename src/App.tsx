import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { StarsBackground } from "./components/StarsBackground";

function App() {
  return (
    <>
      <StarsBackground />
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Main />
            </Container>
          }
        />
        <Route path="about" element={<Container></Container>} />
        <Route path="education" element={<Container></Container>} />
        <Route path="skills" element={<Container></Container>} />
        <Route path="work" element={<Container></Container>} />
        <Route path="contact" element={<Container></Container>} />
      </Routes>
    </>
  );
}

export default App;
