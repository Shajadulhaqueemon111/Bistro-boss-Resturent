import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../Cover/Cover';
import oredrdImg from '../../assets/shop/banner2.jpg'
import UseMenu from '../../Hookes/UseMenu';
import FoodCard from '../Food/FoodCard';
import { useParams } from 'react-router-dom';
import OrderTab from '../Oreder/OrderTab';
const Ordered = () => {
    const categoryes=['salad','pizza','soup','dessert','drinks']

    const {category}=useParams();
    console.log(category)
    const initialIndex=categoryes.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex)
    const [menu]=UseMenu()
  
    console.log(category)
    const desart=menu.filter(item=>item.category==='dessert')
    const soup=menu.filter(item=>item.category==='soup')
    const salad=menu.filter(item=>item.category==='salad')
    const pizza=menu.filter(item=>item.category==='pizza')
    const offered=menu.filter(item=>item.category==='offered')
    const drinks=menu.filter(item=>item.category==='drinks')
    
   
    return (
        <div className='mb-4'>
            <Cover img={oredrdImg} title='Orderd' ></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
                <TabList >
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={desart}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Ordered;