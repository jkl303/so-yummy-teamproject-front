import RegisterForm from 'components/AuthForms/RegisterForm/RegisterForm';

export default function RegistrationPage() {
  return (
    <div>
      <RegisterForm />
      <a href="http://localhost:3000/api/auth/google">Google</a>
    </div>
  );
}
