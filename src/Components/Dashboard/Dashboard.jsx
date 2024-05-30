import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { IoHome } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";

const Dashboard = () => {
    const { isAdmin } = useAdmin();

    return (
        <>
            {
                isAdmin ?
                    <div className="flex">
                        <div className="w-5/12 md:w-64 min-h-screen bg-orange-400">

                            <div>
                                <ul className="menu flex flex-col md:gap-5">
                                    <li><NavLink to={`admin-home`}> <IoHome /> ADMIN HOME</NavLink></li>
                                    <li><NavLink to={`add-room`}> <ImSpoonKnife /> ADD ROOM</NavLink></li>
                                    <li><NavLink to={`manage-room`}> <TiThMenu /> MANAGE ROOM</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1">
                            <Outlet></Outlet>
                        </div>
                    </div>
                    :
                    <div className={`min-h-screen flex flex-col items-center justify-center`}>
                        <h2 className="text-6xl font-semibold text-center mt-5 text-red-500">Access Denied</h2>
                        <h2 className="text-xl font-semibold text-center mt-3">Only Admin Can Access to This Page</h2>
                    </div>
            }
        </>
    );
};

export default Dashboard;
