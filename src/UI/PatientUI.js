import React, { Component } from 'react';

export default class PatientUI extends Component {
	render() {
		return (
			<div>
				<h1>Welcome, [insert patient name here]</h1>
				<h2>Records</h2>
				<h2>History</h2>
				<h2>Upcoming Appointments</h2>
			</div>
		)
	}
}