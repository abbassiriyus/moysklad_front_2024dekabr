"use client";
import React, { useState } from 'react'
import Navbar from '../../components/NavbarPage'
import Footer1 from "../../components/footer"
import s from "../../styles/catalog.module.css"
import Image from 'next/image';
import product_image from "../../image/product__image.png"
import MultiRangeSlider from '../../components/multiRangeSlider/MultiRangeSlider';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdRefresh } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import Pagination from '../../components/pagnation/Pagnation';
export default function catalog() {
 

  var [min2,setMin]=useState(0);
  var [max2,setMax]=useState(20000);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Umumiy sahifalar soni

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    return (
        <div>
            <Navbar />
    <div className={s.catalog__title}>Termal tasvirlar bo’limi</div>
    <div className={s.catalog_body}>
      <div className={s.catalog_media_button}><FaFilter  className={s.catalog_media_button__icons} /> Filter narxi</div>
<div className={s.catalog_filter}>
  <h2>Summa</h2>
  <MultiRangeSlider
      min={0}
      max={20000}
      onChange={(e) => {setMin(e.min);setMax(e.max)}}
    />
    <div className={s.catalog_filter_result}>
      <div className={s.catalog_filter_min}>{min2}</div>
      <div className={s.catalog_filter_max}>{max2}</div>
    </div>
<div className={s.catalog_filter_line}></div>
<div className={s.catalog_filter_button}> <MdRefresh style={{fontSize:'20px'}} /> Filterni tozalash</div>
</div>
<div className={s.catalog_cards}>
  <div className={s.catalog_card}>
    <div className={s.catalog_card_image}>
      <Image className={s.catalog_image} src={product_image} alt="" />
      <h5>Temperatura o’lchagich</h5>
      <p>DT-870, issiqlik tasviri  -20°C...380°C 50Hz (Rossiya federatsiyasi Davlat reestri)</p>
      <span>Sotuvda bor:
      24  dona</span>
      <h1>43 850 sum</h1> 
      <div className={s.catalog_icons}>
        <TbShoppingBagPlus  style={{fontSize:'20px',color:'#6a6a6a'}} />
      </div>
    </div>
  </div>
  <div className={s.catalog_card}>
    <div className={s.catalog_card_image}>
      <Image className={s.catalog_image} src={product_image} alt="" />
      <h5>Temperatura o’lchagich</h5>
      <p>DT-870, issiqlik tasviri  -20°C...380°C 50Hz (Rossiya federatsiyasi Davlat reestri)</p>
      <span>Sotuvda bor:
      24  dona</span>
      <h1>43 850 sum</h1> 
      <div className={s.catalog_icons}>
        <TbShoppingBagPlus style={{fontSize:'20px',color:'#6a6a6a'}} />
      </div>
    </div>
  </div>
  <div className={s.catalog_card}>
    <div className={s.catalog_card_image}>
      <Image className={s.catalog_image} src={product_image} alt="" />
      <h5>Temperatura o’lchagich</h5>
      <p>DT-870, issiqlik tasviri  -20°C...380°C 50Hz (Rossiya federatsiyasi Davlat reestri)</p>
      <span>Sotuvda bor:
      24  dona</span>
      <h1>43 850 sum</h1> 
      <div className={s.catalog_icons}>
        <TbShoppingBagPlus style={{fontSize:'20px',color:'#6a6a6a'}} />
      </div>
    </div>
  </div>
  <div className={s.catalog_card}>
    <div className={s.catalog_card_image}>
      <Image className={s.catalog_image} src={product_image} alt="" />
      <h5>Temperatura o’lchagich</h5>
      <p>DT-870, issiqlik tasviri  -20°C...380°C 50Hz (Rossiya federatsiyasi Davlat reestri)</p>
      <span>Sotuvda bor:
      24  dona</span>
      <h1>43 850 sum</h1> 
      <div className={s.catalog_icons}>
        <TbShoppingBagPlus style={{fontSize:'20px',color:'#6a6a6a'}} />
      </div>
    </div>
  </div>
  <div className={s.catalog_card}>
    <div className={s.catalog_card_image}>
      <Image className={s.catalog_image} src={product_image} alt="" />
      <h5>Temperatura o’lchagich</h5>
      <p>DT-870, issiqlik tasviri  -20°C...380°C 50Hz (Rossiya federatsiyasi Davlat reestri)</p>
      <span>Sotuvda bor:
      24  dona</span>
      <h1>43 850 sum</h1> 
      <div className={s.catalog_icons}>
        <TbShoppingBagPlus style={{fontSize:'20px',color:'#6a6a6a'}} />
      </div>
    </div>
  </div>
  <div className={s.catalog_card}>
    <div className={s.catalog_card_image}>
      <Image className={s.catalog_image} src={product_image} alt="" />
      <h5>Temperatura o’lchagich</h5>
      <p>DT-870, issiqlik tasviri  -20°C...380°C 50Hz (Rossiya federatsiyasi Davlat reestri)</p>
      <span>Sotuvda bor:
      24  dona</span>
      <h1>43 850 sum</h1> 
      <div className={s.catalog_icons}>
        <TbShoppingBagPlus style={{fontSize:'20px',color:'#6a6a6a'}} />
      </div>
    </div>
  </div>
</div>
    </div>


    <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
            <Footer1 />
        </div>
    )
}
