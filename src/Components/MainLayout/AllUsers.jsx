import React from 'react';
import UseAxiosSecure from '../../Hookes/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const axiosSecure = UseAxiosSecure()

    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })

    const handelMakeAdmine=user=>{
        axiosSecure.patch(`/users/admine/${user._id}`)

        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admine Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handelDelete=user=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            axiosSecure.delete(`/users/${user._id}`)
            .then(res=>{
                if(res.data.deletedCount>0){
                    console.log(res.data.deletedCount)
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                     
                }
            })
            }
          });

    }

   
    return (
        <div>
            <div className='flex justify-evenly'>
                <h2 className='text-2xl '>All User:</h2>
                <h2 className='text-2xl '>Total User: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=> <tr key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                               
                                <td>
                                   { user.role==='admine'?'Admine':<button onClick={()=>handelMakeAdmine(user)} className='btn btn-outline'><FaUser className='text-2xl font-bold'></FaUser></button>
                                   }
                                </td>
                                <td>
                                    <button onClick={()=>handelDelete(user)} className='btn btn-outline'><RiDeleteBin6Line className='text-2xl font-bold'></RiDeleteBin6Line></button>
                                </td>
                            </tr>)
                        }
                       
                   
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;