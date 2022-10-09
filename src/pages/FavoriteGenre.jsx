
import { useState } from "react";
import { PreferencesBody, Header, Options, Choice, Finalizing } from "../components/PreferencesComponents";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Preferences(){
	const [preferencesUser, setPreferencesUser] = useState([]);
	const navigate = useNavigate()
	const localToken = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${localToken}`
        }
    }
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
		let body = {
			genre1: preferencesUser[0],
			genre2: preferencesUser[1],
			genre3:preferencesUser[2]
		}
		
       console.log(body)
        const promise = axios.post("http://localhost:5000/preferences/genres", body, config)
        promise
        .then(res => {
			console.log(res.data)
            navigate('/userspreferences');
        })
        .catch(res => {
            console.log("Something is wrong in requisiton")
            alert(res.data)
        }) 

	}
	return(
	<> 
		
		<PreferencesBody>
			<Header>
				<h2> A seguir, escolha seus gêneros favoritos</h2>
				<h3> Selecione seus gêneros favoritos para melhorar nossas recomentações para você! </h3>
			</Header>
            <Options>
				<Choice>
					{(<input value={"biografia"} onClick={(e) => getPreferences(e.target)}  type="checkbox" id="name" />)}
					
					<h4> Biografia</h4>
				</Choice>
				<Choice>
					{(<input value={"infantil"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />)}
					
					<h4> Infantil</h4>
				</Choice>
				<Choice>
					{(<input value={"romances"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />)}
					
					<h4>Romances </h4>
				</Choice>
				<Choice>
					{(<input value={"mangas"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />)}
					
					<h4>Mangás </h4>
				</Choice>
				<Choice>
					{(<input value={"misterio"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />)}
					
					<h4>Mistério </h4>
				</Choice>
				<Choice>
					{(<input value={"ficcao"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />)}
					
					<h4> Ficção</h4>
				</Choice>
				<Choice>
					{(<input value={"suspense"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />)}
					
					<h4>Suspense</h4>
				</Choice>
				<Choice>
					{(<input value={"ciencias"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />)}
					
					<h4> Ciências</h4>
				</Choice>
				<Choice>
				{(<input value={"espiritual"} onClick={(e) => getPreferences(e.target)} type="checkbox" id="name" />)}	
				
					<h4> Espiritual</h4>
				</Choice>
            </Options>
			<Finalizing>
				{(preferencesUser.length === 3) && (<button onClick={sendPreferences}> Continue</button>)}	
				{(preferencesUser.length !== 3) && (<h3> Escolha apenas 3 gêneros para prosseguir! </h3>)}	
			</Finalizing>
		</PreferencesBody>
	</>
	);
}







