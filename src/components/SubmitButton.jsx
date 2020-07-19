import React from 'react';
import '../login.css';
import {MdArrowForward} from 'react-icons/md';

export default function SubmitButton(props){

	return (
		<div className={'submitButton'}>
			<button className={props.type==='signIn' ? 'submitSignIn' : 'submitSignUp'}><MdArrowForward/></button>
		</div>
	);
} 
