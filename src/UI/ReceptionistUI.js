import React, {Component} from 'react';
import NewUserUI from './NewUserUI';
import NewPatientUI from './NewUserUI';
import {useLocation} from "react-router-dom";

export default function ReceptionistUI() {
	let location = useLocation();
	return (
		<div>
			<h1>Welcome {location.state.username}</h1>
			<h2>Add User</h2>
			<NewUserUI></NewUserUI>
		</div>
	)
}
