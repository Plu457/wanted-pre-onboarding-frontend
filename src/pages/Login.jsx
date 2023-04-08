import useForm from 'hooks/Auth/useForm';
import LoginView from 'views/LoginView';
import useLogin from 'hooks/Auth/useLogin';

const LoginPage = () => {
  const { signIn } = useLogin();
  const { handleChange, onSubmit, isButtonDisabled } = useForm(signIn);

  return (
    <LoginView
      onSubmit={onSubmit}
      handleChange={handleChange}
      isButtonDisabled={isButtonDisabled}
    />
  );
};

export default LoginPage;
