"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/NavbarPage'
import Footer1 from "../../components/footer"
import s from "../../styles/catalog.module.css"
import MultiRangeSlider from '../../components/multiRangeSlider/MultiRangeSlider';
import { MdRefresh } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import Pagination from '../../components/pagnation/Pagnation';
import axios from 'axios';
import { useCart } from '../../host/CartContext';
import url from '@/host/host';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

export default function Catalog() {
  const { setCartCount } = useCart();
  const router = useRouter();
  const { id, title } = router.query;
  var [min2, setMin] = useState(0);
  var [max2, setMax] = useState(9000000);
  var [data1, setData] = useState([]);
  var [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  function getProduct() {
    if (id == 0) {
      axios.get(`${url}/api/product?limit=60`)
        .then(res => {
          const filteredData = (res.data).filter(product => {
            return product.salePrices[0].value / 100 >= min2 && product.salePrices[0].value / 100 <= max2;
          });
          // Pagination
          const totalPages = Math.ceil(filteredData.length / 12);
          setCount(totalPages);
          setData(filteredData);
        })
        .catch(err => {
          console.error('API Error:', err);
        });
    } else if (id) {
      axios.get(`${url}/api/category/product/${id}?limit=60`)
        .then(res => {
          const filteredData = (res.data).filter(product => {
            return (product.salePrices[0].value / 100 >= min2 && product.salePrices[0].value / 100 <= max2);
          });
          // Pagination
          const totalPages = Math.ceil(filteredData.length / 12);
          setCount(totalPages);
          setData(filteredData);
        })
        .catch(err => {
          console.error('API Error:', err);
        });
    }
  }

  function buyProduct(image, title, code, price, id) {
    toast.success('Tovar muvaffaqiyatli sotib olindi!', {
      position: "top-right",
      autoClose: 3000,
      className: 'custom-toast',
    });
    var data_push = { image, title, code, price, id, count: 1 };
    if (localStorage.getItem('shop')) {
      var last_shop = JSON.parse(localStorage.getItem('shop'));
    } else {
      var last_shop = [];
    }

    var push1 = true;
    for (let i = 0; i < last_shop.length; i++) {
      if (last_shop[i].id === id) {
        push1 = false;
        last_shop[i].count++;
      }
    }
    if (push1) {
      last_shop.push(data_push);
    }
    setCartCount(last_shop.length);
    localStorage.setItem("shop", JSON.stringify(last_shop));
  }

  useEffect(() => {
    if (id) { getProduct(); }
  }, [id, min2, max2]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Head>
        <title>{title ? `${title} - RCE.uz Katalog` : "Elektronika Katalogi - RCE.uz"}</title>
        <meta
          name="description"
          content={
            title
              ? `${title} kategoriyasidagi eng so'nggi elektronika mahsulotlari. Toshkentda tez yetkazib berish va arzon narxlar!`
              : "RCE.uz da telefonlar, noutbuklar va boshqa elektronika mahsulotlarini toping."
          }
        />
        <meta
          name="keywords"
          content={`${title || "Elektronika"}, telefonlar, noutbuklar, Toshkent, O‘zbekiston, RCE.uz`}
        />
        <meta property="og:title" content={title ? `${title} - RCE.uz` : "Elektronika Katalogi - RCE.uz"} />
        <meta
          property="og:description"
          content={
            title
              ? `${title} kategoriyasidagi eng so'nggi mahsulotlar.`
              : "Eng so'nggi elektronika mahsulotlarini RCE.uz da toping."
          }
        />
        <meta property="og:image" content="https://api.rce.uz/logo.png" />
        <meta property="og:url" content={`https://rce.uz/catalog${id ? `?id=${id}&title=${title}` : ""}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title ? `${title} - RCE.uz` : "Elektronika Katalogi - RCE.uz"} />
        <meta
          name="twitter:description"
          content={
            title
              ? `${title} kategoriyasidagi mahsulotlar.`
              : "Eng yangi elektronika mahsulotlari RCE.uz da."
          }
        />
        <meta name="twitter:image" content="https://api.rce.uz/logo.png" />
        <link rel="canonical" href={`https://rce.uz/catalog${id ? `?id=${id}` : ""}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: data1.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Product",
                  name: item.name,
                  image: item.images?.rows[0]?.meta?.downloadHref
                    ? `${url}/api/getimage?url=${item.images.rows[0].meta.downloadHref}`
                    : "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg",
                  description: item.name.slice(0, 150),
                  sku: item.code,
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "UZS",
                    price: item.salePrices?.[0]?.value ? item.salePrices[0].value / 100 : "0",
                    availability: item.quantity > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                  },
                  url: `https://rce.uz/oneproduct/${item.id}`,
                },
              })),
            }),
          }}
        />
      </Head>

      <div style={{ padding: "20px" }}>
        <Navbar />
        <div className={s.catalog__title}>{title}</div>
        <div className={s.catalog_body}>
          <div className={s.catalog_media_button}><FaFilter className={s.catalog_media_button__icons} /> Filter narxi</div>
          <div className={s.catalog_filter}>
            <h2>Summa</h2>
            <div onMouseOut={() => getProduct()}>
              <MultiRangeSlider
                min={0}
                max={9000000}
                onChange={(e) => { setMin(e.min); setMax(e.max); }}
              />
            </div>
            <div className={s.catalog_filter_result}>
              <div className={s.catalog_filter_min}>{min2}</div>
              <div className={s.catalog_filter_max}>{max2}</div>
            </div>
            <div className={s.catalog_filter_line}></div>
            <div onClick={() => { window.location.reload() }} className={s.catalog_filter_button} style={{ cursor: 'pointer' }}>
              <MdRefresh style={{ fontSize: '20px' }} /> Filterni tozalash
            </div>
          </div>
          <div className={s.catalog_cards}>
            {data1 && data1.map((item, key) => {
              if ((currentPage - 1) * 12 <= key && currentPage * 12 > key) {
                return (
                  <div key={key} className={s.catalog_card}>
                    <div className={s.catalog_card_image}>
                      <div className={s.image_div} style={{ width: '90%', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                          style={{ cursor: 'pointer' }}
                          onClick={() => window.location = `/oneproduct/${item.id}`}
                          className={s.catalog_image}
                          src={
                            item.images?.rows[0]?.meta?.downloadHref
                              ? `${url}/api/getimage?url=${item.images.rows[0].meta.downloadHref}`
                              : "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg"
                          }
                          alt=""
                        />
                      </div>
                      <h5 style={{ cursor: 'pointer' }} onClick={() => window.location = `/oneproduct/${item.id}`}>
                        {item.pathName.slice(0, 30)}
                      </h5>
                      <p style={{ cursor: 'pointer', height: '48px' }} onClick={() => window.location = `/oneproduct/${item.id}`}>
                        {item.name.slice(0, 40)}{item.name.length > 40 ? '...' : ''}
                      </p>
                      {(item.quantity || item.quantity === 0) ? null : (
                        <span className={s.count_product}>
                          <div>Sotuvda bor:</div>
                          <div>{item.quantity} dona</div>
                        </span>
                      )}
                      <h1>{item.salePrices[0].value / 100} so‘m</h1>
                      <div
                        onClick={() => {
                          buyProduct(
                            `${url}/api/getimage?url=${item?.images?.rows[0]?.meta?.downloadHref}`,
                            `${item.name}`,
                            `${item.code}`,
                            `${item.salePrices[0].value / 100}`,
                            `${item.id}`
                          );
                        }}
                        className={s.catalog_icons}
                      >
                        <TbShoppingBagPlus style={{ fontSize: '18px', color: '#e30613' }} />
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        {count > 1 ? (
          <Pagination
            totalPages={count}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        ) : null}
        <ToastContainer />
      </div>
      <Footer1 />
    </div>
  );
}