import React, { Component, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

export default function PatientUI(props) {
	let location = useLocation();
	let currentUser = location.state.username;
	let currentPassword = location.state.password;

	const [apps, setApps] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (!loaded) {
			getApp().then(result => {
				setLoaded(true);
			});
		}
	})

	async function getApp() {
		//get user id from login
		let item = { username: currentUser, password: currentPassword };
		let result = await fetch("http://localhost:8000/users/login", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(item)
		});
		result = await result.json();
		localStorage.setItem("user-info", JSON.stringify(result));
		let patientID = result.id;

		//use patient id to obtain appointments
		let apps = await fetch(`http://localhost:8000/appointments/patient/${patientID}`, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
		});
		apps = await apps.json();
		let status = apps.status;
		localStorage.setItem("user-info", JSON.stringify(apps));

		console.log(apps);
		setApps(apps.data);
	}

	const showApp = () => {
		var elements = []

		for (let index in apps) {
			var app = apps[index];
			elements.push(<div>
				<p>Date: {app.date}</p>
				<p>Time: {app.start_time}</p>
				<p>End Time: {app.end_time}</p>
				<p>Appointment Type: {app.appointment_type}</p>
				<p>Room: {app.room_number}</p>
				<p>Employee: {app.employee_id}</p>
				<br />
			</div>);
		}

		return elements;
	}

	return (
		<div>
			<h1>Welcome {currentUser}</h1>
			{loaded ? showApp() : <p>Loading...</p>}
		</div>
	)
}
