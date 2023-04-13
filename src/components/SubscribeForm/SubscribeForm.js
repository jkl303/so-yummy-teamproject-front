import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useAuth } from '../../hooks/useAuth';
import { instance } from 'redux/auth/authOperations';

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

  const { user } = useAuth();
  console.log({ user });

  const [email, setEmail] = useState('');
  const isEmailValid = email.trim().length > 6;

  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // максимально не строгий
  
  const handleSubmit = async event => {
    event.preventDefault();
    if (!emailRegexp.test(email)) {
      return toast('email is invalid');
    }
    try {
      await instance.post('auth/subscribe', { email });
      toast.success('You have successfully subscribed');
    } catch (error) {
      if (error.response.status === 409) {
        toast.error(`This user is already subscribed`);
      } else {
        toast.error(`Something went wrong. Try again...`);
      }
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
            name="email"
            placeholder="Enter your email address"
            autoFocus={user.email}
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <EmailIcon />
        </Field>
        <Button
          type="submit"
          disabled={!isEmailValid}
        >
          Subscribe
        </Button>
      </Form>
    </SubscribeFormWrap>
  );
};
