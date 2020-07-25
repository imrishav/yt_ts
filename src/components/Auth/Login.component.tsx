import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../reducers/index';

import { StyledAuth } from '../../styles/Auth.styles';
import useInputField from '../../utils/hooks/useInputField';
import { ProfileDet } from '../../reducers/profile';
import { LoginPayload, loginUser } from '../../actions/authActions';
import Axios from 'axios';

interface LoginComponentProps {
  profile: ProfileDet;
  loginUser?: (payload: LoginPayload) => void;
}

const Login: React.FC<LoginComponentProps> = ({ profile, loginUser }) => {
  const email = useInputField('');
  const password = useInputField('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const payload: LoginPayload = {
      email: email.value,
      password: password.value,
    };

    loginUser!(payload);

    // console.log({ email, password });
  };

  console.log('profile', profile);
  return (
    <StyledAuth>
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
    </StyledAuth>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    profile: state.profile,
  };
};

export default connect(mapStateToProps, { loginUser })(Login);
