import Title from "../components/TitleComponent";
import {Book,
        DescriptionBookBody, 
        DescriptionContent,
        Genres,
        WantRead,
        DescriptionImage} from "../components/DescriptionBookComponent";
import oneDay from "../assets/images/oneDay.jpg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";

export default function DescriptionBook(){
    const [book, setBook] = useState([oneDay]);
    const [infos, setInfos] = useState([]);
    const { bookId } = useParams();
    const localToken = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${localToken}`
        }
    };

    function addBook(){
        console.log("add")
    }
    useEffect(() => {
        getDescription();
    }, []);

    async function getDescription(){
        const promise = axios.get(`http://localhost:5000/reviews/${bookId}`, config)
        promise
        .then(res => {
            console.log("lá vai as infos: ")
            console.log(res.data);
            setInfos(res.data)
        })
        .catch(res => {
            alert("an error has occurred in requistion ")
        }) 
    }


    return(
        <>
            <Title />
            <DescriptionBookBody>
                <DescriptionImage>
                    <img src={infos.image} alt='' />
                    <WantRead onClick={addBook}>
                        <h4> Desejo ler</h4>
                    </WantRead>
                </DescriptionImage>
                
                <DescriptionContent>
                    <Book>
                        <h3> {infos.title}</h3>
                        <h3> {infos.author}</h3>
                        <h4> {infos.description}</h4>
                    </Book>
                    <Genres>
                        <h4> Outros gêneros: </h4>
                        <h5> Biografia</h5>
                        <h5> Romance</h5>
                        <h5> Infantil</h5>
                        <h5> Mangás</h5>
                        <h5> Mistério</h5>
                        <h5> Ficção</h5>
                        <h5> Suspense</h5>
                        <h5>Ciências </h5>
                        <h5> Espiritual </h5>
                    </Genres>
                    
                </DescriptionContent>
            </DescriptionBookBody>
        </>
    )
}

