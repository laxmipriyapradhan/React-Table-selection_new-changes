import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'

export default function () {
    //useNavigate= navigate;
    const navigate = useNavigate()
     const { id } = useParams();

    const url = "http://localhost:3012/users"

    const [users, setUser] = useState([]);
    const [selecteduser, setSelecteduser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

   

    
    const handle = (e) => {
        navigate("/main",{state:datas});
        console.log("selectedusersss",datas);
    }
    const [datas,setDatas]=useState([])

    const handleOnChange = async (user) => {
        
    
        console.log(user,"zzzzzz")
        users.map(data => {
            if (user.id === data.id) {
                [...users],
                    data.Selected =!user.Selected
                    console.log("Selected",data.Selected);
                    setDatas([...datas,user])
                   


            }
        })
    }
    
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3012/users");
         console.log(result);
        setUser(result.data);

    };

console.log("selected user", selecteduser);

    return (
        <div className='container'>

            <div className='py-4'>
                <h1> Home page</h1>
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
                            users.map((user, index) => (
                                <tr>
                                    <th scope='row' ><input type="checkbox" onChange={() => handleOnChange(user)} /></th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div>
                    <button onClick={handle} className="click" type="submit" 
                    // Link
                    // to={{
                    //   pathname: "/main",
                    //   state: selecteduser // your data array of objects
                    // }}
                  
                  >Next</button>
                </div>
            </div>
        </div>
    )
}
