import React, { Component } from 'react';
import {useLocation} from "react-router-dom";

export default function PatientUI(){
		let location = useLocation();
		let currentUser = location.state.username;
		let currentPassword = location.state.password;

		async function showApp(){
			//get user id from login
			let item ={username:currentUser, password:currentPassword};
			let result = await fetch("http://localhost:8000/users/login",{
				method:'POST',
				headers:{
					"Content-Type":"application/json",
					"Accept":"application/json"
				},
				body: JSON.stringify(item)
			});
			result = await result.json();
			localStorage.setItem("user-info",JSON.stringify(result));
			let patientID = result.id;

			//use patient id to obtain appointments
			let apps = await fetch(`http://localhost:8000/appointments/patient/${patientID}`,{
				method:'GET',
				headers:{
					"Content-Type":"application/json",
					"Accept":"application/json"
				},
			});
			apps = await apps.json();
			let status = apps.status;
			localStorage.setItem("user-info",JSON.stringify(apps));
		}

		return (
			<div>
				<h1>Welcome {currentUser}</h1>
				<button onClick={showApp}>Show Appointments</button>
			</div>
		)

}
