import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {BiSolidQuoteLeft} from 'react-icons/bi';
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://mistro-boss-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='mb-10'>
            <div className='text-center'>
                <p className='text-xl text-yellow-500'>---What Our Clients Say---</p>
                <hr />
                <h2 className='text-2xl font-bold'>TESTIMONIALS</h2>
                <hr />
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='m-24 flex flex-col items-center'>
                            <Rating className=''
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='text-4xl font-bold'><BiSolidQuoteLeft></BiSolidQuoteLeft></p>
                            <p className='mb-4 mt-4'>{review.details}</p>
                            <h3 className='text-2xl text-center text-orange-500'>{review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;