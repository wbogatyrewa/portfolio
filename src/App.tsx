import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { StarsBackground } from "./components/StarsBackground";
import { AboutPage } from "./components/Pages/AboutPage";
import { Contact } from "./components/Pages/ContactPage";
import { EducationPage } from "./components/Pages/EducationPage";
import { SkillsPage } from "./components/Pages/SkillsPage";
import { WorkPage } from "./components/Pages/WorkPage/WorkPage";

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
        <Route
          path="education"
          element={
            <Container>
              <EducationPage />
            </Container>
          }
        />
        <Route
          path="skills"
          element={
            <Container>
              <SkillsPage />
            </Container>
          }
        />
        <Route
          path="work"
          element={
            <Container>
              <WorkPage />
            </Container>
          }
        />
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
