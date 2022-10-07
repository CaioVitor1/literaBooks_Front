import { useState } from "react";
import Title from "../components/TitleComponent";
import {NewReadingBody, NewReadingInfos, RegisterBook, } from "../components/NewReadingComponent";

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

