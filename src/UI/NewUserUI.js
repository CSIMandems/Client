import React, { Component, useState } from 'react';

export default function NewUserUI() {
    const [userId, setUserId] = useState(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDOB] = useState('');
    const [gender, setGender] = useState('');
    const [ssn, setSSN] = useState('');
    const [insurance, setInsurance] = useState(0);
    const [civic, setCivic] = useState(0);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [postal, setPostal] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

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

    const createPatient = async () => {
        let result = await fetch("http://localhost:8000/patients/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                first_name: firstName.substring(0,50),
                middle_name: middleName.substring(0,50),
                last_name: lastName.substring(0,50),
                date_of_birth: dob,
                gender: gender.charAt(0).toUpperCase(),
                ssn: ssn.substring(0,9),
                insurance_number: insurance.toString().substring(0,20),
                civic_number: civic.toString().substring(0,10),
                street_name: street.substring(0,50),
                city: city.substring(0,50),
                province: province.substring(0,50),
                postal_code: postal.substring(0,6),
                phone_number: phone.substring(0,10),
                email_address: email.substring(0,100),
                user_id: userId,
                responsible_party_id: null
            })
        });
        let json = await result.json();
        console.log(json);
        setUserId(null);
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
                <input type="text" value={firstName} onChange={evt => setFirstName(evt.target.value)} placeholder="First Name" />
                <input type="text" value={middleName} onChange={evt => setMiddleName(evt.target.value)} placeholder="Middle Name" />
                <input type="text" value={lastName} onChange={evt => setLastName(evt.target.value)} placeholder="Last Name" />
                <input type="date" value={dob} onChange={evt => setDOB(evt.target.value)} placeholder="Date of Birth" />
                <input type="text" value={gender} onChange={evt => setGender(evt.target.value)} placeholder="Gender" />
                <input type="text" value={ssn} onChange={evt => setSSN(evt.target.value)} placeholder="SSN" />
                <input type="number" value={insurance} onChange={evt => setInsurance(evt.target.value)} placeholder="Insurance Nº" />
                <input type="number" value={civic} onChange={evt => setCivic(evt.target.value)} placeholder="Civic Nº" />
                <input type="text" value={street} onChange={evt => setStreet(evt.target.value)} placeholder="Street Name" />
                <input type="text" value={city} onChange={evt => setCity(evt.target.value)} placeholder="City" />
                <input type="text" value={province} onChange={evt => setProvince(evt.target.value)} placeholder="Province" />
                <input type="text" value={postal} onChange={evt => setPostal(evt.target.value)} placeholder="Postal Code" />
                <input type="text" value={phone} onChange={evt => setPhone(evt.target.value)} placeholder="Phone Nº" />
                <input type="text" value={email} onChange={evt => setEmail(evt.target.value)} placeholder="Email Address" />
                <br/><button onClick={() => createPatient()}>Save Patient</button>
            </div>
    )
}
