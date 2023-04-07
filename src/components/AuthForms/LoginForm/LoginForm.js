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
} from "./LoginForm.styled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isEmailValid, setIsEmailValid] = useState(false);
  // const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   setIsEmailValid(/^\w+([\w-]\w+)@\w+(?:[.-]\w+)*(.\w{2,3})+$/.test(email));
  //   setIsPasswordValid(password.length > 5);
  // }, [ email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (!isEmailValid || !isPasswordValid) {
    //   return;
    // }
    if (
      !/^\w+([\w-]\w+)@\w+(?:[.-]\w+)*(.\w{2,3})+$/.test(email) ||
      !/^.{6,}$/.test(password)
    ) {
      return toast("email and/or password is invalid");
    }

    dispatch(logIn({ email, password }))
      .unwrap()
      .then(({ user }) => toast.success(`Welcome, ${user.name}!`))
      .catch((error) => {
        toast.error(
          "Oops... Something went wrong. Please refresh the page and try again!"
        );
        console.log("Error: ", error);
      });
    event.target.reset();
  };

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const getEmailColor = () => {
    if (
      !/^\w+([\w-]\w+)@\w+(?:[.-]\w+)*(.\w{2,3})+$/.test(email) &&
      email.length > 0
    ) {
      return "#e74a3b";
    }
    return "#fafafa";
  };

  const getPasswordColor = () => {
    if (!/^.{6,}$/.test(password) && password.length > 0) {
      return "#e74a3b";
    }
    return "#fafafa";
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Sign In</Title>
      <InputContainer emailcolor={getEmailColor()}>
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <MailIcon emailcolor={getEmailColor()} />
        {!/^\w+([\w-]\w+)@\w+(?:[.-]\w+)*(.\w{2,3})+$/.test(email) &&
          email.length > 0 && <ErrorIcon />}
        {/* {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>} */}
      </InputContainer>
      <InputContainer passwordcolor={getPasswordColor()}>
        <Input
          type={isPasswordVisible ? "text" : "password"}
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <LockIcon passwordcolor={getPasswordColor()} />
        {!/^.{6,}$/.test(password) && password.length > 0 && <ErrorIcon />}
        {/* {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>} */}
        <PasswordVisibilityButton
          type="button"
          className="password-visibility-toggle"
          onClick={handlePasswordVisibilityToggle}
        >
          {isPasswordVisible ? "Hide" : "Show"}
        </PasswordVisibilityButton>
      </InputContainer>
      <Button type="submit">Sign in</Button>
    </FormContainer>
  );
};

export default LoginForm;
