import React from 'react';

const Footer = () => {
    const style={
        width:'200px',
        hight:'200px'
    }
  
    return (
        <div>
           <footer className="footer p-10 text-white bg-black ">
  <aside>
  <p className='text-2xl font-bold text-purple-400'>Bistro Bos Resturent</p>
    <img style={style} src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg" alt="" />
    
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
 
        </div>
    );
};

export default Footer;