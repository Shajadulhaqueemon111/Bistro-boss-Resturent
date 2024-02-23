import React, { useEffect, useState } from 'react';
import MenueItems from '../Items/MenueItems';
import UseMenu from '../../Hookes/UseMenu';

const PopularMenu = () => {

    const [menu]=UseMenu();
    console.log(menu)
    const popular=menu.filter(item=>item.category==='popular')
    
    return (
        <section className="mb-12">
            
            <div className='text-center mb-6'>
               <h3 className='text-xl'>From Our Menu</h3>
               <p className='text-2xl font-bold'>Popular Items</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenueItems
                        key={item._id}
                        item={item}
                    ></MenueItems>)
                }
            </div>
            <button className="btn btn-outline text-center border-0 border-b-4 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;