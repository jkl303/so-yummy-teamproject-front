import SigninForm from 'components/AuthForms/SigninForm/SigninForm';

export default function SigninPage() {
  return (
    <div>
      <SigninForm />
      <a href="http://localhost:3000/api/auth/google">Google</a>
    </div>
  );
}
