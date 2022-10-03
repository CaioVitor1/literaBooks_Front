import { useState } from "react";
import Title from "../components/TitleComponent";
import oneDay from "../assets/images/oneDay.jpg";
import LeftBar from "../components/LeftBarComponent";
import {Reviews, Content, MybookBody} from "../components/MyBookComponent"
import { useNavigate } from "react-router-dom";

function ListReviews({id, title, genre, author}){
    const navigate = useNavigate();
    return(
        <Reviews>
            <h3> Titulo</h3>
            <h4> Gênero: romance</h4> 
             <h4> Autor: Nicholas</h4> 
            <img src={oneDay} alt='' />
            <h4 onClick={() => navigate('/bookdescription')}> Veja mais</h4>
        </Reviews>
    )
}

export default function MyBook(){
    const [myReviews, setMyReviews] = useState([{
        id: 1,
        title: "Um dia",
        genre: "Romance",
        author: "Nicholas"
        }, 
        {
        id:2,
        title: "Um dia",
        genre: "Romance",
        author: "Nicholas"
        },
        {
        id:3,
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
                    {myReviews.map((data) => <ListReviews id={data.id} title={data.title} genre={data.genre} author={data.author} />)}
                </Content>
            )}
            
        </MybookBody>
        </>
    )
}

