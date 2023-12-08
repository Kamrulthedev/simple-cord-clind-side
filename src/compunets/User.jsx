import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const User = () => {

    const loderUsers = useLoaderData()
    const [loder, setloser] = useState(loderUsers)

    const handlerDelate = _id =>{
       console.log( "delate button",_id)
       fetch(`http://localhost:5000/users/${_id}`,
       {
        method: 'DELETE',
        

       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.deletedCount){
            alert('deleted succesfully');
            const remining = loder.filter(user =>user._id == _id)
            setloser(remining)
        }
       })
    }


    return (
        <div>
            {
                <h2>Users is data on the loder:{loder.length}</h2>
            }
            <div>
                {
                    loder.map(user => <p key={user._id}>{user.name} <button 
                    onClick={()=> handlerDelate(user._id)}
                    >x</button > <br />{user.email} <button 
                    onClick={ ()=>handlerDelate (user._id)}
                    >x</button>
                </p>)
                }
            </div>
        </div>
    );
};

export default User;