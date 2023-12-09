import { useLoaderData } from "react-router-dom";


const Update = () => {

    const loderUser = useLoaderData();


    return (
        <div>
              <h3>Update Button:{loderUser.name}</h3>        
        </div>
    );
};

export default Update;