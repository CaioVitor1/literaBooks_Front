import Title from "../components/TitleComponent";
import styled from "styled-components";
import jobs from "../assets/images/jobs.jpg";
import { useState } from "react";
import {Reviews, Content, MybookBody} from "../components/MyBookComponent"
import LeftBar from "../components/LeftBarComponent";
//import MyBook from "./MyBook";
import oneDay from "../assets/images/oneDay.jpg";
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

export default function ProfileUser(){
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
            <ProfileContent>
                <ProfileBody>
                    <img src={jobs} alt='' />
                    <ProfileInfos>
                        <h2>Caio Vitor</h2>
                        <h3> Gêneros preferidos: xxxxx</h3>
                        <h3> Meta de leitura: xxxx</h3>
                    </ProfileInfos>
                </ProfileBody>
                
            </ProfileContent>
            <ReviewsProfile>
                {(myReviews.length === 0) && (<h3> O usuário ainda não escreveu nenhuma resenha</h3> )} 
                {(myReviews.length !== 0) && (<>
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
        </>)} 
            </ReviewsProfile>
        </>
    )
}


const ProfileContent = styled.div`
display: flex;
margin-left: 60px;
border:solid;
border-radius: 20px;
background-color: #e6e6fa;
`

const ProfileBody = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin: 0 auto;
img{
    width: 30vh;
    height: 30vh;
    border-radius: 100px;
    border:solid;
}
`

const ProfileInfos = styled.div`
margin-left: 40px;
display: flex;
flex-direction: column;
align-items: center;

h2{
font-size: 30px;
}  
h3{
font-size: 20px;
}
`

const ReviewsProfile = styled.div`
margin-top: 30px;
`

