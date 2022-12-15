import { Sidebar, Goal, GoalInfos, NextReading, NextReadingInfo } from './timelineComponent';
import { useState, useEffect, React } from 'react';
import challange from '../assets/images/challange.jpg';
import nextreading from '../assets/images/next.jpg';
import axios from 'axios';
import styled from 'styled-components';

export default function LeftBar(){
	const [next, setNext] = useState('a');
	const [countBooks, setCountBooks] = useState(2);
	const [title, setTitle] = useState('Steve Jobs');
	const localToken = localStorage.getItem('token');

	const config = {
		headers: {
			Authorization: `Bearer ${localToken}`
		}
	};
	useEffect(() => {
		getUsersInfo();
	}, []);

	async function getUsersInfo(){
       
		const promise = axios.get('https://litera-books-back.vercel.app/infos/user', config);
		promise
			.then(res => {
            
				setCountBooks(res.data.readingGoals);
				setNext(res.data.nextReading);
			})
			.catch(res => {
				console.log(res);
				alert('Você inseriu dados inválidos');
			}); 


	}
	return(
		<Sidebar>
			<SidebarContent>
				<Goal>
					<h3> Desafio de leitura 2022</h3>
					<GoalInfos>
						<img src={challange} alt='' />
						<h3> Meta de ler {countBooks} livros!</h3>
					</GoalInfos>
				</Goal>
				<hr />
				{(next !== '') && (
					<NextReading>
						<h3> Próxima leitura</h3>
						<NextReadingInfo>
							{(next === null || next === '') && (<>
								<img src={nextreading} alt='' />
								<h3> Você ainda não definiu qual a próxima leitura! :( </h3>
                                        
							</>)}
							{(next !== null && next !== '') && (<> 
								<img src={nextreading} alt='' />
								<h3> {title}</h3>
							</>)}
                                
						</NextReadingInfo>
                            
					</NextReading>
				)}
				{(next === '') && (
					<NextReading>
						<h3> Próxima leitura! </h3>
						<NextReadingInfo>
							<img src={nextreading} alt='' />
							<h3> Defina o próximo livro que você lerá!</h3>
						</NextReadingInfo>
                            
					</NextReading>
				)}
			</SidebarContent>
		</Sidebar>
	);
}
const SidebarContent = styled.div`
background-color: white;
border-radius: 10px;
border:solid;
border-color:#8b4513;
border-width: 1px;
@media (max-width: 600px) {
  width: 80%;
  height: 25%;
  }
`;