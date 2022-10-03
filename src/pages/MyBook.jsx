import { useState } from "react";
import Title from "../components/TitleComponent";
import oneDay from "../assets/images/oneDay.jpg";
import LeftBar from "../components/LeftBarComponent";
import {Reviews, Content, MybookBody} from "../components/MyBookComponent"
function ListReviews({title, genre, author}){
    return(
        <Reviews>
            <h3> Titulo</h3>
            <h4> Gênero: romance</h4> 
             <h4> Autor: Nicholas</h4> 
            <img src={oneDay} alt='' />
            <h4 onClick={() => console.log("clique")}> Veja mais</h4>
        </Reviews>
    )
}

export default function MyBook(){
    const [myReviews, setMyReviews] = useState([{
        title: "Um dia",
        genre: "Romance",
        author: "Nicholas"
        }, 
        {
        title: "Um dia",
        genre: "Romance",
        author: "Nicholas"
        },
        {
        title: "Um dia",
        genre: "Romance",
        author: "Nicholas"
        }
    ]);
    return(
        <>
        <Title />
        <MybookBody>
            <LeftBar />
            {(myReviews.length === 0) && (<h2> Você não cadastrou nenhuma resenha ainda! 🙁</h2>)}
            {(myReviews.length !== 0) && (
                <Content>
                    <h3> Suas resenhas:</h3>
                    {myReviews.map((data) => <ListReviews title={data.title} genre={data.genre} author={data.author} />)}
                </Content>
            )}
            
        </MybookBody>
        </>
    )
}

