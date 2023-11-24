import React from 'react';
import useCart from '../../useQuery/useCart';

import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hookes/UseAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {

    const [cart,refetch] = useCart()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const axiosSecure=UseAxiosSecure()
    const handelDelete=id=>{
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

            axiosSecure.delete(`/carts/${id}`)
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
                <h2 className='text-2xl'>Items: {cart.length}</h2>
                <h2 className='text-2xl'>Total Price: {totalPrice}</h2>
                {
                    cart.length?<Link to='/dashboard/payment'>
                <button className='btn btn-outline btn-secondary'>pay</button>
                </Link>:<button disabled className='btn btn-outline btn-secondary'>pay</button>
                }
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                              #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        cart.map((item,index)=> <tr key={item._id}>
                            <th>
                               {index+1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                   
                                </div>
                            </td>
                            <td>
                               {item.name}
                            </td>
                            <td>${item.price}</td>
                            <th>
                                <button onClick={()=>handelDelete(item._id)} className="btn btn-ghost "><FaTrashAlt  className='text-2xl font-bold' /></button>
                            </th>
                        </tr>)
                       }
                       
                     
                    </tbody>
                    
                   
                </table>
            </div>
        </div>
    );
};

export default Cart;