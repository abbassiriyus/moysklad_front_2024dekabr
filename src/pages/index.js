"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "../styles/homepage.module.css";
import new_1 from "../image/new_1.png";
import new_2 from "../image/new_2.png";
import new_3 from "../image/new_3.png";
import Sliderproduct from "../components/sliderproduct";
import roboto from "../image/roboto.png";
import { GoStarFill } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import Footer from "../components/footer.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../components/NavbarPage";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import axios from "axios";
import url from "../host/host";
import Head from "next/head";

// JSON-LD tuzilgan ma'lumotlar
const getJsonLd = () => [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RCE.uz",
    url: "https://rce.uz",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://rce.uz/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Radio City",
    url: "https://rce.uz",
    logo: "https://api.rce.uz/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Afrosiyob Ko‘chasi 412",
      addressLocality: "Buxoro",
      addressRegion: "Buxoro viloyati",
      postalCode: "200100",
      addressCountry: "UZ",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+998973048888",
        contactType: "Customer Service",
        areaServed: "UZ",
        availableLanguage: ["Uzbek", "Russian"],
      },
    ],
    sameAs: [
      "https://t.me/radiocityuz",
      "https://x.com/radiocityuz",
      "https://instagram.com/radiocityuz",
    ],
  },
];

export default function Page() {
  const [indexkey, setIndexKey] = useState(0);
  const swiperRef = useRef(null);
  const [headerImage, setHeaderImage] = useState([]);
  const [homiy, setHomiy] = useState([]);
  const [categoryHeader, setCategoryHeader] = useState([]);
  const [topCarousels, setTopCarousels] = useState([]);
  const [link, setLink] = useState("");

  function getContent() {
    axios.get(`${url}/api/carousel`).then((res) => {
      axios.get(`${url}/api/homiy`).then((res1) => {
        setHeaderImage(res.data);
        setHomiy(res1.data);
      });
    });
  }

  function getHeaderData() {
    axios
      .get(`${url}/api/header_category`)
      .then((res) => {
        setCategoryHeader(res.data);
      })
      .catch((err) => {
        console.error("Header kategoriyalarni olishda xato:", err);
      });
  }

  function getTopCarousels() {
    axios
      .get(`${url}/api/top_carousel`)
      .then((res) => {
        Promise.all(
          res.data.map((carousel) =>
            axios
              .get(`${url}/api/category/product/${carousel.category_id}?limit=10`)
              .then((productRes) => ({
                ...carousel,
                products: productRes.data,
              }))
          )
        )
          .then((carouselsWithProducts) => {
            setTopCarousels(carouselsWithProducts);
          })
          .catch((err) => {
            console.error("Mahsulotlarni olishda xato:", err);
          });
      })
      .catch((err) => {
        console.error("Top carousel ma'lumotlarini olishda xato:", err);
      });
  }

  useEffect(() => {
    axios.get(`${url}/api/product?limit=10`).then((res) => {
      getContent();
      axios.get(`${url}/api/document`).then((res23) => {
        if (res23.data.length > 0) {
          setLink(res23.data[0].image);
        }
      });
    });
    getHeaderData();
    getTopCarousels();
  }, []);

  return (
    <div>
      <Head>
        <title>RCE.uz - Buxoro Elektronika Do‘koni</title>
        <meta
          name="description"
          content="RCE.uz - Buxoro, Afrosiyob Ko‘chasi 412 da smartfonlar, noutbuklar, televizorlar va gadjetlar eng yaxshi narxlarda. ☎️ +998973048888"
        />
        <meta
          name="keywords"
          content="RCE.uz,
          rce,
           Buxoro elektronika,
            smartfon Buxoro,
             noutbuk Buxoro,
              gadjetlar Buxoro,
               O‘zbekiston elektronika, 
               Buxoro smartfonlar narxi,
                Radio City chegirma, 
                Buxoro onlayn do‘kon,
                 elektronika yetkazib berish, 
                 Afrosiyob Ko‘chasi 412,
                  Samsung Buxoro,
                   Apple Buxoro, 
                   Xiaomi narxi,
                    televizor sotib olish"
        />
        <meta property="og:title" content="RCE.uz - Buxoro Elektronika Do‘koni" />
        <meta
          property="og:description"
          content="Eng so‘nggi elektronika mahsulotlari: smartfonlar, noutbuklar, gadjetlar. Radio City Buxoro, Afrosiyob Ko‘chasi 412. rce.uz"
        />
        <meta property="og:url" content="https://rce.uz" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://api.rce.uz/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RCE.uz - Buxoro Elektronika Do‘koni" />
        <meta
          name="twitter:description"
          content="Eng yaxshi elektronika mahsulotlari Radio City Buxoro’da. Afrosiyob Ko‘chasi 412. rce.uz"
        />
        <meta name="twitter:image" content="https://api.rce.uz/logo.png" />
        <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="geo.region" content="UZ-Buxoro" />
        <meta name="geo.placename" content="Buxoro, O‘zbekiston" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://rce.uz" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd()) }}
        />
      </Head>

      <div style={{ padding: "0 20px" }}>
        <Navbar />
        <div className={s.carousel_panel}>
          <Swiper
            cssMode={true}
            navigation={{
              nextEl: ".swiper-button-next1",
              prevEl: ".swiper-button-prev1",
            }}
            mousewheel={true}
            keyboard={true}
            id={s.swipper_home}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {headerImage.map((label, index) => (
              <SwiperSlide
                onClick={() => {
                  window.location = `/catalog/${label.category_id}?name=${label.title}`;
                }}
                className={s.swipper_slide}
                style={{ background: `url('${label.image}')`, backgroundSize: "cover" }}
                key={index}
              >
                <img
                  src={label.image}
                  alt={`${label.title} - Radio City Buxoro, Afrosiyob Ko‘chasi 412`}
                  style={{ display: "none" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={s.custom_pagination}>
            <div style={{ cursor: "pointer", fontSize: "20px" }} className="swiper-button-prev1">
              <FaArrowLeftLong
                onClick={() => {
                  if (indexkey > 0) {
                    setIndexKey(indexkey - 1);
                    swiperRef.current.slideTo(indexkey);
                  }
                }}
              />
            </div>
            <div style={{ cursor: "pointer", fontSize: "20px" }} className="swiper-button-next1">
              <FaArrowRightLong
                onClick={() => {
                  if (indexkey < headerImage.length - 1) {
                    setIndexKey(indexkey + 1);
                    swiperRef.current.slideTo(indexkey);
                  }
                }}
              />
            </div>
          </div>
          <div className={s.mini_cantroll_bar}>
            {headerImage.map((label, index) => (
              <div
                style={
                  indexkey === index
                    ? { borderBottom: "1px solid #E30613", color: "#E30613", textWrap: "nowrap", cursor: "pointer" }
                    : { borderBottom: "none", color: "black", cursor: "pointer" }
                }
                key={index}
                className="pagination-button"
                onClick={() => {
                  swiperRef.current.slideTo(index);
                  setIndexKey(index);
                }}
              >
                {label.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={s.reklama_link}>
        <div className={s.reklama_link_first}>HAMKOR BO’LING</div>
        <div className={s.reklama_link_second}>
          SIZNI HAMKORLIKKA TAKLIF QILAMIZ ISHLAB CHIQARUVCHILAR VA DISTRIBYUTORLAR
        </div>
        <div onClick={() => (window.location = link)} className={s.reklama_link_button}>
          HOZIR MUROJAT QILING
        </div>
      </div>

      {categoryHeader.length > 6 ? (
        <div className={s.hompage_category}>
          <h4 className={s.hompage_category_title}>Ommabop Kategoriyalar</h4>
          <div className={s.hompage_category_items}>
            <div className={s.hompage_category_item_1}>
              <img
                src={categoryHeader[0].image}
                alt={`${categoryHeader[0].category_title} - Radio City Buxoro, Afrosiyob Ko‘chasi 412`}
              />
              <h3>{categoryHeader[0].category_title}</h3>
            </div>
            <div className={s.hompage_category_item_2}>
              <div className={s.hompage_category_item_2_1}>
                <h3>{categoryHeader[1].category_title}</h3>
                <img
                  src={categoryHeader[1].image}
                  alt={`${categoryHeader[1].category_title} - Radio City Buxoro, Afrosiyob Ko‘chasi 412`}
                />
              </div>
              <div className={s.hompage_category_item_2_2}>
                <h3>{categoryHeader[2].category_title}</h3>
                <img
                  src={categoryHeader[2].image}
                  alt={`${categoryHeader[2].category_title} - Radio City Buxoro, Afrosiyob Ko‘chasi 412`}
                />
              </div>
            </div>
            <div className={s.hompage_category_item_3}>
              <h3>{categoryHeader[3].category_title}</h3>
              <img
                src={categoryHeader[3].image}
                alt={`${categoryHeader[3].category_title} - Radio City Buxoro, Afrosiyob Ko‘chasi 412`}
              />
            </div>
            <div className={s.hompage_category_item_4}>
              <div className={s.hompage_category_item_4_1}>
                <h3>{categoryHeader[4].category_title}</h3>
                <img
                  src={categoryHeader[4].image}
                  alt={`${categoryHeader[4].category_title} - Radio City Buxoro, Afrosiyob Ko‘chasi 412`}
                />
              </div>
              <div className={s.hompage_category_item_4_2}>
                <div className={s.hompage_category_item_4_2_1}>
                  <h3>{categoryHeader[5].category_title}</h3>
                  <img
                    src={categoryHeader[5].image}
                    alt={`${categoryHeader[5].category_title} - Radio City Buxoro, Afrosiyob Ko‘chasi 412`}
                  />
                </div>
                <div className={s.hompage_category_item_4_2_2}>
                  <h3>{categoryHeader[6].category_title}</h3>
                  <img
                    src={categoryHeader[6].image}
                    alt={`${categoryHeader[6].category_title} - Radio City Buxoro, Afrosiyob Ko‘chasi 412`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div>
        {topCarousels.map((carousel, index) => (
          <Sliderproduct
            key={index}
            mapdata={carousel.products}
            id={carousel.category_id}
            data={{
              title: carousel.title_carousel,
              h1: carousel.title_menu,
              p: carousel.p_menu,
            }}
          />
        ))}
      </div>

      <div style={{ padding: "0 20px" }}>
        <div className={s.barcha_homiylar}>
          <h2 className={s.title_homiylar}>Barcha Diller va Distrebutellar</h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={5}
            navigation={{
              nextEl: ".swiper-button-next3",
              prevEl: ".swiper-button-prev3",
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
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px" }}
                key={index}
              >
                <img
                  src={logo.image}
                  alt={`Radio City hamkor ${index + 1} - Buxoro, Afrosiyob Ko‘chasi 412`}
                  style={{ maxWidth: "100%", maxHeight: "100px" }}
                />
              </SwiperSlide>
            ))}
            <div
              className="swiper-button-prev3"
              style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 123 }}
            >
              <FaArrowLeftLong size={30} />
            </div>
            <div
              className="swiper-button-next3"
              style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 123 }}
            >
              <FaArrowRightLong size={30} />
            </div>
          </Swiper>
        </div>

        <div className={s.video_yangilik}>
          <div className={s.video}>
            <h2 className={s.video__title}>Videolar</h2>
            <div className={s.video__body}>
              <div className={s.video__big}>
                <iframe
                  style={{ width: "100%" }}
                  src="https://www.youtube.com/embed/3YfZcNUhBKY?si=UmGhlbLKC1TAegHq"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <p>
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill /> 18.46
                </p>
                <h5>Video qo‘llanma - Radio City Buxoro</h5>
              </div>
              <div className={s.video__smallCards}>
                <div className={s.video__smallCard}>
                  <iframe
                    style={{ width: "100%" }}
                    src="https://www.youtube.com/embed/IVsY9zZDDKM?si=7j_DEhnAJ-DwqKfH"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <p>
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar /> 18.46
                  </p>
                  <h5>Video qo‘llanma - Radio City Buxoro</h5>
                </div>
                <div className={s.video__smallCard}>
                  <iframe
                    style={{ width: "100%" }}
                    src="https://www.youtube.com/embed/thDywCDzBAw?si=KjumKZsjqmxrQ2Yt"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <p>
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar /> 18.46
                  </p>
                  <h5>Video qo‘llanma - Radio City Buxoro</h5>
                </div>
              </div>
            </div>
          </div>
          <div className={s.yangilik}>
            <h2 className={s.yangilik__title}>Yangiliklar</h2>
            <div className={s.yangilik__cards}>
              <div className={s.yangilik__card}>
                <Image
                  style={{ width: "100%" }}
                  src={new_1}
                  alt="Radio City Buxoro yangiliklari - Afrosiyob Ko‘chasi 412"
                />
                <div>
                  <p>17.06.2024</p>
                  <p>10ta xarid uchun +2ta mahsulot</p>
                </div>
              </div>
              <div className={s.yangilik__card}>
                <Image
                  style={{ width: "100%" }}
                  src={new_2}
                  alt="Radio City Buxoro yangiliklari - Afrosiyob Ko‘chasi 412"
                />
                <div>
                  <p>17.06.2024</p>
                  <p>10ta xarid uchun +2ta mahsulot</p>
                </div>
              </div>
              <div className={s.yangilik__card}>
                <Image
                  style={{ width: "100%" }}
                  src={new_3}
                  alt="Radio City Buxoro yangiliklari - Afrosiyob Ko‘chasi 412"
                />
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
            RADIO CITY - bu mikroelektronika bozoridagi noyob va eng taniqli brend. Biz yetkazib beramiz elektron
            komponentlar, o‘lchash asboblari, lehim uskunalari, asboblar, Arduino komponentlari, elektr mahsulotlari,
            maishiy elektronika uchun butlovchi qismlar va boshqalar.
            <br />
            <br />
            Kengaytirilgan, muntazam yangilanib turuvchi katalog 7 000 000 dan ortiq tovarlar nomlarini o‘z ichiga
            oladi. Aqlli va qulay mahsulotni qidirish, etkazib berishning har xil turlari va usullari to‘lov.
            Mahsulot mavjudligi va yetkazib berish muddatlari haqidagi so‘nggi ma‘lumotlar.
            <br />
            <br />
            Buyurtmalarni O‘zbekistonning barcha hududlariga, shu jumladan Buxoro, Toshkent, Samarqand va boshqa
            shaharlarga yetkazib beramiz. Bizni Afrosiyob Ko‘chasi 412, Buxoro da ziyorat qiling!
          </p>
          <Image
            className={s.radiocity_1_img}
            src={roboto}
            alt="Radio City Buxoro - Elektronika va gadjetlar, Afrosiyob Ko‘chasi 412"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}