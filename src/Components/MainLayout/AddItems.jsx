import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import UseAxiosSecure from '../../Hookes/UseAxiosSecure';
import UseAxiosPublic from '../../Hookes/useAxioxPublic'
import Swal from 'sweetalert2';


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();
    const onSubmit =async (data) =>{
        try {
            const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
            const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`; // Fixed the URL
            const imageField = new FormData();
            imageField.append('image', data.image[0]);
            const res = await axiosPublic.post(image_hosting_api, imageField,{
                headers:{
                    "Content-Type":'multipart/form-data'
                }
            });
            
            console.log(res.data);

            if(res.data.success){
                const menuItems={
                    name:data.name,
                    category:data.category,
                    price:parseFloat(data.price),
                    recipe:res.recipe,
                    image:res.data.data.display_url
                }
                const menuRes=await axiosSecure.post('/menu',menuItems)
                console.log(menuRes)
                if(menuRes.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title:`${data.name} is added the menu`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            }
        } catch (error) {
            console.error("Error:", error);
            // Handle the error appropriately
        }

    } 
    return (
        <div>
        <div className='text-center'>
            <h2>what is Item</h2>
            
            <h2 className='text-2xl font-bold'>Added All Items</h2>
        </div>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Recipe Name"
                        {...register('name', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="flex gap-6">
                    {/* category */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="default" {...register('category', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select a category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>

                    {/* price */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Price"
                            {...register('price', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>
                {/* recipe details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>

                <div className="form-control w-full my-6">
                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>

                <button className="btn">
                    Add Item <FaUtensils className="ml-4"></FaUtensils>
                </button>
            </form>
        </div>
    </div>
    );
};

export default AddItems;