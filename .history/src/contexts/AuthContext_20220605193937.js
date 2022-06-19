import React, { useState } from "react";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
