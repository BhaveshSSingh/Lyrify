import React from "react";
import { FaqsContainer } from "./containers/accordion";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron1";

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
