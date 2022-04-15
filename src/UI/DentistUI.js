import React, {Component, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

export default function DentistUI() {
	let location = useLocation();
		return (
			<div>
				<h1><h1>Welcome {location.state.username}</h1></h1>
				<h2>Assigned Jobs</h2>
				<button>Show Appointments</button>
			</div>
		)

}
