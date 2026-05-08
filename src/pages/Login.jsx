import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/serviceAPI";

function Login() {
const navigate = useNavigate();
   const [formData, setFormData] = useState({

        email: "",
        password: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value

        });
    };

 const handleSubmit = async (e) => {
   e.preventDefault();
 try {
     const response = await API.post(  "/login",formData);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("role",response.data.user.role);
         alert("Login Successful");
         if(response.data.user.role === "admin"){
            navigate("/admin-dashboard");
            }

            if(response.data.user.role === "user"){
               navigate("/user-dashboard");
            }
            if(response.data.user.role === "owner"){
                navigate("/owner-dashboard");
            }
        } catch (error) {console.log(error);alert("Login Failed")}
    };


    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Login
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        className="border p-3 rounded-lg"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        className="border p-3 rounded-lg"
                    />

                    <button
                        className="bg-blue-600 text-white p-3 rounded-lg"
                    >
                        Login
                    </button>

                </form>

                <p className="mt-4 text-center">

                    Don't have account?

                    <Link
                        to="/register"
                        className="text-blue-600 ml-2"
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div>
    )
}

export default Login;