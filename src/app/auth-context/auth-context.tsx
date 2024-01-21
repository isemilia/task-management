import { FC, ReactNode, createContext, useEffect, useState } from 'react';

import { useGetMeQuery } from '@/shared/api/queries/auth/auth-queries';
import { useCookies } from 'react-cookie';

interface IAuthContext {
  user: {
    id: string
    name: string
    username: string
  } | null
}

const defaultValue: IAuthContext = {
  user: null
}

const AuthContext = createContext(defaultValue);

const AuthProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [cookies] = useCookies(['token']);
  const meReq = useGetMeQuery({});

  const [user, setUser] = useState<IAuthContext['user']>(null)

  useEffect(() => {
    meReq.refetch();
  }, [cookies?.token])

  useEffect(() => {
    if (meReq.isSuccess) {
      setUser(meReq.data.result.user);
    }
    if (meReq.isError) {
      console.error(meReq.error);
    }
  }, [cookies?.token, meReq.isFetching, meReq.isSuccess, meReq.isError])

  console.log(user);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}

// const AuthConsumer = AuthContext.Consumer;

export {
  AuthProvider,
  AuthContext
}