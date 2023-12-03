import React, { useState } from 'react'
import "./UserList.css"
import CreateUser from './CreateUser';
import { Button, Skeleton } from '@nextui-org/react';

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

            <CreateUser />

            <h2>User List</h2>
            <ul>
                {users.map((i, index) =>
                    <li key={i.id}>[{i.id}] - {i.name}</li>
                )}
            </ul>
            {/* <button onClick={add}>Add New User</button> */}
            <Button onClick={add}>Add New User</Button>
        </div>
    )
}