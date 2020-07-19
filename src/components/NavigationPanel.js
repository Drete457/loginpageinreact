import React from 'react';
import '../login.css';
import {MdArrowBack} from 'react-icons/md';
import {FaCircle} from 'react-icons/fa';

export default function NavigationPanel(props){

	return (
		<div className='NavigationPanel'>
			<MdArrowBack onClick={props.initialState} className='back'/>
			<div className='dots'>
				<FaCircle className='dotSelected' />
				<FaCircle className='dot' />
				<FaCircle className='dot' />
			</div>
			<div style={{flex: 2}}></div>
		</div>
	);
}
