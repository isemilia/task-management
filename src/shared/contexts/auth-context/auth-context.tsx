import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import { useGetMeQuery } from '@/shared/api';
import { useNavigateToLogin } from '@/shared/hooks';
import { IAuthContext } from './resources/auth-context.type';

const defaultValue: IAuthContext = {
  user: null,
  isAuth: false,
}

const AuthContext = createContext(defaultValue);

const AuthProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const navigateToLogin = useNavigateToLogin();
  const [cookies] = useCookies(['token']);
  const meReq = useGetMeQuery({});

  const [user, setUser] = useState<IAuthContext['user']>(null);
  const [isAuth, setAuth] = useState(false);

  const invalidateSession = () => {
    setUser(null);
    setAuth(false);
    navigateToLogin();
  }

  useEffect(() => {
    if (cookies?.token) {
      meReq.refetch();
    } else {
      invalidateSession();
    }
  }, [cookies?.token]);


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

  console.log(user, isAuth);

  return (
    <AuthContext.Provider value={{ user, isAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthProvider,
  AuthContext
}