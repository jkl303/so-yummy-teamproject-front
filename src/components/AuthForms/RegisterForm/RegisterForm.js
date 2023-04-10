import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  FormContainer,
  Title,
  InputContainer,
  Input,
  ErrorMessage,
  Button,
  PasswordVisibilityButton,
  UserIcon,
  MailIcon,
  LockIcon,
  CorrectIcon,
  WarningIcon,
  ErrorIcon,
} from "./RegisterForm.styled";
import { signUp } from "../../../redux/auth/authOperations";
import { getEmailColor, getNameColor, getPasswordColor } from "./getInputColor";

export default function RegisterForm () {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [passwordValidationState, setPasswordValidationState] =
    useState('weak');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // const [errors, setErrors] = useState({});

  useEffect(() => {
    // const nameRegexp = /^[\p{L}\s'`’]{3,}$/u;
    const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // максимально не строгий
    // const emailRegexp = /^\w+([\w.-]*\w+)?@\w+([.-]?\w+)*(\.\w{2,3})+$/;  // більш строгий

    setIsNameValid(name.length > 2);
    setIsEmailValid(emailRegexp.test(email));
    passwordValidation();

    function passwordValidation() {
      const hasLowercase = /[a-z]/.test(password);
      const hasUppercase = /[A-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const isValidLength = password.length >= 6;

      if (!isValidLength) {
        return setPasswordValidationState('weak');
      }
      if (
        hasLowercase &&
        hasUppercase &&
        hasNumber &&
        hasSpecialChar &&
        isValidLength
      ) {
        return setPasswordValidationState('strong');
      }
      return setPasswordValidationState('medium');
    }
  }, [name, email, password]);

  const handleSubmit = event => {
    event.preventDefault();
    if (
      !isNameValid ||
      !isEmailValid ||
      passwordValidationState === null ||
      passwordValidationState === 'weak'
    ) {
      return;
    }

    dispatch(signUp({ name, email, password }))
      .unwrap()
      .then(({ user }) =>
        toast.success(
          `Welcome, ${user.name}! Confirm your email ${user.email} to complete registration`
        )
      )
      .catch(error => {
        toast.error(error);
      });
    
    event.target.reset();
  };

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Registration</Title>
      <InputContainer namecolor={getNameColor(name, isNameValid)}>
        <Input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Name"
          onBlur={() => {
            !isNameValid &&
              name.length > 0 &&
              toast('Name must contain 3+ letters');
          }}
        />
        <UserIcon namecolor={getNameColor(name, isNameValid)} />
        {isNameValid && <CorrectIcon />}
        {!isNameValid && name.length > 0 && <ErrorIcon />}
        {/* {!isNameValid && name.length > 0 && (
          <ErrorMessage>the name must be at least 3 letters long</ErrorMessage>
        )} */}
      </InputContainer>
      <InputContainer emailcolor={getEmailColor(email, isEmailValid)}>
        <Input
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="Email"
          onBlur={() => {
            !isEmailValid && email.length > 0 && toast('Email is invalid');
          }}
        />
        <MailIcon emailcolor={getEmailColor(email, isEmailValid)} />
        {isEmailValid && <CorrectIcon />}
        {!isEmailValid && email.length > 8 && <ErrorIcon />}
        {/* {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>} */}
      </InputContainer>
      <InputContainer
        passwordcolor={getPasswordColor(password, passwordValidationState)}
      >
        <Input
          type={isPasswordVisible ? 'text' : 'password'}
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder="Password"
          onBlur={() => {
            !(passwordValidationState === 'strong') &&
              password.length > 0 &&
              toast(
                'Password must contain 6+ chars, upper/lowercase letters, numbers, special chars.'
              );
          }}
        />
        <LockIcon
          passwordcolor={getPasswordColor(password, passwordValidationState)}
        />
        {passwordValidationState === 'strong' && <CorrectIcon />}
        {passwordValidationState === 'medium' && <WarningIcon />}
        {passwordValidationState === 'weak' && password.length > 5 && (
          <ErrorIcon />
        )}
        {/* {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>} */}
        <PasswordVisibilityButton
          type="button"
          className="password-visibility-toggle"
          onClick={handlePasswordVisibilityToggle}
        >
          {isPasswordVisible ? 'Hide' : 'Show'}
        </PasswordVisibilityButton>
      </InputContainer>
      <Button type="submit">Sign up</Button>
    </FormContainer>
  );
};
