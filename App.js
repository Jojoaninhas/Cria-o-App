import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/routers/routers';
import AuthContext from './src/Contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthContext.Provider value= {
      {signed:true,
       token:"Logado",
       email: "papito@gmail.com"
      }}>
      <Routers/>
      </AuthContext.Provider>
    </NavigationContainer>

  );
}