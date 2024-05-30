import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAdmin = () => {
    const { user } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['admin'],
        queryFn: async () => {
            const res = await axios.get(`https://hotelhub-server-one.vercel.app/users`);
            return res.data;
        }
    });

    useEffect(() => {
        if (!isLoading && user) {
            const matchUser = users.find(dbUser => dbUser.email === user.email);
            setIsAdmin(matchUser?.role === 'admin');
        }
    }, [isLoading, users, user]);

    return { isAdmin, isLoading };
};

export default useAdmin;
