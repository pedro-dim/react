import React, { useState } from 'react';

const FormComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (firstName.trim() === '') {
            newErrors.firstName = 'First name is required.';
        }

        if (lastName.trim() === '') {
            newErrors.lastName = 'Last name is required.';
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email address.';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Form submission logic here
            console.log('Form submitted!');
        }
    };

    return (
        <div className='myForm'>
            <div>
                <h1>Form Component</h1>
            </div>
            <form onSubmit={handleSubmit} >
                <div >
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && <span style={{ color: "red" }}>{errors.firstName}</span>}
                </div>

                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lastName && <span>{errors.lastName}</span>}
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormComponent;
