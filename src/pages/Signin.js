import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { useState } from 'react';
import axios from "axios";
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
    <SignInBody>
        <Title />
        <SignInContent>
            <h3> Email</h3>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <h3> Senha</h3>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
           <Button onClick={login}>
                Entrar
           </Button>
           
        </SignInContent>
    </SignInBody>
)
}

const SignInBody = styled.div` 

`
const SignInContent = styled.div`
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