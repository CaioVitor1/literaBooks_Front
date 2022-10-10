import { useNavigate } from "react-router-dom";
import Title from "../components/TitleComponent";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext"
import axios from "axios";
import { SignContent, Button } from "../components/authComponent";

export default function SignIn(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { token, setToken } = useContext(UserContext);
    const localToken = localStorage.getItem("token");
  
    function login () {
        const body = {
            email,
            password,
        }
        
       
        const promise = axios.post("https://literabooks.herokuapp.com/signin", body)
        promise
        .then(res => {
           
            setToken(res.data)
            localStorage.setItem("token", res.data);
            navigate('/timeline');
        })
        .catch(res => {
           
            alert("Você inseriu dados inválidos")
        })
    }

return (
    <>
        <Title />
        <SignContent>
            <h3> Email</h3>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <h3> Senha</h3>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
           <Button data-cy="submit" onClick={login}>
                Entrar
           </Button>
           
        </SignContent>
    </>
)
}



