import React, { useState } from "react";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState();
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
