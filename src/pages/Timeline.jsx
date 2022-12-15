import Title from '../components/TitleComponent';
import { useEffect, useState, React } from 'react';
import LeftBar from '../components/LeftBarComponent';
import {TimelineBody, RecomendationsGenre,Recomendations,GenreName} from '../components/timelineComponent';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function RenderRecomendations({id, title, genre, image, genreId, navigate}){
	const bookId = id;
	if(genreId === 1){genre = 'Biografia';}
	if(genreId === 2){genre = 'Infantil';}
	if(genreId === 3){genre = 'Romances';}
	if(genreId === 4){genre = 'Mangás';}
	if(genreId === 5){genre = 'Mistério';}
	if(genreId === 6){genre = 'Ficção';}
	if(genreId === 7){genre = 'Suspense';}
	if(genreId === 8){genre = 'Ciências';}
	if(genreId === 9){genre = 'Espiritual';}
	return(
		<>
			<GenreName>
				<h2> {genre}</h2>
			</GenreName>
			<RecomendationsGenre onClick={() => navigate(`/bookrecommendation/${bookId}`)}>
				<h4> {title}</h4>
				<img src={image} alt=''/>
			</RecomendationsGenre>
		</>
	);
}

export default function Timeline(){
	const [first, setFirst] = useState([]);
	const [second, setSecond] = useState([]);
	const [thirt, setThirt] = useState([]);
	const localToken = localStorage.getItem('token');
	const config = {
		headers: {
			Authorization: `Bearer ${localToken}`
		}
	};  
	const navigate = useNavigate();   
	useEffect(() => {
		getRecommendations();
	}, []);
	async function getRecommendations(){
		const promise = axios.get('https://litera-books-back.vercel.app/getRecommendations', config);
		promise
			.then(res => {
				setFirst(res.data[0].first);
				setSecond(res.data[0].second);
				setThirt(res.data[0].thirt);
			})
			.catch(res => {
				alert('an error has occurred in requistion ');
				console.log(res.data);
			}); 
	}
	return(
		<>
			<Title />
			<TimelineBody>
				<LeftBar />
				<Recomendations>
					<h2> Leituras recomendadas para você! </h2>
					{first.map((option) => <RenderRecomendations navigate={navigate} key={option.id} genreId={option.genreId} title={option.title} genre={option.genre} image={option.image}  />)}
					{second.map((option) => <RenderRecomendations navigate={navigate} key={option.id} genreId={option.genreId} title={option.title} genre={option.genre} image={option.image}  />)}
					{thirt.map((option) => <RenderRecomendations navigate={navigate} key={option.id} genreId={option.genreId} title={option.title} genre={option.genre} image={option.image}  />)}       
				</Recomendations>          
			</TimelineBody>
		</>
	);
}