import { useLoaderData } from "react-router-dom";

const Phone = () => {   
    const phone = useLoaderData();
    
    return (
        <div>
            <h2>Single Phone: {phone.name}</h2>
        </div>
    );
};

export default Phone;