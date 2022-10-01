import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { useState } from 'react';
import axios from "axios";
import { SignContent, Button } from "../components/authComponent";

export default function SignIn(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    function login () {
        const body = {
            email,
            password,
        }
       
        const promise = axios.post("http://localhost:5000/signin", body)
        promise
        .then(res => {
            navigate('/signin');
        })
        .catch(res => {
            console.log("deu ruim")
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



