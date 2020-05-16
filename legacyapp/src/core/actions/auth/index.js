import { TRY_AUTH, LOG_OUT } from '../../type/auth';

export const tryAuth = (authData) => {
  return {
    type: TRY_AUTH,
    authData: authData
  };
};

export const logout = () => {
  return {
    type: LOG_OUT
  };
};