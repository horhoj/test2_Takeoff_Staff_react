import React from 'react';
import { useParams } from 'react-router';
import { ContactForm } from '../../features/contact/ContactForm';

export const Contact: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <ContactForm id={id} />;
};
