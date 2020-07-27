import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../reducers/index';

import { StyledAuth } from '../../styles/Auth.styles';
import useInputField from '../../utils/hooks/useInputField';
import { ProfileDet } from '../../reducers/profile';
import { LoginPayload, loginUser } from '../../actions/authActions';

interface LoginComponentProps {
  profile: ProfileDet;
  error?: string;
  loginUser?: (payload: LoginPayload) => void;
}

const Login: React.FC<LoginComponentProps> = ({
  profile,
  loginUser,
  error,
}) => {
  const email = useInputField('');
  const password = useInputField('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const payload: LoginPayload = {
      email: email.value,
      password: password.value,
    };

    loginUser!(payload);
  };
  return (
    <div>
      <h2>Login to your account</h2>
      <form onSubmit={handleLogin}>
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
        <div className="action input-group">
          {/* <span className="pointer" onClick={() => signup()}>
            Signup instead
          </span> */}
          <button>Login</button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    profile: state.profile,
    error: state.profile.error,
  };
};

export default connect(mapStateToProps, { loginUser })(Login);
