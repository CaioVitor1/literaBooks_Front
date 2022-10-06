import { useNavigate } from "react-router-dom";
import Title from "../components/TitleComponent";
import { useState } from 'react';
import axios from "axios";
import { SignContent, Button } from "../components/authComponent";
export default function SignUp(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profileImage, setProfileImage ] = useState("")

    function register () {
        const body = {
            name,
            email,
            password,
            confirmPassword
        }
       
        const promise = axios.post("http://localhost:5000/signup", body)
        promise
        .then(res => {
            navigate('/signin');
        })
        .catch(res => {
            console.log("deu ruim")
            alert("Você inseriu dados inválidos ou já cadastrados. A senha precisa conter 8 digitos, letras maiúsculas, minúsculas e um caractere especial")
        })
    }

return (
    <>
        <Title />
        <SignContent>
            <h3> Insira seu nome</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="nome" />
            
            <h3> Email</h3>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
           
            <h3> Foto de perfil</h3>
            <input type="text" value={profileImage} onChange={(e) => setProfileImage(e.target.value)} placeholder="Foto de perfil" />
            
            <h3> Senha</h3>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
           
            <h3> Confirme sua senha</h3>
            <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirme a senha" />
           <Button onClick={register}>
                Criar conta
           </Button>
           
        </SignContent>
    </>
)
}



