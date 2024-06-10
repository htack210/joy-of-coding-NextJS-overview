import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <html>
      <Preview>Welcome, {name}!</Preview>
      <Tailwind>
        <Body className="bg-slate-50">
          <Container>
            <Text className="font-bold text-3xl font-sans">
              Hello, and how are you?
            </Text>
            <Link href="https://mybook.to/aio">Check out my books!</Link>
          </Container>
        </Body>
      </Tailwind>
    </html>
  );
};

const body: CSSProperties = {
  background: "whitesmoke",
};
const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
