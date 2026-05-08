import {useNavigate} from "react-router-dom";

function Navbar() {
     
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
          navigate("/");
        localStorage.removeItem("role");
    }

    return (
        <div className="bg-white shadow-md p-4 flex justify-between items-center">
               <h1 className="text-2xl font-bold">Project</h1>
                <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">Logout</button>
        </div>
    )
 

}

export default Navbar;