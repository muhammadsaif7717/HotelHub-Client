import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center mt-5">Welcome, Admin!</h2>

            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td>
                            <span>{user.displayName}</span>
                        </td>

                        <td>
                            <span>{user.email}</span>
                        </td>
                        <td>
                            <span>Admin</span>
                        </td>

                        <td>
                            <span className="text-green-500">Active</span>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default AdminHome;