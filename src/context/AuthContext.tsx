import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextType {
  username: string | null;
  setUsername: (username: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [username, setUsername] = useState<string | null>(null);
  const logout = () => {
    setUsername(null);
  };
  return (
    <AuthContext.Provider value={{ username, setUsername, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
