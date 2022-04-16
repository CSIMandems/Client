import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import NewUserUI from './NewUserUI';
import NewPatientUI from './NewUserUI';

export default function ReceptionistUI() {
	const [name, setName] = useState(null);
	const [address, setAddress] = useState(null);

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
			<h1>Welcome, {name}</h1>
			<div>
				<h4>Branch location: {address}</h4>
			</div>
			<h2>Add User</h2>
			<NewUserUI></NewUserUI>
		</div>
	);
}
