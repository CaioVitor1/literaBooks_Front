
import Title from '../components/TitleComponent';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, React } from 'react';
import axios from 'axios';
import {NewReading, 
	ProfileBody,
	ProfileContent, 
	ProfileInfos, 
	ReviewsProfile,
	Content,
	MybookBody,
	Reviews, 
	WithoutReview} from '../components/ProfileComponent';

function ListReviews({id, title, genre, author, navigate, image}){
	const bookId = id;
	return(
		<Reviews>
			<h3> {title}</h3>
			<h4> Gênero: {genre}</h4> 
			<h4> Autor: {author}</h4> 
			<img src={image} alt='' />
			<h4 onClick={() => navigate(`/bookdescription/${bookId}`)}> Veja mais</h4>
		</Reviews>
	);
}

export default function OtherUsers(){
  
	const { idUser } = useParams();
	const [myReviews, setMyReviews] = useState([]);
	const [infoUser, setInfoUser] = useState([]);
	const [url, setUrl] = useState('https://litera-books-back.vercel.app/upload/'); 
  
	const localToken = localStorage.getItem('token');
	const navigate = useNavigate();
	const config = {
		headers: {
			Authorization: `Bearer ${localToken}`
		}
	};
	useEffect(() => {
		getReviewsUser();
	}, []);
	useEffect(() => {
		getInfoUser();
	}, []);

	async function getReviewsUser(){
		const promise = axios.get(`https://litera-books-back.vercel.app/reviews/user/${idUser}`, config);
		promise
			.then(res => {
            
				setMyReviews(res.data);
			})
			.catch(res => {
				alert('an error has occurred in requistion ');
			}); 
	}
	async function getInfoUser(){
		const promise = axios.get(`https://litera-books-back.vercel.app/infos/users/${idUser}`, config);
		promise
			.then(res => {
           
				setInfoUser(res.data);
			})
			.catch(res => {
				alert('an error has occurred in requistion ');
			}); 
	}
    
    
	return(
		<>
			<Title />
			<ProfileContent>
				<ProfileBody>
					<img src={infoUser.image} alt='' />
					<ProfileInfos>
						<h2>{infoUser.name}</h2>
						<h3> Livro favorito: {infoUser.favoriteBook}</h3>
						<h3> Autor preferido:{infoUser.favoriteAuthor} </h3>
					</ProfileInfos>
				</ProfileBody>
                
			</ProfileContent>
			<ReviewsProfile>
				<MybookBody>
					{(myReviews.length === 0) && (<WithoutReview><h2> {infoUser.name} não cadastrou nenhuma resenha ainda! 🙁</h2></WithoutReview>)}
					{(myReviews.length !== 0) && (
						<Content>
							<h3> Últimas resenhas de {infoUser.name}:</h3>
							{myReviews.map((data) => <ListReviews navigate={navigate} image={data.image} key={data.id} id={data.id} title={data.title} genre={data.genre} author={data.author} />)}
						</Content>
					)}
                  
				</MybookBody>

			</ReviewsProfile>
		</>
	);
}


