import React, { useContext } from 'react';
// import useAuth from '../../Hookes/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Auth/AuthProvider';
import UseAxiosSecure from '../../Hookes/UseAxiosSecure';
import useCart from '../useQuery/useCart';


const FoodCard = ({item}) => {
    const {name, image, price, recipe,_id} = item;
const navigate=useNavigate()

const location=useLocation()
const axiosSecure=UseAxiosSecure()
     const {user}=useContext(AuthContext)
     const [,refetch]=useCart()
     console.log(user)
     console.log("User Email:", user?.email);
    const cardStyle={
        with:'300px',
        height:'500px'
    }

    const handelAddtoCard=()=>{
        // console.log(food,user?.email)

        if(user && user.email){

            // console.log(user.email,food);

            const cartItem={
                menuId:_id,
                email:user.email,
                name,
                image,
                price
            }

          axiosSecure.post('/carts',cartItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });

                      refetch()
                }
            })
        }else{
            Swal.fire({
                title: "please login ",
                text: "plese login add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes login!"
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login',{state:{from: location}})
                }
              });
        }
    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl" style={cardStyle}>
                <figure><img src={image}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
                    <p>{recipe}</p>
                    
                    <div className="card-actions justify-end">
                        <button onClick={handelAddtoCard} className="btn btn-outline btn-secondary border-0 border-b-4 ">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;