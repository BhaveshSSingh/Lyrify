import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Lyrify</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.SubTitle>COMPANY</Footer.SubTitle>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">For the Record</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.SubTitle>COMMUNITIES</Footer.SubTitle>
          <Footer.Link href="#">for Artists</Footer.Link>
          <Footer.Link href="#">Developers</Footer.Link>
          <Footer.Link href="#">Advertising</Footer.Link>
          <Footer.Link href="#">Investors</Footer.Link>
          <Footer.Link href="#">Vendors</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.SubTitle>USEFUL LINKS</Footer.SubTitle>
          <Footer.Link href="#">Help</Footer.Link>
          <Footer.Link href="#">Web Player</Footer.Link>
          <Footer.Link href="#">Free Mobile App</Footer.Link>
          <Footer.Link href="#">2020 Wrapped</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Row>
        <Footer.Break />
        <Footer.Text>Lyrify India</Footer.Text>
      </Footer.Row>
    </Footer>
  );
}
