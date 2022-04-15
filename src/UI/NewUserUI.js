import React, { Component, useState } from 'react';

export default function NewUserUI() {
    const [userId, setUserId] = useState(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const createUser = async () => {
        let result = await fetch("http://localhost:8000/users/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ username: username, password: password })
        });
        let json = await result.json();
        setUserId(json.user_id);
    }

    return (
        userId == null ?
            <div>
                <input type="text" value={username} onChange={evt => setUsername(evt.target.value)} placeholder="Username" />
                <input type="text" value={password} onChange={evt => setPassword(evt.target.value)} placeholder="Password" />
                <button onClick={() => createUser()}>Create User</button>
            </div>
            :
            <div>
                <input type="text" /* value={} */ onChange={(evt) => { }} placeholder="First Name" />
                <input type="text" /* value={} */ onChange={(evt) => { }} placeholder="Middle Name" />
                <input type="text" /* value={} */ onChange={(evt) => { }} placeholder="Last Name" />
                <input type="text" /* value={} */ onChange={(evt) => { }} placeholder="Address 1" />
                <input type="text" /* value={} */ onChange={(evt) => { }} placeholder="Address 2" />
                <input type="text" /* value={} */ onChange={(evt) => { }} placeholder="Gender" />
                <input type="text" /* value={} */ onChange={(evt) => { }} placeholder="Insurance Nº" />
                <input type="text" /* value={} */ onChange={(evt) => { }} placeholder="SSN" />
                <input type="text" /* value={} */ onChange={(evt) => { }} placeholder="Email Address" />
                <input type="text" /* value={} */ onChange={(evt) => { }} placeholder="Phone Number" />
                <button>Save</button>
            </div>
    )
}
