import { Link } from 'react-router-dom';

import { Images } from 'commons';
import Input from 'components/Input';

const SignUpView = ({ onSubmit, handleChange, isButtonDisabled }) => {
  return (
    <form onSubmit={onSubmit} onChange={handleChange}>
      <div className="p-6 bg-white rounded-md shadow-md w-96">
        <div className="flex items-center justify-center mb-4">
          <img src={Images.LOGO} alt="Logo" className="h-32" />
        </div>
        <Input
          name="email"
          type="email"
          label="Email"
          pattern=".*@.*"
          data-testid="email-input"
          autoComplete="off"
          required
        />
        <Input
          name="password"
          type="password"
          label="Password"
          pattern=".{8,}"
          data-testid="password-input"
          required
        />
        <button
          className={`w-full py-2 text-gray-100 transition-colors rounded-md ${
            isButtonDisabled ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          type="submit"
          data-testid="signup-button"
          disabled={isButtonDisabled}
        >
          회원가입
        </button>
        <Link to="/signin">로그인 화면으로 이동</Link>
      </div>
    </form>
  );
};

export default SignUpView;
