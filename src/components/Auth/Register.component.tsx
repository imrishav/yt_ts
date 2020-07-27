import React, { useState } from 'react';
import useInputField from '../../utils/hooks/useInputField';
import { connect } from 'react-redux';
import { StoreState } from '../../reducers';
import { ProfileDet } from '../../reducers/profile';
import { signUp, SignUpPayload } from '../../actions/authActions';

interface SignUpProps {
  profile?: ProfileDet;
  signUp?: (payload: SignUpPayload) => any;
}

type ErrorOj = {
  error: string[];
};

const Register: React.FC<SignUpProps> = ({ profile, signUp }) => {
  const [error, setError] = useState<string[]>([]);
  const [isFormValid, setFormValid] = useState<boolean>(false);

  const username = useInputField('');
  const email = useInputField('');
  const password = useInputField('');
  const confirmPassword = useInputField('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid;

    let passwordMatch = password.value === confirmPassword.value;

    if (!username.value.length) {
      isValid = false;
      setError(['Username is Required Sir.']);
    } else if (!email.value) {
      isValid = false;
      setError(['Email is Required.']);
    } else if (!password.value) {
      isValid = false;
      setError(['Password is Required.']);
    } else if (!passwordMatch) {
      isValid = false;
      setError(['Password should match.']);
    } else {
      isValid = true;
    }

    if (isValid) {
      const payload: SignUpPayload = {
        email: email.value,
        username: username.value,
        password: password.value,
      };

      signUp!(payload);
    } else {
      alert('Please Fix all errors');
    }

    // loginUser!(payload);
  };

  return (
    <div>
      <h2>Register a new account</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          value={username.value}
          onChange={username.onChange}
        />
        <input
          type="email"
          placeholder="email"
          value={email.value}
          onChange={email.onChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password.value}
          onChange={password.onChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword.value}
          onChange={confirmPassword.onChange}
        />
        <div className="action input-group">
          {/* <span className="pointer" onClick={() => signup()}>
        Signup instead
      </span> */}
          <button>Register</button>
        </div>
      </form>
      {/* {error && <p>{error}</p>} */}
      {/* {!isFormValid && RenderError()} */}
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    profile: state.profile,
  };
};

export default connect(mapStateToProps, { signUp })(Register);
