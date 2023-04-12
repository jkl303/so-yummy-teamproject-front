import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import {
  SubscribeFormWrap,
  TextBeforeSubscribe,
  Title,
  Text,
  Form,
  Field,
  Input,
  EmailIcon,
  Button,
} from './SubscribeForm.styled';

export const SubscribeForm = () => {
  const { width } = useWindowDimensions();

  const [email, setEmail] = useState('');
  // console.log([email, setEmail]);

  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // максимально не строгий

  const handleSubmit = event => {
    event.preventDefault();
    if (!emailRegexp.test(email)) {
      return toast('email is invalid');
    }
  };

  return (
    <SubscribeFormWrap>
      {width > 1439 && (
        <TextBeforeSubscribe>
          <Title>Subscribe to our Newsletter</Title>
          <Text>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </Text>
        </TextBeforeSubscribe>
      )}
      <Form onSubmit={handleSubmit}>
        <Field>
          <Input
            type="text"
            email="email"
            placeholder="Enter your email address"
            onChange={event => setEmail(event.target.value)}
          />
          <EmailIcon />
        </Field>
        <Button type="submit">Subscribe</Button>
      </Form>
    </SubscribeFormWrap>
  );
};
