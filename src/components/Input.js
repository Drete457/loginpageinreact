import React from 'react';
import '../login.css';
import {MdVisibility} from 'react-icons/md';

export default function Input(props){

	let iconVisibility = null;

	if (props.type === 'password') {
		iconVisibility = (
			<MdVisibility className='iconVisibility'/>
		);
	}

	return (
		<div className="Input">
			<input 
				id={props.name}
				autoComplete="false"
				required
				type={props.type}
				placeholder={props.placeholder}
			/>
			{iconVisibility}
		</div>
	);
}
