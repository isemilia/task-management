import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation } from 'react-router-dom';

import { useGetMeQuery } from '@/shared/api';
import { useAppDispatch, useNavigateToLogin } from '@/shared/hooks';
import { IAuthContext } from './resources/auth-context.type';
import { api } from '@/shared/api/base';

const defaultValue: IAuthContext = {
  user: null,
  isAuth: false,
  invalidateSession: () => { }
}

const AuthContext = createContext(defaultValue);

const AuthProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const navigateToLogin = useNavigateToLogin();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const { pathname } = useLocation();

  const meReq = useGetMeQuery({});

  const dispatch = useAppDispatch();

  const [user, setUser] = useState<IAuthContext['user']>(null);
  const [isAuth, setAuth] = useState(false);

  const invalidateSession = () => {
    setUser(null);
    setAuth(false);
    removeCookie('token');
    navigateToLogin();
  }

  useEffect(() => {
    if (!cookies?.token) {
      dispatch(api.util.resetApiState());
    }
  }, [isAuth, user, cookies?.token]);

  useEffect(() => {
    if (cookies?.token) {
      meReq.refetch();
    } else {
      invalidateSession();
    }
  }, [cookies?.token]);

  useEffect(() => {
    if (!cookies?.token) {
      invalidateSession();
    }
  }, [pathname])


  useEffect(() => {
    if (meReq.isSuccess && !meReq.isFetching) {
      const { result } = meReq.data;
      if (result?.user) {
        setUser(result.user);
        setAuth(true);
      }
    }
    if (meReq.isError) {
      invalidateSession();
      console.error(meReq.error);
    }
  }, [cookies?.token, meReq.isFetching, meReq.isSuccess, meReq.isError])

  // console.log(user, isAuth);

  return (
    <AuthContext.Provider value={{ user, isAuth, invalidateSession }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthProvider,
  AuthContext
}