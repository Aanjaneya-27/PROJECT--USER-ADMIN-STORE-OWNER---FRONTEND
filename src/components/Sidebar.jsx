function Sidebar() {

    return (

        <div className="w-[250px] bg-gray-900 text-white min-h-screen p-5">

            <h1 className="text-3xl font-bold mb-10">
                Dashboard
            </h1>

            <ul className="flex flex-col gap-5">

                <li className="hover:text-yellow-400 cursor-pointer">
                    Home
                </li>

                <li className="hover:text-yellow-400 cursor-pointer">
                    Stores
                </li>

                <li className="hover:text-yellow-400 cursor-pointer">
                    Ratings
                </li>

                <li className="hover:text-yellow-400 cursor-pointer">
                    Users
                </li>

            </ul>

        </div>
    )
}

export default Sidebar;