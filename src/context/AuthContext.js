import CreateDataContext from './CreateDataContext';
import { setAsyncStorage } from '../helpers/AsyncStorageHelper';
import AsyncKeys from '../constants/AsyncKeys';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'setAuthUser':
      return { ...state, auth_user: action.payload }
    case 'setAuthIsLoggedIn':
      return { ...state, is_loggedIn: action.payload }
    default:
      return state
  }
}

const setAuthUser = (dispatch) => async (userData) => {
  await setAsyncStorage(AsyncKeys.AUTH_USER, userData);
  dispatch({ type: 'setAuthUser', payload: userData })
}

const setIsLoggedIn = (dispatch) => async (data) => {
  await setAsyncStorage(AsyncKeys.AUTH_IS_LOGGEDIN, data);
  dispatch({ type: 'setAuthIsLoggedIn', payload: data })
}

export const { Provider: AuthProvider, Context: AuthContext } = CreateDataContext(
  authReducer,
  {
    setAuthUser,
    setIsLoggedIn,
  },
  {
    auth_user: null,
    is_loggedIn: null,
  },
);
