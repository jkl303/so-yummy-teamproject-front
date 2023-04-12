import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useWindowDimensions from '../../hooks/useWindowDimensions';
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

  // const user = useSelector(selectUser);
  // console.log(user);
  // console.log(user.email);

  const [email, setEmail] = useState('');
  // console.log([email, setEmail]);

  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // максимально не строгий

  // const subscribeUser = async body => {
  //   const { data } = await axios.post('/subscribe', body);
  //   return data;
  // };

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
      <Form
        onSubmit={handleSubmit}
        // actions.setSubmitting(false);
        // actions.resetForm();
      >
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
