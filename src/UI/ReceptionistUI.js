import React, { Component } from 'react';
import NewPatientUI from './NewPatientUI';

export default class ReceptionistUI extends Component {
	render() {
		return (
			<div>
				<h1>Welcome, [insert receptionist name here]</h1>
				<button>New Patient</button>
				<NewPatientUI></NewPatientUI>
			</div>
		)
	}
}