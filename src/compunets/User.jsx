import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


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
            const remaining = loder.filter(user => user._id !== _id);
            setloser(remaining);
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
                    loder.map(user => <p key={user._id}>{user.name}
                        <Link to={`/updata/${user._id}`}>
                        <button className="btn btn-ghost" >update</button>
                        </Link>
                         <button className="btn btn-ghost" 
                        onClick={()=> handlerDelate(user._id)}
                        >x</button >
                        <br />
                      <br />{user.email} 
                      <Link to={`/updata/${user._id}`}>
                    <button className="btn btn-ghost" >update</button>
                    </Link>
                    <button className="btn btn-ghost"  
                    onClick={ ()=>handlerDelate (user._id)}
                    >x</button>
                </p>)
                }
            </div>
        </div>
    );
};

export default User;