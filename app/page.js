"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import s from "./styles/homepage.module.css"
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
import roboto from "../app/image/roboto.png"
import homiy_3 from "../app/image/homiy_3.png"
import homiy_4 from "../app/image/homiy_4.png"
import homiy_5 from "../app/image/homiy_5.png"
import homiy_6 from "../app/image/homiy_6.png"
import { GoStarFill } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import Footer from "../app/components/footer.js"
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
  const sponsors = [
   'https://s3-alpha-sig.figma.com/img/967c/29ca/cfd39f55137972e1ed3213a33de45348?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aHl5HEnQk6CGwPRJA7CYs7JPKpeam1uGsxuI~EhMx5LPcUH-YAEwzUTrtAgDShM4TDF5oThIipQ~FVsINB~RGR0cbvr1NUCB1UoYyMlLfHzKzjU~bCNCbw2Pbu4iv1WHvleaRcgBSVEbaZu8RTfgJKqZT9FyFX4upFcmonkE9azpXgEaJ9L9pFrMu~NSlmTReuSEEE8Xw76g3PYmIyZvjH3L6qu5kuDEz0K7RYtATtuiqYR3CjZ8KpCROQQZ2FCXJyM6a95zfhDFBqPLQHdPLtI7dHd1JbJdvUnaUXlFusD0mtditUuc8FTxg-2V~c4mt0QPwarJsOIqK8jwPLr9Nw__',
    'https://s3-alpha-sig.figma.com/img/d673/eaf0/f0918996f53f9f45d8a9cc084b448aba?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cunZit7VwqUVlSFj-EBEI8LRTt~v9c9HBF1kRTim4f6QhWJs9UX1qxVWFy2LAsi0BGknFHTJ5JSfvQH0x2VaIG7GwifRIgWdocr1wPn4MEeX~bqHJSjphJSRm-FMHfT9tYCOApPZbAGyr2N~qV7apN2~fEdq4dgf9ds5NGi13Rgrkb2HSEqulLLxaR~ls87jkPmlGivXnLTxs4kpcar8VIFYI2WtMk3kmnQHjwvRMmSpMlFW3UV96NRHhwLR3WpXNvgQCc4TKp2bstOZ9xTOiMGlZ0EDmSmLpq6QBNe3NTlMsnSjWRCCbsbQjP2eEHJMv6D4ca17jhu8ymQzJocVNA__',
    homiy_3,
    homiy_4,
    homiy_5,
    homiy_6,
];
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
                {sponsors.map((logo, index) => (
                    <SwiperSlide style={{display:'flex',justifyContent:'center',alignItems:'center'}} key={index}>
                        <img src={logo} alt={`Sponsor ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
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
    <img src="https://s3-alpha-sig.figma.com/img/29c1/efe1/a14006b8f6cef9d91076ce8376ce219f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYpwfX-OdlLDM-dD3Fhw9RkW83emkW5F2D19bpNhrmhUosMPZvUXETIA-hxbL7kehjYG9YOUsmtaZ-FQ~YDpKIklQizgJaXpX6ZbuZGA1vVR8TQrUTfsiYxyUf8OCXjged2vPbWjrZNOd8HqLbGqieYFiHTosGFasy7dTy2fGtFJOTPLGLQDiSE-c3mKHUCjByXzyMy0XDVLpbMHfOahY6YQbFB5gsSlJqlwepL651Sxu35J6YtoZoif3Z1Fm3edxwxL6i4cdnDywPrrYaTEbicskgj24muSEAyBIC8BmWNWBUNWrsX47na4A0izCfkK5xJKjK0f38ODm94G92MVMA__" alt="" />
    <div>
      <p>17.06.2024</p>
      <p>10ta xarid uchun +2ta mahsulot</p>
    </div>
  </div>
  <div className={s.yangilik__card}>
    <img src="https://s3-alpha-sig.figma.com/img/29c1/efe1/a14006b8f6cef9d91076ce8376ce219f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYpwfX-OdlLDM-dD3Fhw9RkW83emkW5F2D19bpNhrmhUosMPZvUXETIA-hxbL7kehjYG9YOUsmtaZ-FQ~YDpKIklQizgJaXpX6ZbuZGA1vVR8TQrUTfsiYxyUf8OCXjged2vPbWjrZNOd8HqLbGqieYFiHTosGFasy7dTy2fGtFJOTPLGLQDiSE-c3mKHUCjByXzyMy0XDVLpbMHfOahY6YQbFB5gsSlJqlwepL651Sxu35J6YtoZoif3Z1Fm3edxwxL6i4cdnDywPrrYaTEbicskgj24muSEAyBIC8BmWNWBUNWrsX47na4A0izCfkK5xJKjK0f38ODm94G92MVMA__" alt="" />
    <div>
      <p>17.06.2024</p>
      <p>10ta xarid uchun +2ta mahsulot</p>
    </div>
  </div>
  <div className={s.yangilik__card}>
    <img src="https://s3-alpha-sig.figma.com/img/29c1/efe1/a14006b8f6cef9d91076ce8376ce219f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYpwfX-OdlLDM-dD3Fhw9RkW83emkW5F2D19bpNhrmhUosMPZvUXETIA-hxbL7kehjYG9YOUsmtaZ-FQ~YDpKIklQizgJaXpX6ZbuZGA1vVR8TQrUTfsiYxyUf8OCXjged2vPbWjrZNOd8HqLbGqieYFiHTosGFasy7dTy2fGtFJOTPLGLQDiSE-c3mKHUCjByXzyMy0XDVLpbMHfOahY6YQbFB5gsSlJqlwepL651Sxu35J6YtoZoif3Z1Fm3edxwxL6i4cdnDywPrrYaTEbicskgj24muSEAyBIC8BmWNWBUNWrsX47na4A0izCfkK5xJKjK0f38ODm94G92MVMA__" alt="" />
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
</div>
<Footer/>




    </div>


  )
}
