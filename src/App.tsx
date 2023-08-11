import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { StarsBackground } from "./components/StarsBackground";
import { AboutPage } from "./components/Pages/AboutPage";
import { Contact } from "./components/Pages/ContactPage";

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
        <Route
          path="about"
          element={
            <Container>
              <AboutPage />
            </Container>
          }
        />
        <Route path="education" element={<Container></Container>} />
        <Route path="skills" element={<Container></Container>} />
        <Route path="work" element={<Container></Container>} />
        <Route
          path="contact"
          element={
            <Container>
              <Contact />
            </Container>
          }
        />
      </Routes>
    </>
  );
}

export default App;
