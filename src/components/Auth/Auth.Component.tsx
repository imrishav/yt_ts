import React, { useState } from 'react';
import { StyledAuth } from '../../styles/Auth.styles';
import Login from './Login.component';
import Register from './Register.component';

const Auth: React.FC = () => {
  const [isLogin, setisLogin] = useState<Boolean>(false);

  const onRegister = () => {
    setisLogin(!isLogin);
  };

  return (
    <StyledAuth>
      {isLogin ? <Login /> : <Register />}

      <button style={{ marginTop: '20px' }} onClick={() => onRegister()}>
        {isLogin ? 'Login' : 'Register'} here
      </button>
    </StyledAuth>
  );
};

export default Auth;
