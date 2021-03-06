import React from 'react';
import { Box, styled } from '@mui/material';
import { ContactListForm } from '../../features/contactList/ContactListForm';

export const ContactList: React.FC = () => {
  return (
    <Container>
      <ContactListForm />
    </Container>
  );
};

const Container = styled(Box)`
  max-width: 1100px;
  margin: 0 auto;
`;
