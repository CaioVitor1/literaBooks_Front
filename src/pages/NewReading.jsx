import { useState } from "react";
import styled from "styled-components";
import Title from "../components/TitleComponent";

export default function NewReading(){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [review, setReview] = useState("");
    const [bookImage, setBookImage ] = useState("");
    const [genre, setGenre] = useState("");

    function sendReview(){
        console.log(genre)
        console.log(title)
        console.log(author)
        console.log(review)
        console.log(bookImage)


    }
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

            <h3> Selecione o gênero do livro:</h3>
            <select name="select">
                <option value={"romance"} onClick={() => setGenre("romance")}> Romance</option>
                <option value={"infantil"} onClick={(e) => setGenre("infantil")}> Terror</option>
                <option value={"biografia"} onClick={(e) => setGenre("biografia")}> Biografico</option>
                
            </select>    

            <h3> Insira o que você achou do livro:</h3>
            <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="Resenha" />

            <RegisterBook onClick={sendReview}>
                <h4>Registrar</h4>
            </RegisterBook>
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
margin-bottom: 30px;
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
margin: 20px 0px 10px 18px;

}
textarea{
margin: 0px 0px 20px 18px;
width: 60vh;
height: 60vh;
font-size: 17px;
}
select{
margin: 10px 0px 18px 10px;

}
`

const RegisterBook = styled.div`
margin: 0 auto;
width: 35vh;
height: 7vh;
border-radius: 10px;
background-color: #3cb371;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 600px) {
    margin-top: 30px;
  }
h4{
font-size: 20px;
color:white;
}
` 