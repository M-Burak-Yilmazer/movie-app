import { createContext, useContext } from "react";

export const AuthContext = createContext()

export const AuthProvider =({children})=>{

 const [name, setName] = useState("");
  const [lastName, setLastName]=useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]=useState("")


    return(
        <AuthContext.Provider value={{name,lastName,email, password}}>
            {children}
        </AuthContext.Provider>
    )
}
