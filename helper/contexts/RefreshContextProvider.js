import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';

export const refreshContext = createContext();

const RefreshContextProvider = ({ children }) => {
  const [session, setSession] = useState({
    user: { email: null, image: null },
    status: null,
  });
  const checkSession = async () => {
    const res = await fetch('/api/auth/refresh', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (res.status === 202) {
      setSession(() => data.session);
      return;
    }
  };
  const { route } = useRouter();
  useEffect(() => {
    checkSession();
  }, [route]);

  return (
    <refreshContext.Provider
      value={{
        user: session.user,
        status: session.status,
        checkSession,
        setSession,
      }}
    >
      {children}
    </refreshContext.Provider>
  );
};

export default RefreshContextProvider;
