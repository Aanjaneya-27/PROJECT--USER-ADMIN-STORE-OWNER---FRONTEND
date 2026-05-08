import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StoreCard from "../components/StoreCard";
import SearchBar from "../components/SearchBar";
import API from "../services/serviceAPI";


function UserDashboard() {
 const [stores, setStores] = useState([]);
 const [search, setSearch] = useState("");
 const handleRating = async (storeId, rating) => {
        try {
            const response = await API.put(`/stores/${storeId}`, { rating });
            setStores(stores.map(store => store.id === storeId ? response.data : store));
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await API.get("/stores");
                setStores(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchStores();
    }, []);
     const filteredStores = stores.filter((store) =>store.name.toLowerCase().includes(search.toLowerCase()) );

   return (

        <div className="bg-gray-100 min-h-screen">

            <Navbar />

            <div className="flex">

                <Sidebar />

                <div className="flex-1 p-8">

                    <h1 className="text-3xl font-bold mb-5">
                        User Dashboard
                    </h1>

                    <SearchBar
                        search={search}
                        setSearch={setSearch}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {
                            filteredStores.map((store) => (

                                <StoreCard
                                    key={store.id}
                                    store={store}
                                    handleRating={handleRating}
                                />
                            ))
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

export default UserDashboard;