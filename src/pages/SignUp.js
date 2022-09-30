import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { useState } from 'react';
import axios from "axios";
export default function SignUp(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
    <SignUpBody>
        <Title />
        <SignUpContent>
            <h3> Insira seu nome</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="nome" />
            <h3> Email</h3>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <h3> Senha</h3>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
            <h3> Confirme sua senha</h3>
            <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirme a senha" />
           <Button onClick={register}>
                Criar conta
           </Button>
           
        </SignUpContent>
    </SignUpBody>
)
}

const SignUpBody = styled.div` 

`
const SignUpContent = styled.div`
width: 50%;
margin: 0px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
input {
    width: 326px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: black;
    margin-left: 18px;
    margin-bottom: 13px;
}
h3{
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    margin-top:20px;
    margin-left: 18px;
}
button{
    width: 100px;
    height: 100px;
    border-radius: 30px;
}
`

const Button = styled.div`
    background-color: #8b4513;
    border:solid;
    border-width: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border-radius: 30px;
h4{
    
}
    
`