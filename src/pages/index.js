"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from "../styles/homepage.module.css"
import new_1 from '../image/new_1.png'
import new_2 from '../image/new_2.png'
import new_3 from '../image/new_3.png'

import Sliderproduct from '../components/sliderproduct';
import roboto from "../image/roboto.png"
import { GoStarFill } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import Footer from "../components/footer.js"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from '../components/NavbarPage'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';
import axios from 'axios';
import url from '../host/host';
import Head from 'next/head';

export default function page() {
  var [indexkey, setIndexKey] = useState(0)
  const swiperRef = useRef(null);
var [headerImage,setHeaderImage]=useState([])
var [homiy,setHomiy]=useState([])
var [categoryHeader,setCategoryHeader]=useState([])
var [topTovar,setTopTovar]=useState([])
var [mashxur,setMashxur]=useState([])
var [product,setProduct]=useState([])
var [link,setLink]=useState("")
var [topTovar_1,setTopTovar_1]=useState('')

var [mashhur_1,setMashxur_1]=useState('')

function getContent() {
  axios.get(`${url}/api/carousel`).then(res=>{
    axios.get(`${url}/api/homiy`).then(res1=>{
    setHeaderImage(res.data)
    setHomiy(res1.data)
    })
  })
}
 
function getHeaderData() {
  axios.get(`${url}/api/header_category`).then(res=>{
    setCategoryHeader(res.data)
  })
.catch(err=>{

})
}
useEffect(()=>{
  axios.get(`${url}/api/product?limit=10`).then(Res=>{
    setProduct(Res.data);
    getContent();
    axios.get(`${url}/api/best_seller`).then(res1=>{
      if(res1.data.length>0){
        setMashxur_1(res1.data[0].category_id)
        axios.get(`${url}/api/category/product/${res1.data[0].category_id}?limit=10`).then(res12=>{
  setMashxur(res12.data)
  axios.get(`${url}/api/top_tovar`).then(res2=>{
    if(res2.data.length>0){
      setTopTovar_1(res2.data[0].category_id)
      axios.get(`${url}/api/category/product/${res2.data[0].category_id}?limit=10`).then(res22=>{
setTopTovar(res22.data)
axios.get(`${url}/api/document`).then(res23=>{
if(res23.data.length>0){  
  setLink(res23.data[0].image)  
}

}).catch(err=>{

})

      })
    }
  })

        })
      }
    })
  })
 
  getHeaderData();
 
},[])

  return (
    <div >
            <Head>
        <title>RCE.uz - Elektronika do'koni</title>
        <meta name="description" content="RCE.uz - Eng so'nggi elektronika mahsulotlarini, telefonlar, kompyuterlar, televizorlar va boshqa ko'plab mahsulotlarni eng yaxshi narxlarda sotib oling." />
        <meta name="keywords" content="elektronika, telefonlar, kompyuterlar, televizorlar, RCE.uz, onlayn do'kon, elektronika sotuv" />
        <meta property="og:title" content="RCE.uz - Elektronika do'koni" />
        <meta property="og:description" content="Eng so'nggi elektronika mahsulotlarini eng yaxshi narxlarda sotib oling." />
        <meta property="og:url" content="https://rce.uz" />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <link rel="canonical" href="https://rce.uz" />
      </Head>


      <div style={{padding:"0 20px"}}>
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
          id={s.swipper_home}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
          {headerImage.map((label, index) => (
            <SwiperSlide onClick={()=>{window.location=`/catalog/${label.category_id}?name=${label.title}`}}  className={s.swipper_slide} style={{ background: `url('${label.image}')`, backgroundSize: 'cover' }} key={index}></SwiperSlide>
          ))}

        </Swiper>
        <div className={s.custom_pagination}>

          <div style={{ cursor: 'pointer', fontSize: "20px" }} className="swiper-button-prev1"
          >
            <FaArrowLeftLong onClick={() => {
              if (indexkey > 0) { setIndexKey(indexkey - 1); swiperRef.current.slideTo(indexkey); }
            }} /></div>

          <div style={{ cursor: 'pointer', fontSize: "20px" }} className="swiper-button-next1" >
            <FaArrowRightLong onClick={() => { if (indexkey < headerImage.length - 1) { setIndexKey(indexkey + 1); swiperRef.current.slideTo(indexkey); } }} /></div>
        </div>
        <div className={s.mini_cantroll_bar}>
          {headerImage.map((label, index) => (
            <div style={indexkey == index ? { borderBottom: "1px solid #E30613", color: '#E30613',textWrap:'nowrap',cursor:'pointer' } : { borderBottom: 'none', color: "black",cursor:'pointer' }} key={index} className="pagination-button" onClick={() => { swiperRef.current.slideTo(index); setIndexKey(index) }} >
              {label.title}
            </div>
          ))}</div>
      </div>
      </div>


      <div className={s.reklama_link}>
        <div className={s.reklama_link_first}>HAMKOR BO’LING</div>
        <div className={s.reklama_link_second}>SIZNI  HAMKORLIKKA  TAKLIF  QILAMIZ
          ISHLAB  CHIQARUVCHILAR  VA  DISTRIBYUTORLAR</div>
        <div onClick={()=>window.location=link} className={s.reklama_link_button}>HOZIR  MUROJAT  QILING</div>
      </div>

{categoryHeader.length>6?(<div className={s.hompage_category}>
<h4 className={s.hompage_category_title}>Ommabop Kategoriyalar</h4>
<div className={s.hompage_category_items}>
  <div className={s.hompage_category_item_1}>
    <img src={categoryHeader[0].image} alt="" />
<h3>{categoryHeader[0].category_title}</h3>
  </div>
  <div className={s.hompage_category_item_2}>
  <div className={s.hompage_category_item_2_1}><h3>{categoryHeader[1].category_title}</h3>
  <img src={categoryHeader[1].image} alt="" />

  </div>
  <div className={s.hompage_category_item_2_2}><h3>{categoryHeader[2].category_title}</h3>
  <img src={categoryHeader[2].image} alt="" />

  </div>
  </div>
  <div className={s.hompage_category_item_3}>
    <h3>{categoryHeader[3].category_title}
      
    </h3>
    <img src={categoryHeader[3].image} alt="" />

  </div>
  <div className={s.hompage_category_item_4}>
    <div className={s.hompage_category_item_4_1}>
<h3>{categoryHeader[4].category_title}</h3>
<img src={categoryHeader[4].image} alt="" />

    </div>
    <div className={s.hompage_category_item_4_2}>
<div className={s.hompage_category_item_4_2_1}>
  <h3>{categoryHeader[5].category_title}</h3>
  <img src={categoryHeader[5].image} alt="" />

</div>
<div className={s.hompage_category_item_4_2_2}>
  <h3>{categoryHeader[6].category_title}</h3>
  <img src={categoryHeader[6].image} alt="" />
</div>

</div>
  </div>
</div>
</div>):(<></>)}

<div>
<Sliderproduct  mapdata={product} id={0} data={{title:'Top sotuvlar',
      h1:'Eng mashhur mahsulotlar',
      p:'Bizning mijozlarimiz tanlovi'
      }}/>
      <Sliderproduct  mapdata={mashxur} id={mashhur_1} data={{title:'Eng yaxshi takliflar',
      h1:'Foydali taklif',
      p:'Ajoyib takliflar va maxsus narxlar haqida bilib oling. Faqat shu oy!'
      }}/>
      <Sliderproduct  mapdata={topTovar} id={topTovar_1} data={{title:'Mashhur',
      h1:"Birinchi bo'lib xarid qiling",
      p:"Yuqori talabga ega bo'lgan yangi mahsulotlar"
      }}/>
      </div>

<div style={{padding:"0 20px"}}>
<div className={s.barcha_homiylar}>
<h2 className={s.title_homiylar}>
Barcha Diller va Distrebutellar
</h2>
<Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={5}
              navigation={{
                  nextEl: '.swiper-button-next3',
                  prevEl: '.swiper-button-prev3',
              }}
              breakpoints={{
                  240: {
                      slidesPerView: 2,
                  },
                  768: {
                      slidesPerView: 3,
                  },
                  1024: {
                      slidesPerView: 5,
                  },
              }}
            >
                {homiy.map((logo, index) => (
                    <SwiperSlide style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'30px'}} key={index}>
                        <img src={logo.image} alt={`Sponsor ${index + 1}`} style={{ maxWidth:'100%', maxHeight: '100px' }} />
                    </SwiperSlide>
                ))}
                      {/* Custom Navigation Buttons */}
                      <div className="swiper-button-prev3" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',zIndex:123 }}>
                    <FaArrowLeftLong size={30} />
                </div>
                <div className="swiper-button-next3" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',zIndex:123 }}>
                    <FaArrowRightLong size={30} />
                </div>
            </Swiper>
      
