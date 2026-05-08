import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCard";
import UserTable from "../components/UserTable";
import API from "../services/serviceAPI";


function AdminDashboard() {
 const [users, setUsers] = useState([]);
 const [stores, setStores] = useState([]);
 const [ratings, setRatings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersResponse = await API.get("/all-users");
                setUsers(usersResponse.data);

                const storesResponse = await API.get("/stores");
                setStores(storesResponse.data);

                const ratingsResponse = await API.get("/all-ratings");
                setRatings(ratingsResponse.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);


    return (

        <div className="bg-gray-100 min-h-screen">

            <Navbar />

            <div className="flex">

                <Sidebar />

                <div className="flex-1 p-8">

                    <h1 className="text-3xl font-bold mb-8">
                        Admin Dashboard
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                        <DashboardCards
                            title="Total Users"
                            count={users.length}
                        />

                        <DashboardCards
                            title="Total Stores"
                            count={stores.length}
                        />

                        <DashboardCards
                            title="Total Ratings"
                            count={ratings.length}
                        />

                    </div>

                    <UserTable users={users} />

                </div>

            </div>

        </div>
    )
}

export default AdminDashboard;