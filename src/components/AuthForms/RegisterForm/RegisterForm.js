import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  FormContainer,
  Title,
  InputContainer,
  Input,
  // ErrorMessage,
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
    const nameRegexp = /^[\p{L}\s'`’]{3,}$/u;
    const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // максимально не строгий
    // const emailRegexp = /^\w+([\w.-]*\w+)?@\w+([.-]?\w+)*(\.\w{2,3})+$/;  // більш строгий

    setIsNameValid(nameRegexp.test(name));
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

    dispatch(signUp({ name, email, password })); //відправка даних для реєстрації
    // при успішній реєстрації вивести повідомлення, що треба підтвердити імейл
    event.target.reset();
  };

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const getNameColor = () => {
    if (!name) {
      return '#fafafa';
    }
    if (!isNameValid && name.length > 2) {
      return '#e74a3b';
    }
    if (isNameValid && name.length > 2) {
      return '#3cbc81';
    }
    if (name.length >= 2) {
      return '#fafafa';
    }
  };

  const getEmailColor = () => {
    if (!email) {
      return '#fafafa';
    }
    if (!isEmailValid && email.length > 8) {
      return '#e74a3b';
    }
    if (isEmailValid && email.length > 8) {
      return '#3cbc81';
    }
    if (email.length <= 8) {
      return '#fafafa';
    }
  };

  const getPasswordColor = () => {
    if (!password) {
      return '#fafafa';
    }
    if (passwordValidationState === 'weak' && password.length > 2) {
      return '#e74a3b';
    }
    if (passwordValidationState === 'medium' && password.length > 2) {
      return '#f6c23e';
    }
    if (passwordValidationState === 'strong' && password.length > 2) {
      return '#3cbc81';
    }
    if (password.length <= 2) {
      return '#fafafa';
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Registration</Title>
      <InputContainer namecolor={getNameColor()}>
        <Input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Name"
          onBlur={() => {
            !isNameValid &&
              name.length > 2 &&
              toast(
                'Name must contain 3+ letters, may include apostrophe, no numbers/symbols'
              );
          }}
        />
        <UserIcon namecolor={getNameColor()} />
        {isNameValid && <CorrectIcon />}
        {!isNameValid && name.length > 2 && <ErrorIcon />}
        {/* {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>} */}
      </InputContainer>
      <InputContainer emailcolor={getEmailColor()}>
        <Input
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="Email"
          onBlur={() => {
            !isEmailValid && email.length > 0 && toast('Email is invalid');
          }}
        />
        <MailIcon emailcolor={getEmailColor()} />
        {isEmailValid && <CorrectIcon />}
        {!isEmailValid && email.length > 8 && <ErrorIcon />}
        {/* {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>} */}
      </InputContainer>
      <InputContainer passwordcolor={getPasswordColor()}>
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
        <LockIcon passwordcolor={getPasswordColor()} />
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
