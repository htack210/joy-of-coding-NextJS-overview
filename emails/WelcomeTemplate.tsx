import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <html>
      <Preview>Welcome, {name}!</Preview>
      <Body>
        <Container>
          <Text>Hello, and how are you?</Text>
          <Link href="https://mybook.to/aio">Worst Sellers!</Link>
        </Container>
      </Body>
    </html>
  );
};

export default WelcomeTemplate;
