import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectUser } from '../../redux/auth/authSelectors';
import toast from 'react-hot-toast';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useAuth } from '../../hooks/useAuth';

import axios from 'axios';

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

  // const user = useSelector(selectUser);
  // console.log(user);
  // console.log(user.email);

  const { user } = useAuth();
  console.log({ user }); //зарегистрированный юзер

  const [email, setEmail] = useState('');
  console.log([email, setEmail]); // введенный емейл

  const subscribeUser = async () => {
    const response = await axios.post('/auth/subscribe');
    return response.data;
  };

  const handleSubmit = async (event, value) => {
    event.preventDefault();
    console.log(event);
    const form = event.target;
    console.log(form.elements.email.value); // получить введенный емейл

    try {
      await subscribeUser({ email: setEmail(form.elements.email.value) });
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
            type="email"
            name="email"
            placeholder="Enter your email address"
            autoFocus
            defaultValue={user.email}
            value={email}
            onChange={event => setEmail(event.target.value)}
            pattern="^[A-Za-z0-9_.-]+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,4}$"
          />
          <EmailIcon />
        </Field>
        <Button type="submit">Subscribe</Button>
      </Form>
    </SubscribeFormWrap>
  );
};
