"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import s from "@/app/styles/homepage.module.css"
import image_1 from "../app/image/image_1.png"
import image_2_1 from "../app/image/image_2_1.png"
import image_2_2 from "../app/image/image_2_2.png"
import image_3 from "../app/image/image_3.png"
import image_4_1 from "../app/image/image_4_1.png"
import image_4_2_1 from "../app/image/image_4_2_1.png"
import image_4_2_2 from "../app/image/image_4_2_2.png"
import Sliderproduct from './components/sliderproduct';
import homiy_1 from "../app/image/homiy_1.png"
import homiy_2 from "../app/image/homiy_2.png"
import homiy_3 from "../app/image/homiy_3.png"
import homiy_4 from "../app/image/homiy_4.png"
import homiy_5 from "../app/image/homiy_5.png"
import homiy_6 from "../app/image/homiy_6.png"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from './components/NavbarPage'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

export default function page() {
  var [indexkey, setIndexKey] = useState(0)
  const swiperRef = useRef(null);
  const slideLabels = ['Yetkazib berish EAEI', 'Kabellar', 'Kontaktlar', 'Electronika', 'Kamera'];
  return (
    <div style={{marginBottom:'150px'}}>
      <Navbar />
      <div className={s.carousel_panel}>
        <Swiper
          cssMode={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
          {slideLabels.map((label, index) => (
            <SwiperSlide className={s.swipper_slide} style={{ background: `url('https://s3-alpha-sig.figma.com/img/59c5/7adf/480133e50b668d9a5199ba57bf0678dd?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fP0J65AKxtxN-q1La-BZNfkdkh8ntgqUUL98oAuCK9umcACy6TPvsdixhSWdIHs8M5Pd7hFsvBmP0rVQhfObTIqwN0MSUVY0Fi8ToN0I-ucj1eM3CFUq2itDTjZHqS7~~Oq92XQm2ZFmUpFNkLLxG1ofRa7YUPJiteMWbwATTV24PX3QLVuGf17lNh5DNx5L6fiClCDhWUXcNyJznlJtHGz0sG0djBSBa2MdrKSejfZsb1s852nX4jKcLK9KZ8BiEjU~kLm4rTz~ZzcEVq2XkLlHe3n000OKWgXv~yu3FznvRfae95B9e9cgzy9zGRuto3~Bd9IM1kxNGqGsoJd8kQ__')`, backgroundSize: 'cover' }} key={index}></SwiperSlide>
          ))}

        </Swiper>
        <div className={s.custom_pagination}>

          <div style={{ cursor: 'pointer', fontSize: "20px" }} className="swiper-button-prev1"
          >
            <FaArrowLeftLong onClick={() => {
              if (indexkey > 0) { setIndexKey(indexkey - 1); swiperRef.current.slideTo(indexkey); }
            }} /></div>

          <div style={{ cursor: 'pointer', fontSize: "20px" }} className="swiper-button-next1" >
            <FaArrowRightLong onClick={() => { if (indexkey < slideLabels.length - 1) { setIndexKey(indexkey + 1); swiperRef.current.slideTo(indexkey); } }} /></div>
        </div>
        <div className={s.mini_cantroll_bar}>
          {slideLabels.map((label, index) => (
            <div style={indexkey == index ? { borderBottom: "1px solid #E30613", color: '#E30613' } : { borderBottom: 'none', color: "black" }} key={index} className="pagination-button" onClick={() => { swiperRef.current.slideTo(index); setIndexKey(index) }} >
              {label}
            </div>
          ))}</div>
      </div>


      <div className={s.reklama_link}>
        <div className={s.reklama_link_first}>HAMKOR BO’LING</div>
        <div className={s.reklama_link_second}>SIZNI  HAMKORLIKKA  TAKLIF  QILAMIZ
          ISHLAB  CHIQARUVCHILAR  VA  DISTRIBYUTORLAR</div>
        <div className={s.reklama_link_button}>HOZIR  MUROJAT  QILING</div>
      </div>

<div className={s.hompage_category}>
<h4 className={s.hompage_category_title}>Ommabop Kategoriyalar</h4>
<div className={s.hompage_category_items}>
  <div className={s.hompage_category_item_1}>
    <Image src={image_1} alt="" />
<h3>Ledlar</h3>
  </div>
  <div className={s.hompage_category_item_2}>
  <div className={s.hompage_category_item_2_1}><h3>Akumlatorlar</h3>
  <Image src={image_2_1} alt="" />

  </div>
  <div className={s.hompage_category_item_2_2}><h3>Ulagichlar</h3>
  <Image src={image_2_2} alt="" />

  </div>
  </div>
  <div className={s.hompage_category_item_3}>
    <h3>O’lchov asboblari
      
    </h3>
    <Image src={image_3} alt="" />

  </div>
  <div className={s.hompage_category_item_4}>
    <div className={s.hompage_category_item_4_1}>
<h3>Avtomatik Boshqaruv</h3>
<Image src={image_4_1} alt="" />

    </div>
    <div className={s.hompage_category_item_4_2}>
<div className={s.hompage_category_item_4_2_1}>
  <h3>Avto zapchas</h3>
  <Image src={image_4_2_1} alt="" />

</div>
<div className={s.hompage_category_item_4_2_2}>
  <h3>Rezistorlar</h3>
  <Image src={image_4_2_2} alt="" />
</div>

</div>
  </div>
</div>
</div>
<Sliderproduct  mapdata={[]} id={"topTovarId"} data={{title:'Top sotuvlar',
      h1:'Eng mashhur mahsulotlar',
      p:'Bizning mijozlarimiz tanlovi'
      }}/>
      <Sliderproduct  mapdata={[]} id={"topTovarId"} data={{title:'Eng yaxshi takliflar',
      h1:'Foydali taklif',
      p:'Ajoyib takliflar va maxsus narxlar haqida bilib oling. Faqat shu oy!'
      }}/>
      <Sliderproduct  mapdata={[]} id={"topTovarId"} data={{title:'Mashhur',
      h1:"Birinchi bo'lib xarid qiling",
      p:"Yuqori talabga ega bo'lgan yangi mahsulotlar"
      }}/>


<div className={s.barcha_homiylar}>
  <h2 className="barcha_homiylar_title">

  </h2>
  <Swiper
          cssMode={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          slidesPerView={5} // Bu yerda 5 ta slayd ko'rsatiladi
          modules={[Navigation]}
          className="mySwiper1"
         
        >
          {slideLabels.map((label, index) => (
            <SwiperSlide  key={index}>
              salom
            </SwiperSlide>
          ))}
  <div className={s.button___swippwer} >

          <div style={{ cursor: 'pointer', fontSize: "20px" }} className="swiper-button-prev"
          >
            <FaArrowLeftLong /></div>
          <div style={{ cursor: 'pointer', fontSize: "20px" }} className="swiper-button-next" >
            <FaArrowRightLong /></div>
        </div>
        </Swiper>
      
</div>



    </div>


  )
}
