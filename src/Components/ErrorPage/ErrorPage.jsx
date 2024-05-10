import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex items-center justify-center">
            <div className="text-center space-y-3">
                <h1 className="text-4xl font-bold">Oops!</h1>
                <p>404 Page Not Found</p>
                <button className="btn btn-ghost text-white bg-orange-500">
                    <Link to="/">Back To Home</Link>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;