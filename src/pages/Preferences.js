
import Title from "../components/Title";
import styled from "styled-components";
import { useState } from "react";
export default function Preferences(){
	const [preferencesUser, setPreferencesUser] = useState([]);

	function getPreferences(e){
		let preference = e.value
		let exist = false
		for(let i = 0; i < preferencesUser.length; i++){
			let valuePreferences = preferencesUser[i]
			if(valuePreferences === e.value) {
				console.log("Caiu aqui")
				exist = true
			}
		}
		
		if(exist === true){
			setPreferencesUser(preferencesUser.filter(item => item !== preference));
		} else{
			setPreferencesUser([...preferencesUser, e.value])
		}
		console.log(preferencesUser)
		
	}

	function sendPreferences(){
		console.log(preferencesUser)
	}
	return(
	<> 
		<Title />
		<PreferencesBody>
			<Header>
				<h2> A seguir, escolha seus gêneros favoritos</h2>
				<h3> Nós vamos seus generos favoritos para melhorar nossas recomentações para você! </h3>
			</Header>
            <Options>
				<Choice>
					<input value={"biografia"} onClick={(e) => getPreferences(e.target)}  type="checkbox" id="name" />
					<h4> Biografia</h4>
				</Choice>
				<Choice>
					<input value={"infantil"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />
					<h4> Infantil</h4>
				</Choice>
				<Choice>
					<input value={"romances"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />
					<h4>Romances </h4>
				</Choice>
				<Choice>
					<input value={"mangás"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />
					<h4>Mangás </h4>
				</Choice>
				<Choice>
					<input value={"mistério"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />
					<h4>Mistério </h4>
				</Choice>
				<Choice>
					<input value={"ficção"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />
					<h4> Ficção</h4>
				</Choice>
				<Choice>
					<input value={"suspense"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />
					<h4>Suspense</h4>
				</Choice>
				<Choice>
					<input value={"ciencias"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />
					<h4> Ciências</h4>
				</Choice>
				<Choice>
					<input value={"espiritual"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />
					<h4> Espiritual</h4>
				</Choice>
            </Options>
			<Finalizing>
				{(preferencesUser.length >= 2) && (<button onClick={sendPreferences}> Continue</button>)}	
				{(preferencesUser.length < 2) && (<h3> Escolhe ao menos 2 gêneros para prosseguir! </h3>)}	
			</Finalizing>
		</PreferencesBody>
	</>
	);
}

const PreferencesBody = styled.div`
width: 70%;
margin:0 auto;
`;

const Header = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2{
	font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 30px;
	color: #8b4513;
}
h3{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	height: 80px;
	background-color: #90ee90;
	margin-top:30px;
	font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 20px;
	color: black;
	border-radius: 20px;
	border-color: red;
	padding-left: 20px;
}
`;

const Options = styled.div`
margin-top: 40px;
display: flex;
flex-wrap: wrap;
h4{
	margin: 10px;
}
`

const Choice = styled.div`
margin-right: 10px;
display: flex;
border:solid;
border-width:1px;
width: 50%;
margin: 0 auto;
background-color: #e6e6fa;
`

const Finalizing = styled.div` 
margin-top: 40px;
display: flex;
align-items: center;
justify-content: center;


h3{
	background-color: #e6e6fa;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
}
button{
	height: 50px;
	background-color: green;
	width: 30%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 20px;
	border-radius: 10px;
}
`