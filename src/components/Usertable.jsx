function UserTable({users}) {

    return (

        <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">

            <thead className="bg-gray-900 text-white">

                <tr>

                    <th className="p-4">Name</th>

                    <th className="p-4">Email</th>

                    <th className="p-4">Role</th>

                </tr>

            </thead>

            <tbody>

                {
                    users.map((user) => (

                        <tr
                            key={user.id}
                            className="border-b text-center"
                        >

                            <td className="p-4">
                                {user.name}
                            </td>

                            <td className="p-4">
                                {user.email}
                            </td>

                            <td className="p-4">
                                {user.role}
                            </td>

                        </tr>
                    ))
                }

            </tbody>

        </table>
    )
}

export default UserTable;