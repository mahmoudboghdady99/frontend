
import { Link } from "react-router";
function Sidbar() 
{
    return(
        <>
        <ul>
            <li>
                <Link to="/">Home</Link>
               
            </li>
            <li>
            <Link to="coursses">Get All Coursses</Link>
            </li>
        </ul>
        </>
    )
}
export default Sidbar;