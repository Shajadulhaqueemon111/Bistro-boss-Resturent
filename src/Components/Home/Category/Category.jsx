import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

  import 'swiper/css/pagination';

  import silde1 from '../../../assets/home/slide1.jpg'
  import silde2 from '../../../assets/home/slide2.jpg'
  import silde3 from '../../../assets/home/slide3.jpg'
  import silde4 from '../../../assets/home/slide4.jpg'
  import silde5 from '../../../assets/home/slide5.jpg'
const Category = () => {
    return (
      <div>
       <div className='w-4/12 mx-auto'>
       <h2 className='text-xl text-center text-[#D99904]'>---From 11:00am to 10:00pm---</h2>
        <hr />
        <h2 className='text-xl font-bold text-center'>ORDER ONLINE</h2>
        <hr />
       </div>
          <Swiper 
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 mt-6"
      >
    
    <SwiperSlide><img src={silde1} alt="" />
    <h3 className='text-3xl text-white uppercase text-center -mt-10'>Soups</h3>
    </SwiperSlide>
    <SwiperSlide><img src={silde2} alt="" />
    <h3 className='text-3xl uppercase text-white  text-center -mt-10'>pizzas</h3>
    </SwiperSlide>
    <SwiperSlide><img src={silde3} alt="" />
    <h3 className='text-3xl uppercase text-white text-center -mt-10'>desserts</h3>
    </SwiperSlide>
    <SwiperSlide><img src={silde4} alt="" />
    <h3 className='text-3xl uppercase text-white text-center -mt-10'>vegitables</h3>
    </SwiperSlide>
    <SwiperSlide><img src={silde5} alt="" />
    <h3 className='text-3xl uppercase text-white text-center -mt-10'>salad</h3>
    </SwiperSlide>
   
  </Swiper>
  <div className='mb-6' style={{ position: 'relative' }}>
    <div style={{ background: `url('https://i.ibb.co/YBdNHG9/b32bc60bcd909b6c46c7cc29fa0aa2fc.jpg') center/cover no-repeat`, height: '300px' }}>
        <div className='text-center bg-white shadow-xl p-5' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <h2 className='text-xl font-bold'>Bistro Boss</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.</p>
        </div>
    </div>
</div>


      </div>
    );
};

export default Category;