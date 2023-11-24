import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import UseAxiosSecure from '../../Hookes/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmine = () => {
   const {user}=useContext(AuthContext)

   const axiousSecure=UseAxiosSecure()
   const { data: isAdmine, isPending: isAdmineLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
        const res = await axiousSecure.get(`/users/admine/${user.email}`);
        console.log(res.data);
        return res.data?.admin;
    }
})

return [isAdmine, isAdmineLoading]
   
};

export default useAdmine;