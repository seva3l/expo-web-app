import React, { createContext, useState, ReactNode } from 'react';

interface UserContextProps {
  firstName: string;
  setFirstName: (firstName: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  children: { id: number, name: string }[];
  addChild: (child: { id: number, name: string }) => void;
  updateChild: (id: number, name: string) => void;
  removeChild: (id: number) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  createAccount: () => void;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [gender, setGender] = useState('');
  const [childrenList, setChildrenList] = useState<{ id: number, name: string }[]>([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addChild = (child: { id: number, name: string }) => setChildrenList([...childrenList, child]);

  const updateChild = (id: number, name: string) => {
    setChildrenList(childrenList.map(child => (child.id === id ? { ...child, name } : child)));
  };

  const removeChild = (id: number) => {
    setChildrenList(childrenList.filter(child => child.id !== id));
  };

  const createAccount = () => {
    const accountData = { firstName, gender, children: childrenList, email, password };
    console.log('Account created:', accountData);
    // Here, you would typically make an API call to create the account.
  };

  return (
    <UserContext.Provider
      value={{
        firstName,
        setFirstName,
        gender,
        setGender,
        children: childrenList,
        addChild,
        updateChild,
        removeChild,
        email,
        setEmail,
        password,
        setPassword,
        createAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
