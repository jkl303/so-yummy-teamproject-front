import React, {
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { logIn } from '../../../redux/auth/authOperations';
import {
  FormContainer,
  Title,
  InputContainer,
  Input,
  Button,
  PasswordVisibilityButton,
  MailIcon,
  LockIcon,
  ErrorIcon,
} from './SigninForm.styled';

export default function SigninForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // максимально не строгий
  const passRegexp = /^.{6,}$/; // має бути >= 6 символів

  const handleSubmit = event => {
    event.preventDefault();

    if (!emailRegexp.test(email) || !passRegexp.test(password)) {
      return toast.error('email and/or password is invalid', {
        duration: 12000,
      });
    }

    dispatch(logIn({ email, password }))
      .unwrap()
      .then(({ user }) =>
        toast.success(`Welcome, ${user.name}!`, {
          duration: 12000,
        })
      )
      .catch(error => {
        toast.error(error, {
          duration: 12000,
        });
      });
    event.target.reset();
  };

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const getEmailColor = () => {
    if (!emailRegexp.test(email) && email.length > 0) {
      return '#e74a3b';
    }
    return '#fafafa';
  };

  const getPasswordColor = () => {
    if (!passRegexp.test(password) && password.length > 0) {
      return '#e74a3b';
    }
    return '#fafafa';
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Sign In</Title>
      <InputContainer emailcolor={getEmailColor()}>
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
        />
        <MailIcon emailcolor={getEmailColor()} />
        {!emailRegexp.test(email) && email.length > 0 && <ErrorIcon />}
      </InputContainer>
      <InputContainer passwordcolor={getPasswordColor()}>
        <Input
          type={isPasswordVisible ? 'text' : 'password'}
          value={password}
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
        />
        <LockIcon passwordcolor={getPasswordColor()} />
        {!passRegexp.test(password) && password.length > 0 && <ErrorIcon />}
        <PasswordVisibilityButton
          type="button"
          className="password-visibility-toggle"
          onClick={handlePasswordVisibilityToggle}
        >
          {isPasswordVisible ? 'Hide' : 'Show'}
        </PasswordVisibilityButton>
      </InputContainer>
      <Button type="submit">Sign in</Button>
    </FormContainer>
  );
}
