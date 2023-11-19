import React, { useState } from 'react';
import FoodCard from '../Food/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({ items }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);        

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={(swiper) => handlePageChange(swiper.activeIndex + 1)}
      >
        {Array.from({ length: totalPages }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {items
                .slice(index * itemsPerPage, (index + 1) * itemsPerPage)
                .map((item) => (
                  <FoodCard key={item._id} item={item}></FoodCard>
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
