import { useNavigate } from 'react-router-dom';
import Title from '../components/TitleComponent';
import { useState, useContext, React } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UserContext from '../context/UserContext';
import axios from 'axios';
import { SignContent, Submit, AuthBody } from '../components/authComponent';
import picture from '../assets/images/leitor.jpg';
export default function SignIn(){
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { token, setToken } = useContext(UserContext);
	const localToken = localStorage.getItem('token');

	function login () {
		const body = {
			email,
			password,
		};     
		const promise = axios.post('https://litera-books-back.vercel.app/signin', body);
		promise
			.then(res => {
				toast.success('Login realizado com sucesso!');
				setToken(res.data);
				localStorage.setItem('token', res.data);
				navigate('/timeline');
			})
			.catch(res => {
				toast.error('Você inseriu dados inválidos!');
			});
	}
	return (
		<AuthBody>
			<ToastContainer />
			<SignContent>
				<img src={picture} alt='' />
				<h2> Login</h2>
				<h3> Email</h3>
				<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
				<h3> Senha</h3>
				<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
				<Submit data-cy="submit" onClick={login}>
                Entrar
				</Submit>
				<h3> Ainda não possui uma conta? <span onClick={() => (navigate('/signup'))}>  Cadastre-se</span></h3>
			</SignContent>
		</AuthBody>
	);
}



