import React from "react";
import { Accordion } from "../components";
import faqsData from "../fixtures/faq";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Got Questions?</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
