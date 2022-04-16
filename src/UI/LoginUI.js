import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
export default function LoginUI() {
	const [userName, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const [type, setType] = useState('');
	const nav = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('user-info')) {
			nav('/');
		}
	}, []);

	async function loginPatient() {
		let item = { username: userName, password };
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

		if (result.user_type === 'Dentist') {
			nav('/employees', { state: { username: userName, password: password } });
		} else if (result.user_type === 'Patient') {
			nav('/patient', { state: { username: userName, password: password } });
		} else if (
			result.user_type === 'Receptionist' ||
			result.user_type === 'Admin'
		) {
			nav('/receptionist', {
				state: { username: userName, password: password },
			});
		} else {
			alert(
				'invalid user, you have to be a dentist, patient or receptionist to access terminal'
			);
		}
	}
	return (
		<div>
			<h1>LOGIN PAGE</h1>
			<input
				type="text"
				placeholder="username"
				onChange={(e) => setUserId(e.target.value)}
				className="form-control"
			/>
			<br></br>
			<input
				type="text"
				placeholder="password"
				onChange={(e) => setPassword(e.target.value)}
				className="form-control"
			/>
			<br></br>
			{/*<input type="text" placeholder="Dentist, Patient or Receptionist ?"*/}
			{/*       onChange={(e) => setType(e.target.value)}*/}
			{/*       className="form-control"/>*/}
			{/*<br></br>*/}
			<button onClick={loginPatient}>LOGIN</button>

			<h4 style={{ color: 'red' }}>by Lilia</h4>
				<h4 style={{ color: 'red' }}>Arunasva</h4>
					<h4 style={{ color: 'red' }}>Daniel</h4>
						<h4 style={{ color: 'red' }}>Shaan</h4>
							<h4 style={{ color: 'red' }}>Justin</h4>

		</div>
	);
}
