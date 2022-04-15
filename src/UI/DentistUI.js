import React, {Component, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

export default function DentistUI(props) {

	let location = useLocation();
	let empName = location.state;

	// useEffect(()=>{
	// 	empName = location.state;
	// },[])

	return (
			<div>
				<h1>Welcome {empName}</h1>
				<h2>Assigned Jobs</h2>
				<button>Show Appointments</button>
			</div>
		)

}
