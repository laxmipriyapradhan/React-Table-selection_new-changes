import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function (props) {
    console.log(props,"hellloooooo")
const location = useLocation()
// const arrNew=[]
// const res=arrNew.location.state
console.log("location", location.state);
    const { id } = useParams();
    //console.log("id", id);

    const url = "http://localhost:3012/users"

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);
   
    const loadUsers = async () => {
        
    }


    return (
        <div className='container'>

            <div className='py-4'>
                <h1> Main page</h1>
                <table className="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col" style={{ padding: '10px' }}>   <input type="checkbox" /></th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            location.state.map((user, index) => (
                                <tr>
                                    <th scope='row' ><input type="checkbox" onChange={() => loadUsers(user)} /></th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
