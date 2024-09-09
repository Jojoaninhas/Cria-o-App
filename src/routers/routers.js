import { NavigationContainer } from '@react-navigation/native';
import AppRouters from './appRouters';
import AuthRouters from './authRouters';
import AuthContext from '../Contexts/auth';
import { useContext } from 'react';

export default function Routers() {
    const {signed} = useContext(AuthContext);
    return (

        <>
        { signed ? <AuthRouters />: <AppRouters/>}
            
           
        </>

    );
}