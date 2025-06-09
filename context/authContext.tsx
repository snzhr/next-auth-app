"use client";
import { IUser } from "@/models/user";
import axios from "axios";
import { createContext, useState } from "react";

type AuthContextType = {
  user: IUser | null;
  login: (user: IUser) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<IUser | null>(null);

  const login = (user: IUser) => setUser(user);

  const logout = async () => {
    await axios.post('/api/logout');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