</div>



<div className={s.video_yangilik}>
<div className={s.video}>
<h2 className={s.video__title}>Videolar</h2>
<div className={s.video__body}>
  <div className={s.video__big}>
  <iframe style={{width:'100%'}}  src="https://www.youtube.com/embed/3YfZcNUhBKY?si=UmGhlbLKC1TAegHq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<p>  <GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /> 18.46</p>
  <h5>Video qo’llanma</h5>
  </div>
  <div className={s.video__smallCards}>
<div className={s.video__smallCard}>
<iframe style={{width:'100%'}}  src="https://www.youtube.com/embed/IVsY9zZDDKM?si=7j_DEhnAJ-DwqKfH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<p><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /> 18.46</p>
<h5>Video qo’llanma</h5>
</div>
<div className={s.video__smallCard}>
<iframe style={{width:'100%'}}  src="https://www.youtube.com/embed/thDywCDzBAw?si=KjumKZsjqmxrQ2Yt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<p><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /> 18.46 </p>
<h5>Video qo’llanma</h5>
</div>
  </div>
</div>
</div>
<div className={s.yangilik}>
  <h2 className={s.yangilik__title}>Yangiliklar</h2>
<div className={s.yangilik__cards}>
  <div className={s.yangilik__card}>
    <Image style={{width:'100%'}} src={new_1} alt="" />
    <div>
      <p>17.06.2024</p>
      <p>10ta xarid uchun +2ta mahsulot</p>
    </div>
  </div>
  <div className={s.yangilik__card}>
    <Image  style={{width:'100%'}}  src={new_2} alt="" />
    <div>
      <p>17.06.2024</p>
      <p>10ta xarid uchun +2ta mahsulot</p>
    </div>
  </div>
  <div className={s.yangilik__card}>
    <Image  style={{width:'100%'}}  src={new_3} alt="" />
    <div>
      <p>17.06.2024</p>
      <p>10ta xarid uchun +2ta mahsulot</p>
    </div>
  </div>
</div>
</div>
</div>


<div className={s.radiocity_1}>
<p className={s.radiocity_1_p}>
RADIO CITY - bu mikroelektronika bozoridagi noyob va eng taniqli brend.Biz yetkazib beramiz elektron komponentlar, o'lchash asboblari, lehim uskunalari, asboblar, Arduino komponentlari, elektr mahsulotlari, maishiy elektronika uchun butlovchi qismlar va boshqalar.
<br /><br />

Kengaytirilgan, muntazam yangilanib turuvchi katalog 7 000 000 dan ortiqni o'z ichiga oladi. tovarlar nomlari. Aqlli va qulay mahsulotni qidirish, etkazib berishning har xil turlari va usullari to'lov. Mahsulot mavjudligi va yetkazib berish muddatlari haqidagi soʻnggi maʼlumotlar.
<br /><br />
Buyurtmalarni Rossiya, Belarus, Qozog'iston, Armaniston va Qirg'izistonning barcha hududlariga yetkazib beramiz.
</p>
<Image className={s.radiocity_1_img} src={roboto} alt="" />
</div></div>
<Footer/>




    </div>


  )
}
