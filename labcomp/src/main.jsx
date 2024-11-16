import React from 'react';
import ReactDOM from 'react-dom/client';

//import {UserCard} from './UserCard';
// import {Userlist} from './Userlist';
import {FlipCard} from './FlipCard';

const users = [
  {id:1, username: 'Alice', email:'alice@gmail.com', bio:"Beauty"},
 // {id:2, username: 'Bob', email:'bob@gmail.com'},
 // {id:3, username: 'Mary', email:'mary@gmail.com'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//(<UserCard username="Pook" email="pook72@hotmail.com"/>);
//<Userlist/>
<div>
         {users.map(user => (
                <FlipCard key={user.id} 
                username={user.username} email={user.email} bio={user.bio}/>
            ))}
        </div>
  );
