import useForm from 'hooks/Auth/useForm';
import useSignUp from 'hooks/Auth/useSignUp';
import SignUpView from 'views/SignUpView';

const SignUpPage = () => {
  const { signUp } = useSignUp();
  const { handleChange, onSubmit, isButtonDisabled } = useForm(signUp);

  return (
    <SignUpView
      onSubmit={onSubmit}
      handleChange={handleChange}
      isButtonDisabled={isButtonDisabled}
    />
  );
};

export default SignUpPage;
