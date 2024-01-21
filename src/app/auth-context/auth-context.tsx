import { FC, ReactNode, createContext, useEffect, useState } from 'react';

import { useGetMeQuery } from '@/shared/api/queries/auth/auth-queries';
import { useCookies } from 'react-cookie';

interface IAuthContext {
  user: {
    id: string
    name: string
    username: string
  } | null
  isAuth: boolean
}

const defaultValue: IAuthContext = {
  user: null,
  isAuth: false,
}

const AuthContext = createContext(defaultValue);

const AuthProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [cookies] = useCookies(['token']);
  const meReq = useGetMeQuery({});

  const [user, setUser] = useState<IAuthContext['user']>(null);
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    meReq.refetch();
  }, [cookies?.token])

  useEffect(() => {
    if (meReq.isSuccess) {
      const { result } = meReq.data;
      if (result?.user) {
        setUser(result.user);
        setAuth(true);
      }
    }
    if (meReq.isError) {
      setUser(null);
      setAuth(false);
      console.error(meReq.error);
    }
  }, [cookies?.token, meReq.isFetching, meReq.isSuccess, meReq.isError])

  console.log(user);

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