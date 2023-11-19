import React from 'react';
import MenueItems from '../Items/MenueItems';
import Cover from '../Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    console.log(items);
   
    
    if (!items || !Array.isArray(items)) {
    
        return (
            <div>
                {title && <Cover img={img} title={title}></Cover>}
                <div className="grid md:grid-cols-2 gap-10">
                    <p>No items available in this category.</p>
                </div>
            </div>
        );
    }

    return (
        <div className='mb-6 pb-4'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-6 mt-16">
            {
                    items.map(item => <MenueItems
                        key={item._id}
                        item={item}
                    ></MenueItems>)
                }
                
            </div>
            <Link to={`/order/${title?.toLowerCase()}`}>
                       <button className="btn btn-outline btn-secondary border-0 border-b-4">Order Now</button>
                       </Link>
        </div>
                );
};

export default MenuCategory;
