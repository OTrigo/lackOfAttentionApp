export interface UserProps {
  name: string;
  partnerId?: string;
}

export interface UserSessionProps extends UserProps {
  loggedIn: boolean;
}

export interface UserAuthenticationProps {
  name: String;
  password: String;
}

export interface NewUserProps extends UserProps {
  password: String;
}

export interface UserContextType{
  userState: any
  setUserState: any
}

export interface SignInProps{
  setUser: React.Dispatch<React.SetStateAction<UserSessionProps>>
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
}