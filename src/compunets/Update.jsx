import { useLoaderData } from "react-router-dom";


const Update = () => {

    const loderUser = useLoaderData();

    const handlerformsubmit = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email}
        console.log(user)
    }

    return (
        <div>
              <h3>Update Button:{loderUser.name}</h3>   

       <form onSubmit={handlerformsubmit}>
       <input type="text" name="name" defaultValue={loderUser.name} id="" />
              <br />
              <input type="text" name="email"  defaultValue={loderUser.email} id="" />
              <br />
              <input type="submit" name="" id="" value="update" />

       </form>
        </div>
    );
};

export default Update;