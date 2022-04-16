import React, { Component, useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function DentistUI() {
	let location = useLocation();

	let currentUser = location.state.username;
	let currentPassword = location.state.password;

	const [apps, setApps] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [name, setName] = useState(null);
	const [address, setAddress] = useState(null);

	useEffect(() => {
		if (!loaded) {
			getApp().then((result) => {
				setLoaded(true);
			});
		}
	});

	async function getApp() {
		//get user id from login
		let item = { username: currentUser, password: currentPassword };
		let result = await fetch('http://localhost:8000/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(item),
		});
		result = await result.json();
		localStorage.setItem('user-info', JSON.stringify(result));
		let patientID = result.id;

		//use patient id to obtain appointments
		let apps = await fetch(
			`http://localhost:8000/appointments/employee/${patientID}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
		);
		apps = await apps.json();
		localStorage.setItem('user-info', JSON.stringify(apps));

		setApps(apps.data);
	}

	const showApp = () => {
		var elements = [];

		for (let index in apps) {
			var app = apps[index];
			elements.push(
				<div>
					<p>Date: {app.date}</p>
					<p>Time: {app.start_time}</p>
					<p>End Time: {app.end_time}</p>
					<p>Appointment Type: {app.appointment_type}</p>
					<p>Room: {app.room_number}</p>
					<br />
				</div>
			);
		}

		return elements;
	};

	const fetchEmployeeInfo = async () => {
		const local = JSON.parse(localStorage.getItem('user-info'));
		const res = await axios.get(`http://localhost:8000/employees/${local.id}`);
		return res.data;
	};

	const fetchBranchInfo = async () => {
		const local = JSON.parse(localStorage.getItem('user-info'));
		const res = await axios.get(
			`http://localhost:8000/employees/branch/${local.id}`
		);
		return res.data;
	};

	const getInfo = useCallback(() => {
		const employeeInfo = async () => {
			const resp = await fetchEmployeeInfo();
			setName(resp.data.concat);
		};

		const branchInfo = async () => {
			const resp = (await fetchBranchInfo()).data;
			setAddress(
				`${resp.civic_number} ${resp.street_name} ${resp.city} ${resp.province} ${resp.postal_code}`
			);
		};

		employeeInfo();
		branchInfo();
	}, []);

	useEffect(() => {
		getInfo();
	}, []);

	return (
		<div>
			<h1>
				<h1>Welcome {name}</h1>
			</h1>
			<h4>Branch location: {address}</h4>
			<h2>Assigned Jobs</h2>
			{loaded ? showApp() : <p>Loading...</p>}
		</div>
	);
}
