import Title from "../components/TitleComponent";
import jobs from "../assets/images/jobs.jpg";
import { useState } from "react";
import LeftBar from "../components/LeftBarComponent";
import oneDay from "../assets/images/oneDay.jpg";
import { useNavigate } from "react-router-dom";
import {NewReading, 
        ProfileBody,
        ProfileContent, 
        ProfileInfos, 
        ReviewsProfile,
        Content,
        MybookBody,
        Reviews } from "../components/ProfileComponent"

function ListReviews({id, title, genre, author, navigate}){
    
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
    const navigate = useNavigate();
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
                            {myReviews.map((data) => <ListReviews navigate={navigate} id={data.id} title={data.title} genre={data.genre} author={data.author} />)}
                        </Content>
                    )}
                    <NewReading>
                       <h4 onClick={() => navigate('/newreading')}> Nova Leitura! </h4> 
                    </NewReading>
                    
                </MybookBody>
        </>)} 
            </ReviewsProfile>
        </>
    )
}


