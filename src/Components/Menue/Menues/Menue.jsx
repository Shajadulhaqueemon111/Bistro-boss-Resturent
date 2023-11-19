
import { Helmet} from 'react-helmet-async';
import Cover from '../../Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
import MenuCategory from '../../MenueCategory/MenuCategory';
import UseMenu from '../../../Hookes/UseMenu';



const Menue = () => {

    const [menu]=UseMenu();
   console.log(menu)
    const desart=menu.filter(item=>item.category==='dessert')
    const soup=menu.filter(item=>item.category==='soup')
    const salad=menu.filter(item=>item.category==='salad')
    const pizza=menu.filter(item=>item.category==='pizza')
    const offered=menu.filter(item=>item.category==='offered')
    
    return (
        <div className='mb-6'>
           <Helmet>
            <title>Our Menue</title>
           </Helmet>
           <Cover img={menuImage} title="Our Menue"></Cover>
           <section className='text-center mb-6 mt-6'>
            <h2 className='text-xl text-yellow-500'>---Don't Miss---</h2>
            <p className='text-2xl'>---Today's Offere---</p>
           </section>
           <MenuCategory items={offered}></MenuCategory>
           <section className='mt-6'>
           <MenuCategory 
             
             items={desart}
                 title="Dessert"
                 img={pizzaImage}
             
             >
                
             </MenuCategory>
           </section>
            <button className='text-center btn btn-outline bottom-1 mb-6 mt-5'>ORDER YOUR FAVOURITE FOOD</button>
           
           <section className='mt-6'>
           <MenuCategory 
             
             items={pizza}
                 title="Pizza"
                 img={dessertImg}
             
             >
                
             </MenuCategory>
           </section>
            <button className='text-center btn btn-outline bottom-1 mb-6 mt-5'>ORDER YOUR FAVOURITE FOOD</button>
           
           <section className='mt-6'>
           <MenuCategory 
             
             items={salad}
                 title="Salad"
                 img={saladImage}
             
             >
                
             </MenuCategory>
           </section>
            <button className='text-center btn btn-outline bottom-1 mb-6 mt-5'>ORDER YOUR FAVOURITE FOOD</button>
           
           <section className='mt-6'>
           <MenuCategory 
             
             items={soup}
                 title="Soup"
                 img={soupImage}
             
             >
                
             </MenuCategory>
           </section>
            <button className='text-center btn btn-outline bottom-1 mb-6 mt-5'>ORDER YOUR FAVOURITE FOOD</button>
           
        </div>
    );
};

export default Menue;