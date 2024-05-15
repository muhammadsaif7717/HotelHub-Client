import axios from "axios";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiousSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})
const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiousSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            // console.log('Error tracked in the interceptor', error.response);
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                // console.log('Logout the user');
                logOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => console.log(error))
            }
        })
    }, [logOut, navigate])

    return axiousSecure;
};

export default useAxiosSecure;