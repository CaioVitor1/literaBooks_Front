import { useState } from "react";
import styled from "styled-components";
import Title from "../components/TitleComponent";

export default function NewReading(){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [review, setReview] = useState("");
    const [bookImage, setBookImage ] = useState("")
    return(
        <>
        <Title />
        <NewReadingBody>
            <h2> Cadastre uma nova resenha</h2>
        </NewReadingBody>
        <NewReadingInfos>
            <h3> Insira o título do livro</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="nome" />
            
            <h3> Foto do livro</h3>
            <input type="text" value={bookImage} onChange={(e) => setBookImage(e.target.value)} placeholder="Foto de perfil" />

            <h3> Autor</h3>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Autor" /> 

            <h3> Insira o que você achou do livro:</h3>
            <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="Resenha" />

            <select name="select">
                <option value='romance'> Romance</option>
                <option value='terror'> Terror</option>
                <option value='biografico'> Biografico</option>
                
            </select>        
        </NewReadingInfos>
        </>
    )
}

const NewReadingBody = styled.div`
border:solid;
margin: 0 auto;
display: flex;
justify-content: center;
border-width: 1px 0px;
border-color: #8b4513;
width: 90%;
h2{
font-size: 30px;
color: #8b4513;
}

`
const NewReadingInfos = styled.div`
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
textarea{
margin-left: 18px;
width: 60vh;
height: 60vh;
font-size: 17px;
}
`