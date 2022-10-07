import Title from "../components/TitleComponent";
import jobs from "../assets/images/jobs.jpg"
import { useState } from "react";
import {CommunityBody, UserProfile, UserProfileInfos, Users} from "../components/CommunityComponent"
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