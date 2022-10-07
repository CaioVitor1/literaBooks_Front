import styled from "styled-components";
import Title from "../components/TitleComponent";
import jobs from "../assets/images/jobs.jpg"
import { useState } from "react";

function ListUser({name, genres, book, author}) {
return (
<Users>
    <UserProfile>
        <img src={jobs} alt='' />
        <UserProfileInfos>
            <h3> {name} </h3>
            <h4> Gêneros preferidos: {genres} </h4>
            <h4> Livro preferido: {book}</h4>
            <h4> Autor preferido: {author}</h4>
            <h5> Veja as ultimas resenhas de Caio Vitor</h5>
        </UserProfileInfos>
    </UserProfile>
</Users>
)
}

export default function Community(){
    const [usersInfos, setUsersInfos] = useState([
        {name: "Caio Vitor",
         genres: "terror, romance",
         book: "Um dia",
         author: "Nicholas"
        },
        {name: "Caio Vitor",
         genres: "terror, romance",
         book: "Um dia",
         author: "Nicholas"
        },
        {name: "Caio Vitor",
         genres: "terror, romance",
         book: "Um dia",
         author: "Nicholas"
        }
    ])
    return(
        <>
        <Title />
        <CommunityBody>
            <h2> Conheça novos amigos e compartilhem experiências literárias</h2>
        </CommunityBody>
        {usersInfos.map((user) => <ListUser name={user.name} genres={user.genres} book={user.book} author={user.author}  />)}
    
        </>
    )
}

const CommunityBody = styled.div`
h2{
font-size: 30px;
color: #8b4513;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
}

`

const Users = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 30px;

`

const UserProfile = styled.div`
background-color: #dcdcdc;
width: 60%;
border-radius: 20px;
display: flex;

img{
width: 30vh;
height: 30vh;
border-radius: 100px;
}
`

const UserProfileInfos = styled.div`
margin-top:10px;
display: flex;
flex-direction: column;
align-items: center;
h3{
font-size: 25px;
margin-bottom: 10px;
}
h4{
font-size:20px;
}
h5{
margin-top: 60px;
color:blue;
font-size: 15px;
}
`