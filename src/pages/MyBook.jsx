import { useState } from "react";
import styled from "styled-components";
import Title from "../components/TitleComponent";
import oneDay from "../assets/images/oneDay.jpg";
import LeftBar from "../components/LeftBarComponent";
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

const MybookBody = styled.div`
    display: flex;
h2{
    margin-top: 200px;
    font-style: normal;
    font-size: 30px;
    color: gray
}
>h3{
    margin-top: 50px;
    font-style: normal;
    font-size: 30px;
    color: #8b4513
}

`
const Content = styled.div`
margin-left: 20px;
h3{
   display: flex;
   justify-content: center;
   &:first-child{
    font-size: 30px;
    color: #8b4513;
    margin: 5px 0px 20px 0px;
   }
}

`
const Reviews = styled.div`
    border:solid;
    border-color: gray;
    border-radius: 10px;
    border-width: 1px 0px 1px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #dcdcdc;
    h3{
        margin: 20px 0px;
        font-size: 30px;
        
    }
    img{  
        margin-top: 10px;
        width: 30%;
        height: 30%;
    }
    h4{
        font-size: 20px;
        &:last-child{
            color:blue;
            margin: 10px 0px;
        
        }
    }
    
`