import Title from '../components/TitleComponent';
import { useState, useEffect, React } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {CommunityBody, UserProfile, UserProfileInfos, Users} from '../components/CommunityComponent';

function ListUser({id, name, favoriteBook, favoriteAuthor, image, navigate}) {
	function seeMoreInfos(){
		navigate(`/user/${id}`);
	}
   
	return (
		<Users>
			<UserProfile>
				<img src={image} alt='' />
				<UserProfileInfos>
					<h3> {name} </h3>
					<h4> Livro preferido: {favoriteBook}</h4>
					<h4> Autor preferido: {favoriteAuthor}</h4>
					<h5 onClick={seeMoreInfos}> Veja as ultimas resenhas de {name}</h5>
				</UserProfileInfos>
			</UserProfile>
		</Users>
	);
}

export default function Community(){
	const navigate = useNavigate();
	const [usersInfos, setUsersInfos] = useState([]);

	useEffect(() => {
		getUsers();
	}, []);
	const localToken = localStorage.getItem('token');
	const config = {
		headers: {
			Authorization: `Bearer ${localToken}`
		}
	};
	async function getUsers(){
		const promise = axios.get('https://litera-books-back.vercel.app/infos/everyUsers', config);
		promise
			.then(res => {
				setUsersInfos(res.data);
			})
			.catch(res => {
				alert('an error has occurred in requistion ');
			}); 
	}

	return(
		<>
			<Title />
			<CommunityBody>
				<h2> Conheça novos amigos e compartilhem experiências literárias</h2>
			</CommunityBody>
			{usersInfos.map((user) => <ListUser navigate={navigate} key={user.id} image={user.image} name={user.name} genres={user.genres} favoriteBook={user.favoriteBook} favoriteAuthor={user.favoriteAuthor}  />)}
    
		</>
	);
}