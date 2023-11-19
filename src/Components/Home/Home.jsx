import React from 'react';
import Banner from '../Banner/Banner';
import Category from './Category/Category';
import SectionTitle from '../Section/SectionTitle';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import PopularMenu from '../Popular/PopularMenu';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
           <Helmet>
            <title>Home Page</title>
           </Helmet>
            <Banner></Banner>
            <Category></Category>
            <SectionTitle></SectionTitle>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;