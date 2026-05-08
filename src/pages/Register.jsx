import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/serviceAPI";


function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        password: "",
        address: "",
        role: "user"

    });
 const handleChange = (e) => {setFormData({...formData,[e.target.name]: e.target.value});
    };

 const handleSubmit = async (e) => { e.preventDefault();

        try {
             await API.post( "/register", formData );
             alert("Registration Successful");
             navigate("/");
            } catch (error) { console.log(error);alert("Registration Failed")}
    };


    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <div className="bg-white p-8 rounded-2xl shadow-lg w-[450px]">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Register
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Full Name"
                        onChange={handleChange}
                        className="border p-3 rounded-lg"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        className="border p-3 rounded-lg"
                    />

                    <textarea
                        name="address"
                        placeholder="Enter Address"
                        onChange={handleChange}
                        className="border p-3 rounded-lg"
                    ></textarea>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        className="border p-3 rounded-lg"
                    />

                    <button
                        className="bg-green-600 text-white p-3 rounded-lg"
                    >
                        Register
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Register;