import React, {Component} from 'react';
import NewUserUI from './NewUserUI';
import NewPatientUI from './NewUserUI';

export default function ReceptionistUI() {

	return (
		<div>
			<h1>Welcome, [insert receptionist name here]</h1>
			<h2>Add User</h2>
			<NewUserUI></NewUserUI>
		</div>
	)
}
