import { useNavigate } from "react-router-dom";
import Title from "../components/TitleComponent";
import { useState, useContext, useEffect } from 'react';
import axios from "axios";
import UserContext from "../context/UserContext"
import { SignContent, Submit, AuthBody} from "../components/authComponent";
import styled from "styled-components";
import user from "../assets/images/default-user.png"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function SignUp(){
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("")
    const [preview, setPreview] = useState()
    const { token, setToken } = useContext(UserContext);
    let url = ""
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
        formData.append('file', image);
        formData.append('upload_preset', 'literaBooks')
        console.log(formData)
       
       const headers = {
        'headers': {
            'Content-Type': 'application-json',
            
        }
       }
 
        await axios.post("https://api.cloudinary.com/v1_1/deuo6yxnu/image/upload", formData)
       .then((res) => {
        console.log(res.data.url)
        url = res.data.url
        
       }).catch((err) => {
        console.log(err)
        alert("Não foi possível realizar o upload dessa imagem. Tente novamente!")
        return
       })
       
     sendData()
        
    }
    async function sendData(){
        const body = {
            name,
            email,
            password,
            image: url
        }
    
            await axios.post("https://litera-books-back.vercel.app/signup", body)
            .then(res => {
                setToken(res.data)
                localStorage.setItem("token", res.data);
                navigate('/favoriteGenre');
            })
            .catch(res => {
                
                alert("Você inseriu dados inválidos ou já cadastrados. A senha precisa conter 8 digitos, letras maiúsculas, minúsculas e um caractere especial")
            })  
    }

return (
    <AuthBody>
        <SignUpInfo>
        <SignContent>
            <h2> Cadastro</h2>
            <h3> Nome</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Insira seu nome" />
            
            <h3> Email</h3>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            
            <h3> Senha</h3>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
            <h4>A senha precisa conter 8 digitos, letras maiúsculas, minúsculas e um caractere especial </h4>
           
            <Upload>
            <h3> Selecione sua foto do perfil</h3> <br />
                <input accept="image/*" type="file" name="image" onChange={(e) => setImage(e.target.files[0])}/> <br /> 
                {(preview === "") && (<img src={user} alt=''/>)}
                {(preview !== "") && (<img src={preview} alt='' />)}
            </Upload>
           
            
            
           <Submit data-cy="submit" onClick={register}>
                Criar conta
           </Submit>
           <h3> Já possui uma conta? Faça <span onClick={() => (navigate('/signin'))}>login</span></h3>
        </SignContent>

        </SignUpInfo>
      
    </AuthBody>
)
}

const Upload = styled.div` 

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
input{
    margin-top: 10px;
}
img{
    
    width: 150px;
    height: 150px;
   
}
`


 
const SignUpInfo = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`