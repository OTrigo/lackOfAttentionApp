export interface UserProps {
  name: string;
  partnerId: string;
}

export interface UserSessionProps extends UserProps {
  loggedIn: boolean;
}

export interface UserAuthenticationProps {
  name: String;
  password: String;
}

export interface UserContextType {
  user: UserSessionProps;
  setUser: React.Dispatch<React.SetStateAction<UserSessionProps>>;
}
