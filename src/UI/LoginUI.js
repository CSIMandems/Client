import { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
export default function LoginUI() {
	const [userName, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const nav = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('user-info')) {
			nav('/patient');
		}
	}, []);

	async function loginPatient() {
		let item = { username: userName, password };
		let result = (await axios.post('http://localhost:8000/users/login', item))
			.data;
		localStorage.setItem('user-info', result.user_type);
		nav('/patient');
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
			<button onClick={loginPatient}>LOGIN</button>
		</div>
	);
}
