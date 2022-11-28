import { useNavigate } from "react-router-dom";
import Title from "../components/TitleComponent";
import { useState, useContext, useEffect } from 'react';
import axios from "axios";
import UserContext from "../context/UserContext"
import { SignContent, Button } from "../components/authComponent";
import styled from "styled-components";
import user from "../assets/images/default-user.png"

export default function SignUp(){
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("")
    const [preview, setPreview] = useState()

    const { token, setToken } = useContext(UserContext);
    
    useEffect(() => {
        if(image){
            const reader = new FileReader()
            reader.onload = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(image)
        } else {
            setPreview("")
        }

    }, [image])


    async function register () {
        console.log("a imagem é: ")
        console.log(image)
        
        const formData = new FormData();
        formData.append('image', image);
        console.log(formData)
       
       const headers = {
        'headers': {
            'Content-Type': 'application-json'
        }
       }
       const body = {
        name,
        email,
        password,
        image: image.name
    }
       console.log(body)
 
        await axios.post("http://localhost:5000/upload", formData, headers)
       .then((res) => {
        console.log(res.data.content)
        
       }).catch((err) => {
        console.log(err)
        alert("Não foi possível realizar o upload dessa imagem. Tente novamente!")
        return
       })
      
        const promise = axios.post("http://localhost:5000/signup", body)
        promise
        .then(res => {
            console.log(res.data)
            setToken(res.data)
            localStorage.setItem("token", res.data);
            navigate('/favoriteGenre');
        })
        .catch(res => {
            
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
            
            <h3> Senha</h3>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
            <h4>A senha precisa conter 8 digitos, letras maiúsculas, minúsculas e um caractere especial </h4>
            <h3> Selecione sua foto do perfil</h3> <br />
            <Upload>
                <input accept="image/*" type="file" name="imagem" onChange={(e) => setImage(e.target.files[0])}/> <br /> 
                {(preview === "") && (<img src={user} alt=''/>)}
                {(preview !== "") && (<img src={preview} alt='' />)}
            </Upload>
           
            
            
           <Button data-cy="submit" onClick={register}>
                Criar conta
           </Button>
           
        </SignContent>
    </>
)
}

const Upload = styled.div` 

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
input{
    margin-top: 20px;
    background-color:#fafad2; 
}
img{
    
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
}
`



