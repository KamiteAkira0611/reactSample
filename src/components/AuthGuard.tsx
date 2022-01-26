import { useAuth0 } from '@auth0/auth0-react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React from 'react';
import LoadingScreen from './LoadingScreen';

type Props = {
  children: ReactJSXElement
}


const AuthGuard = (props: Props) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  
  if(isLoading){
    return <LoadingScreen/>
  }
  if(!isAuthenticated){
    loginWithRedirect()
    return null
  }

  return <>{props.children}</>;
};

export default AuthGuard;