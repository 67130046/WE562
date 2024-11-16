import React from 'react';
import {UserCard} from './Usercard';

const users = [
    {id:1, username: 'Alice', email:'alice@gmail.com'},
    {id:2, username: 'Bob', email:'bob@gmail.com'},
];

export function Userlist() {
    return (
        <div>
            {users.map(user => (
                <UserCard key={user.id} username={user.username} email={user.email}/>
            ))}
        </div>
    )
}