import React, { useState } from 'react'
import "./UserList.css"

const USERS = [
    { id: 1001, name: "Bob" },
    { id: 4500, name: "Oleg" },
    { id: 7788, name: "Vika" }
]

export default function UserList() {

    const [users, setUsers] = useState(USERS);

    const add = () => {
        const newUser = { id: users.length + 1, name: "Sofia" };

        //users.push(newUser);
        setUsers([...users, newUser]);
    }

    return (
        <div className='UserList'>
            <h2>User List</h2>
            <ul>
                {users.map((i, index) =>
                    <li key={i.id}>[{i.id}] - {i.name}</li>
                )}
            </ul>
            <button onClick={add}>Add New User</button>
        </div>
    )
}