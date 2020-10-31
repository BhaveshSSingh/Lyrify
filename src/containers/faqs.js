import React from "react";
import { Accordion } from "../components";
import OptForm from "../components/opt-form";
import faqsData from "../fixtures/faq";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>

      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Let's Lyrify</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready To Listen? Start by putting in Your Email
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
