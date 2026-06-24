import { createContext, useEffect, useState } from "react";

type AuthContextType = {
  user: string | null;
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    setUser(storedUser);
  }
}, []);

  const isAuthenticated = !!user;

 const login = (username: string) => {
  setUser(username);
  localStorage.setItem("user", username);
};

 const logout = () => {
  setUser(null);
  localStorage.removeItem("user");
};

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};