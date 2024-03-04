import React from 'react';
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from '@react-email/components';

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome abroad!</Preview>
      <Body style={{ background: 'white' }}>
        <Container>
          <Text>Hello {name},</Text>
          <Link href="https://example.com">https://example.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
