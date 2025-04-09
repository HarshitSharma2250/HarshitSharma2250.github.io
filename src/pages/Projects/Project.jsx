import React, { useRef, useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Project.css'
import everestPage from '../../images/everestPage.png'
import mangalayatanPage from '../../images/mangalayatanPage.png'
import reliance from '../../images/reliance.png';
import nufi from '../../images/nufiWallet.png'
import ads_drop from '../../images/ads_drop.png'


export const Project = () => {
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView);

  function getSlidesPerView() {
    const width = window.innerWidth;
  
    if (width < 960 && width > 700) {
      return 2;
    }if (width < 700) {
      return 1;
    } else {
      return 3;
    }
  }
  useEffect(() => {
    function handleResize() {
      setSlidesPerView(getSlidesPerView());
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <>
    <h1 className="projectheading">
      projects
    </h1>
    <Swiper
        slidesPerView={getSlidesPerView()}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >



        <SwiperSlide>  
  <div className="projectsintro">
<div className="imgaeproject">
  <img className='allproductimg' src={everestPage} alt="" />
</div>
<div className="productContect">
 <h3> Everest Spices</h3>
 <p> This project is a clone of Everest Spices, India’s No. 1 spice brand. The website offers a comprehensive range of whole spices and blends, showcasing the great taste of purity that Everest is renowned for. It highlights the brand’s commitment to quality, backed by extensive research, innovation, and advanced technology. </p>
 <p>Teach stack : HTML,CSS ,Javascript , React</p>
</div>
<div className="linkbuttons">
  <button className="livesite-getrepo"><a href="https://github.com/HarshitSharma2250/My-projects/tree/main/Everest_species/everest-Species-app" target="_blank" rel='everest species clone github link'>Git Repo</a></button>
  
  <button className="livesite-getrepo"><a href="https://6560c102c12a4634d3b45027--stalwart-snickerdoodle-64adf9.netlify.app/"target="_blank" rel='everest species live demo link'>Live Site</a></button>
</div>
       </div>
       </SwiperSlide>





        <SwiperSlide>    
        <div className="projectsintro">
<div className="imgaeproject">
  <img className='allproductimg' src={mangalayatanPage} alt="mangalayatan university" />
</div>
<div className="productContect">
 <h3> Mangalayatan university</h3>
 <p> This project is a clone of Mangalayatan University, a leader in education. The website showcases the university's dedication to fostering a culture of hard work and preparing students for the fast-progressing world. It replicates the institution's commitment to academic excellence and innovative learning.</p>
 <p>Teach stack : HTML,CSS </p>
</div>
<div className="linkbuttons">
  <button className="livesite-getrepo"><a href="https://github.com/HarshitSharma2250/MangalayatanUniversity_clone/tree/main/mangalayatanUniversity" target="_blank" rel='mangalayan university github link'>Git Repo</a></button>
  <button className="livesite-getrepo"><a href="https://656b0f5d9cf6c73157d9d33a--extraordinary-cheesecake-bd5ce3.netlify.app/" target="_blank" rel='mangalayan university live demo link'>Live Site</a></button>
</div>
       </div>
        </SwiperSlide>




        <SwiperSlide>    
        <div className="projectsintro">
<div className="imgaeproject">
  <img className='allproductimg' src={reliance} alt="mangalayatan university" />
</div>
<div className="productContect">
 <h3>Reliance Digital Ecommerce</h3>
 <p>           This project is a clone of Reliance Digital Ecommerce, operated by Reliance Retail, Ltd. The website offers a comprehensive range of consumer electronics, home appliances, computing and mobility products, latest gadgets, and accessories. It replicates the extensive product offerings and innovative shopping experience that Reliance Digital is known for.     </p>
 <p>Teach stack : HTML,CSS,js,react,redux,resful API </p>
</div>
<div className="linkbuttons">
  <button className="livesite-getrepo"><a href="https://github.com/HarshitSharma2250/RelianceDigital" target="_blank" rel='Reliance Digital Ecommerce github link'>Git Repo</a></button>
  <button className="livesite-getrepo"><a href="https://harshitsharma2250.github.io/RelianceDigital/" target="_blank" rel='Reliance Digital Ecommerce live demo link'>Live Site</a></button>
</div>
       </div>
        </SwiperSlide>


        <SwiperSlide>    
        <div className="projectsintro">
<div className="imgaeproject">
  <img className='allproductimg' src={nufi} alt="mangalayatan university" style={{}}/>
</div>
<div className="productContect">
  <h3>Nufi Wallet</h3>
  <p>
    Nufi Wallet is a secure and user-friendly digital wallet for managing cryptocurrency transactions. It allows users to store multiple digital assets, send and receive funds, scan QR codes for transactions, and track their transaction history. The project focuses on providing a seamless and intuitive experience .
  </p>
  <p>
    Tech stack:React,Redux Toolkit,Tailwind,RESTful API,Axios,Axios Interceptors,Ether.js,Web3.js,QR
  </p>
</div>

<div className="linkbuttons">
  <button className="livesite-getrepo"><a href="https://wallet.nu.finance/auth/onboarding" target="_blank" rel='nufi wallet crypto wallet'>Live Site</a></button>
</div>
       </div>
        </SwiperSlide>


        <SwiperSlide>    
        <div className="projectsintro">
<div className="imgaeproject">
  <img className='allproductimg' src={ads_drop} alt="ads_drop" style={{}}/>
</div>
<div className="productContect">
  <h3>ADS_drop</h3>
  <p>
  Ads_Drop is a robust backend platform for managing digital ads and rewards. Built with Node.js, Express, and MongoDB, it efficiently handles ad placements, user tracking, and automated reward distribution with secure APIs, authentication, and performance optimization.
  </p>
  <p>
  Tech Stack: Node.js, Express, MongoDB, Mongoose, Node-cron, Multer, Cloudinary, Undici, Logger, JWT.
</p>
</div>

<div className="linkbuttons">
  <button className="livesite-getrepo"><a href="https://adsdrop-backend.onrender.com/home" target="_blank" rel='ads_drop project'>Live Site</a></button>
</div>
       </div>
        </SwiperSlide>



      </Swiper>
    </>
  )
}
