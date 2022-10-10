import { useNavigate } from "react-router-dom";
import Title from "../components/TitleComponent";
import { useState, useContext } from 'react';
import axios from "axios";
import UserContext from "../context/UserContext"
import { SignContent, Button } from "../components/authComponent";

export default function SignUp(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("")
    const { token, setToken } = useContext(UserContext);
    function register () {
        const body = {
            name,
            email,
            password,
            image
        }
       console.log(body)
       
        const promise = axios.post("http://localhost:5000/signup", body)
        promise
        .then(res => {
            console.log(res.data)
            setToken(res.data)
            localStorage.setItem("token", res.data);
            navigate('/favoriteGenre');
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
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Foto de perfil" />
            
            <h3> Senha</h3>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
           
           <Button onClick={register}>
                Criar conta
           </Button>
           
        </SignContent>
    </>
)
}



