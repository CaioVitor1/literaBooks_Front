import Title from "../components/TitleComponent";
import { useState, useEffect } from "react";
import LeftBar from "../components/LeftBarComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {NewReading, 
        ProfileBody,
        ProfileContent, 
        ProfileInfos, 
        ReviewsProfile,
        Content,
        MybookBody,
        Reviews } from "../components/ProfileComponent"

function ListReviews({id, title, genre, author, navigate, image}){
    let bookId = id
    return(
        <Reviews>
            <h3> {title}</h3>
            <h4> Gênero: {genre}</h4> 
             <h4> Autor: {author}</h4> 
            <img src={image} alt='' />
            <h4 onClick={() => navigate(`/bookdescription/${bookId}`)}> Veja mais</h4>
        </Reviews>
    )
}

export default function ProfileUser(){
    const navigate = useNavigate();
    const localToken = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${localToken}`
        }
    };
    const [myReviews, setMyReviews] = useState([]);
    const [infoUser, setInfoUser] = useState([]);
    useEffect(() => {
        getReviewsUser();
    }, []);
    useEffect(() => {
        getInfoUser();
    }, []);

    async function getReviewsUser(){
        const promise = axios.get("https://literabooks.herokuapp.com/reviews/user", config)
        promise
        .then(res => {
           
            setMyReviews(res.data)
        })
        .catch(res => {
            alert("an error has occurred in requistion ")
        }) 
    }
    async function getInfoUser(){
        const promise = axios.get("https://literabooks.herokuapp.com/infos/users", config)
        promise
        .then(res => {
          
            setInfoUser(res.data)
        })
        .catch(res => {
            alert("an error has occurred in requistion ")
        }) 
    }
    console.log(infoUser)
    return(
        <>
            <Title />
            <ProfileContent>
                <ProfileBody>
                    <img src={infoUser.image} alt='' />
                    <ProfileInfos>
                        <h2> {infoUser.name}</h2>
                        <h3> Livro favorito: {infoUser.favoriteBook}</h3>
                        <h3> Autor preferido: {infoUser.favoriteAuthor}</h3>
                    </ProfileInfos>
                </ProfileBody>
                
            </ProfileContent>
            <ReviewsProfile>
              
                <MybookBody>
                    <LeftBar />
                    {(myReviews.length === 0) && (<h2> Você não cadastrou nenhuma resenha ainda! 🙁</h2>)}
                    {(myReviews.length !== 0) && (
                        <Content>
                            <h3> Suas resenhas:</h3>
                            {myReviews.map((data) => <ListReviews navigate={navigate} image={data.image} id={data.id} title={data.title} genre={data.genre} author={data.author} />)}
                        </Content>
                    )}
                    <NewReading>
                       <h4 onClick={() => navigate('/newreading')}> Nova Leitura! </h4> 
                    </NewReading>
                    
                </MybookBody>
 
            </ReviewsProfile>
        </>
    )
}


