import React, {
  // useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { logIn } from '../../../redux/auth/authOperations';
import {
  FormContainer,
  Title,
  InputContainer,
  Input,
  // ErrorMessage,
  Button,
  PasswordVisibilityButton,
  MailIcon,
  LockIcon,
  ErrorIcon,
} from "./SigninForm.styled";

export default function SigninForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isEmailValid, setIsEmailValid] = useState(false);
  // const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // const [errors, setErrors] = useState({});

  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // максимально не строгий
  const passRegexp = /^.{6,}$/; // має бути >= 6 символів

  // useEffect(() => {
  //   setIsEmailValid(/^\w+([\w-]\w+)@\w+(?:[.-]\w+)*(.\w{2,3})+$/.test(email));
  //   setIsPasswordValid(password.length > 5);
  // }, [ email, password]);

  const handleSubmit = event => {
    event.preventDefault();
    // if (!isEmailValid || !isPasswordValid) {
    //   return;
    // }
    if (!emailRegexp.test(email) || !passRegexp.test(password)) {
      return toast('email and/or password is invalid');
    }

    dispatch(logIn({ email, password }))
      .unwrap()
      .then(({ user }) => toast.success(`Welcome, ${user.name}!`))
      .catch(error => {
        toast.error(
          'Oops... Something went wrong. Please refresh the page and try again!'
        );
        console.log('Error: ', error);
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
        {/* {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>} */}
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
        {/* {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>} */}
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
};
