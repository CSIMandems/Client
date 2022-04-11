import React, { Component } from 'react';

export default class NewPatientUI extends Component {
    render() {
        return (
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
}