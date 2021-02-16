import React from 'react';

import './styles.css';

import Input from '../Input';

interface CardsProps{
	status: Number;
	os: String;
	client: String;
	user: String;
	problem: String;
	directed: String;
};

const Cards: React.FunctionComponent<CardsProps>= ({status, os, client, user, problem, directed}) =>{
	
return (
	<div className="cardContainer" style={{background: `var(--color-secundary-${status})`}}>
		<header style={{background: `var(--color-primary-${status})`}}>
			<h3 style={{ color: status === 0 ? '#fff' : status === 1 ? '#fff' : status ===  5 ? '#fff' : 'black'}}>OS: {os}</h3>
		</header>
			<div id='content'>
				<p>Cliente: {client}</p>
										
				<span>Usuário: {user}</span>

				<span>
					<p>Chamado:</p>
					<span>
						{problem}	
					</span>
				</span>            
		</div>

		<footer>
			<span>Direcionado a: {directed}</span>
		</footer>
	</div>
);
}

export default Cards;