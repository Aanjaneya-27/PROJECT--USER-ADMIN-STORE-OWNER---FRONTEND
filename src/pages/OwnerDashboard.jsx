import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import API from "../services/serviceAPI";


function OwnerDashboard() {
   const [ratings, setRatings] = useState([]);
    useEffect(() => {
        const loadRatings = async () => {
            try {
                const response = await API.get("/owner-ratings");
                setRatings(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        void loadRatings();
    }, []);


    return (

        <div className="bg-gray-100 min-h-screen">

            <Navbar />

            <div className="flex">

                <Sidebar />

                <div className="flex-1 p-8">

                    <h1 className="text-3xl font-bold mb-8">
                        Owner Dashboard
                    </h1>

                    <div className="bg-white rounded-2xl shadow-md p-6">

                        <table className="w-full">

                            <thead>

                                <tr className="border-b">

                                    <th className="p-4">
                                        Store Name
                                    </th>

                                    <th className="p-4">
                                        Rating
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {
                                    ratings.map((item, index) => (

                                        <tr
                                            key={index}
                                            className="border-b text-center"
                                        >

                                            <td className="p-4">
                                                {item.name}
                                            </td>

                                            <td className="p-4">
                                                {item.rating}
                                            </td>

                                        </tr>
                                    ))
                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default OwnerDashboard;