import { TRY_AUTH } from '../../type/auth';

export const tryAuth = (authData) => {
  return {
    type: TRY_AUTH,
    authData: authData
  };
};