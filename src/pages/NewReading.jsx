import { useState, React } from 'react';
import Title from '../components/TitleComponent';
import {NewReadingTitle, NewReadingInfos, RegisterBook,NewReadingBody } from '../components/NewReadingComponent';
import axios from 'axios';
import { Submit } from '../components/authComponent';
import { useNavigate } from 'react-router-dom';
export default function NewReading(){
	const [title, setTitle] = useState('');
	const [image, setImage ] = useState('');
	const [author, setAuthor] = useState('');
	const [genre, setGenre] = useState('');
	const [description, setDescription] = useState('');
	const navigate = useNavigate();
	const localToken = localStorage.getItem('token');
	const config = {
		headers: {
			Authorization: `Bearer ${localToken}`
		}
	};

	function sendReview(){
		let genreId = 1;
    
		if(genre === 'biografia') {genreId = 1;}
		if(genre === 'infantil') {genreId = 2;}
		if(genre === 'romance')  {genreId = 3;}
		if(genre === 'mangas'){genreId = 4;} 
		if (genre === 'misterio'){genreId = 5;} 
		if(genre === 'ficcao') {genreId = 6;} 
		if(genre === 'suspense') {genreId = 7;} 
		if (genre === 'ciencias'){genreId = 8;}
		if(genre === 'espiritual') {genreId = 9;} 
		const body = {
			title,
			author,
			description,
			image,
			genreId
		};
		const promise = axios.post('https://litera-books-back.vercel.app/reviews/register', body, config);
		promise
			.then(res => {
           
				navigate('/profile');
			})
			.catch(res => {
				alert('an error has occurred in requistion ');
			}); 

	}
  
 
	return(
		<NewReadingBody>
			<Title />
			<NewReadingTitle>
				<h2> Cadastre uma nova resenha</h2>
			</NewReadingTitle>
			<NewReadingInfos>
				<h3> Nome</h3>
				<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Insira o título do livro" />
            
				<h3> Foto do livro</h3>
				<input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Insira uma url" />

				<h3> Autor</h3>
				<input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Insira o nome do autor" /> 

				<h3> Selecione o gênero do livro:</h3>
				<select name="select">
					<option value={'romance'} onClick={() => setGenre('romance')}> Romance</option>
					<option value={'infantil'} onClick={(e) => setGenre('infantil')}> Terror</option>
					<option value={'biografia'} onClick={(e) => setGenre('biografia')}> Biografico</option>
					<option value={'mangas'} onClick={(e) => setGenre('mangas')}> Mangás</option>
					<option value={'misterio'} onClick={(e) => setGenre('misterio')}> Mistério</option>
					<option value={'ficcao'} onClick={(e) => setGenre('ficcao')}> Ficção</option>
					<option value={'suspense'} onClick={(e) => setGenre('suspense')}> Suspense</option>
					<option value={'ciencias'} onClick={(e) => setGenre('ciencias')}> Ciências</option>
					<option value={'espiritual'} onClick={(e) => setGenre('espiritual')}> Espiritual</option>
				</select>    

				<h3> Insira o que você achou do livro:</h3>
				<textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Resenha" />

				<Submit onClick={sendReview}>
					<h4>Registrar</h4>
				</Submit>
			</NewReadingInfos>
		</NewReadingBody>
	);
}

