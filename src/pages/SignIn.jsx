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

    function login () {
        const body = {
            email,
            password,
        }
        console.log("lá vai o token")
       console.log(token)
        const promise = axios.post("http://localhost:5000/signin", body)
        promise
        .then(res => {
            console.log(res.data)
            setToken(res.data)
            localStorage.setItem("token", res.data);
            navigate('/timeline');
        })
        .catch(res => {
            console.log(res.data)
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
           <Button onClick={login}>
                Entrar
           </Button>
           
        </SignContent>
    </>
)
}



