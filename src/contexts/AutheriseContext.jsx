import React, { createContext, useContext, useState, useEffect } from 'react';

const AutheriseContext = createContext();

export const useAuth = () => {
  const context = useContext(AutheriseContext);
  if (!context) {
    throw new Error("useAuth must be used within an AutheriseProvider");
  }
  return context;
};

export const AutheriseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const signUp = async ({ name, email, password, className }) => {
    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      throw new Error('Email already exists');
    }

    const newUser = {
      name,
      email,
      password,
      class: className,
      subject: [],
      activities: []
    };

    users.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
  };

  const signIn = async ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const matchedUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!matchedUser) {
      throw new Error('Invalid email or password');
    }

    localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
    setUser(matchedUser);
  };

  const signOut = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  if (loading) return null; // Or show a spinner while loading

  return (
    <AutheriseContext.Provider
      value={{
        isAuthorized: !!user,
        user,
        signUp,
        signIn,
        signOut
      }}
    >
      {children}
    </AutheriseContext.Provider>
  );
};
