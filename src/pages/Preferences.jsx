
import Title from "../components/Title";
import { useState } from "react";
import { PreferencesBody, Header, Options, Choice, Finalizing } from "../components/PreferencesComponents";

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







