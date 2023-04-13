import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
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
} from './RegisterForm.styled';
import { signUp } from '../../../redux/auth/authOperations';
import { getEmailColor, getNameColor, getPasswordColor } from './getInputColor';
import { useNavigate } from 'react-router';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [passwordValidationState, setPasswordValidationState] =
    useState('weak');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

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
      // const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const isValidLength = password.length >= 6;

      if (!isValidLength) {
        return setPasswordValidationState('weak');
      }
      if (
        hasLowercase &&
        hasUppercase &&
        hasNumber &&
        // hasSpecialChar &&
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
      .then(({ user }) => {
        toast.success(
          `Welcome, ${user.name}!

          Confirm your email to complete registration`,
          {
            duration: 30000,
          }
        );
        navigate('/login', { replace: true });
      })
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

  const onNameChange = e => {
    setName(e.target.value);
    if (isNameValid || name.length === 0) {
      setErrors(prevState => ({ ...prevState, name: false }));
    }
  };

  const onNameBlur = () => {
    if (!isNameValid && name.length > 0) {
      toast.error('Name must contain 3+ letters', {
          duration: 12000,
        });
      setErrors(prevState => ({
        ...prevState,
        name: 'name is too short',
      }));
    } else {
      setErrors(prevState => ({ ...prevState, name: false }));
    }
  };

  const onEmailChange = e => {
    setEmail(e.target.value);
    if (isEmailValid || email.length === 0) {
      setErrors(prevState => ({ ...prevState, email: false }));
    }
  };

  const onEmailBlur = () => {
    if (!isEmailValid && email.length > 0) {
      toast.error('Email is invalid', {
        duration: 12000,
      });
      setErrors(prevState => ({
        ...prevState,
        email: 'email is invalid',
      }));
    } else {
      setErrors(prevState => ({ ...prevState, email: false }));
    }
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
    if (password.length === 0) {
      setErrors(prevState => ({ ...prevState, password: false }));
    }
    if (passwordValidationState === 'weak' && password.length > 0) {
      setErrors(prevState => ({
        ...prevState,
        password: 'Enter a valid Password',
      }));
    }
    if (passwordValidationState === 'medium' && password.length > 0) {
      setErrors(prevState => ({
        ...prevState,
        password: 'Your password is little secure',
      }));
    }
    if (passwordValidationState === 'strong' && password.length > 0) {
      setErrors(prevState => ({
        ...prevState,
        password: 'Password is secure',
      }));
    }
  };

  const onPasswordBlur = () => {    
    if (password.length === 0) {
      setErrors(prevState => ({ ...prevState, password: false }));
    }
    if (passwordValidationState === 'weak' && password.length > 0) {
      toast.error('password must contain 6+ chars.', {
        duration: 12000,
      });
      setErrors(prevState => ({
        ...prevState,
        password: 'Enter a valid Password',
      }));
    }
    if (passwordValidationState === 'medium' && password.length > 0) {
      setErrors(prevState => ({
        ...prevState,
        password: 'Your password is little secure',
      }));
    }
    if (passwordValidationState === 'strong' && password.length > 0) {
      setErrors(prevState => ({
        ...prevState,
        password: 'Password is secure',
      }));
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Registration</Title>
      <InputContainer namecolor={getNameColor(name, isNameValid)}>
        <Input
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="Name"
          onBlur={onNameBlur}
        />
        <UserIcon namecolor={getNameColor(name, isNameValid)} />
        {isNameValid && <CorrectIcon />}
        {!isNameValid && name.length > 0 && <ErrorIcon />}
        {errors.name && (
          <ErrorMessage color={getNameColor(name, isNameValid)}>
            {errors.name}
          </ErrorMessage>
        )}
      </InputContainer>
      <InputContainer emailcolor={getEmailColor(email, isEmailValid)}>
        <Input
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          onBlur={onEmailBlur}
        />
        <MailIcon emailcolor={getEmailColor(email, isEmailValid)} />
        {isEmailValid && <CorrectIcon />}
        {!isEmailValid && email.length > 8 && <ErrorIcon />}
        {errors.email && (
          <ErrorMessage color={getNameColor(email, isEmailValid)}>
            {errors.email}
          </ErrorMessage>
        )}
      </InputContainer>
      <InputContainer
        passwordcolor={getPasswordColor(password, passwordValidationState)}
      >
        <Input
          type={isPasswordVisible ? 'text' : 'password'}
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          onBlur={onPasswordBlur}
        />
        <LockIcon
          passwordcolor={getPasswordColor(password, passwordValidationState)}
        />
        {passwordValidationState === 'strong' && <CorrectIcon />}
        {passwordValidationState === 'medium' && <WarningIcon />}
        {passwordValidationState === 'weak' && password.length > 0 && (
          <ErrorIcon />
        )}
        {errors.password && (
          <ErrorMessage
            color={getPasswordColor(password, passwordValidationState)}
          >
            {errors.password}
          </ErrorMessage>
        )}
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
}
