import {NavLink} from "react-router-dom";
import {routes} from "../../App";

const HomePage = () => {
    return <>
        <NavLink to={routes.products} className='btn'>Go to products</NavLink>
    </>
}

export default HomePage;