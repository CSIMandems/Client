import React, {Component, useEffect, useState} from 'react';

export default function DentistUI() {
	const [empName,setUserName] = useState("");
	useEffect(()=>{

	},[])

		return (
			<div>
				<h1>Welcome {empName}</h1>
				<h2>Assigned Jobs</h2>
				<button>Show Appointments</button>
			</div>
		)

}
