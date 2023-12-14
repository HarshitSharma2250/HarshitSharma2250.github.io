import React, { useRef, useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Project.css'
import brindalReflection from '../../images/brindalReflection.png'
import everestPage from '../../images/everestPage.png'
import mangalayatanPage from '../../images/mangalayatanPage.png'
import mahakalresume from '../../images/mahakalresume.png'



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
  <img className='allproductimg' src={brindalReflection} alt="" />
</div>
<div className="productContect">
 <h3> Brindal Reflection</h3>
 <p> this website is a dummy clone of Bridal Reflections it is a bridal salon that has been helping brides find their dream wedding gown for over 50 years. </p>
 <p>Teach stack : HTML,CSS ,Javascript</p>
</div>
<div className="linkbuttons">
  <button className="livesite-getrepo"><a href="https://github.com/HarshitSharma2250/My-projects/tree/main/brindal%20reflection/brindal" target="_blank" rel="brindal reflection github link" >Git Repo</a></button>
  <button className="livesite-getrepo"><a href="https://656997c94b57f57185282c90--gleeful-pastelito-a5508e.netlify.app/" target="_blank" rel="brindel reflection live demo link">Live Site</a></button>
</div>
       </div>
        </SwiperSlide>


        <SwiperSlide>  
  <div className="projectsintro">
<div className="imgaeproject">
  <img className='allproductimg' src={everestPage} alt="" />
</div>
<div className="productContect">
 <h3> Everest Spices</h3>
 <p> this website is a clone of Everest Spices,Everest is India's No. 1 spice brand that offers a wide range of whole spices and blends,Everest's great taste of purity is backed by research, innovation and technology. </p>
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
 <p> this website is a  clone of Mangalayatan University, Mangalayatan University is the leader in education, aims to provide culture of hardwork & preparing everyone for fast progressing world</p>
 <p>Teach stack : HTML,CSS </p>
</div>
<div className="linkbuttons">
  <button className="livesite-getrepo"><a href="https://github.com/HarshitSharma2250/MangalayatanUniversity_clone/tree/main/mangalayatanUniversity" target="_blank" rel='mangalayan university github link'>Git Repo</a></button>
  <button className="livesite-getrepo"><a href="https://656b0f5d9cf6c73157d9d33a--extraordinary-cheesecake-bd5ce3.netlify.app/" target="_blank" rel='mangalayan university livr demo link'>Live Site</a></button>
</div>
       </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
