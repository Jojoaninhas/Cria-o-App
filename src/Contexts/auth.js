const{createContext, Children} = require("react");

const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{

return(
<AuthContext.Provider value= {
      {signed:true,
       token:"Logado",
       email: "papito@gmail.com"
      }}>
        {children}
</AuthContext.Provider>
)
}

export default AuthContext;






