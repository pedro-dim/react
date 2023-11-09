import { useState, useEffect } from 'react';
import axios from 'axios';

function UserData() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);


    var allData = () => {

        if (userData) {
            return userData.map((el, index) => {
                return (
                    <span key={index}>{el}</span>
                )

            })
        } else {
            alert('deu ruim')

        }

    }

    useEffect(() => {

        // const API_URL = 'http://testavel.test/api/users'
        axios.get('http://testavel.test/api/users')
            .then((response) => {
                setUserData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading user data...</p>
            ) : (
                userData ? (
                    <div>
                        <h1>User Data</h1>
                        <p className='bg-blue-400'>Todos usuários: {allData()}</p>
                        <p>Name: {userData[0].name}</p>
                        <p>Email: {userData[0].email}</p>
                        {/* Add more data fields as needed */}
                    </div>
                ) : (
                    <p>No user data available.</p>
                )
            )}
        </div>
    );
}

export default UserData;
