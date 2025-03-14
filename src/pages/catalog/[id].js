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
  const { id,title } = router.query;
  var [min2, setMin] = useState(0);
  var [max2, setMax] = useState(9000000);
  var [data1,setData]=useState([])
  var [count,setCount]=useState(0)
  const [currentPage, setCurrentPage] = useState(1);

  function getProduct() {
    if(id==0){
      axios.get(`${url}/api/product?limit=60`)
      .then(res => {
        
        const filteredData = (res.data).filter(product => {
          return product.salePrices[0].value/100 >= min2 && product.salePrices[0].value/100 <= max2;
      });
      // Pagination
      const totalPages = Math.ceil(filteredData.length / 12);
      setCount(totalPages)
      setData(filteredData)
      })
      .catch(err => {
        console.error('API Error:', err); // Xatolik yuz bersa, konsolga chiqarish
      });
    }else if(id){
       axios.get(`${url}/api/category/product/${id}?limit=60`)
      .then(res => {
        const filteredData = (res.data).filter(product => {
          return (product.salePrices[0].value/100 >= min2 && product.salePrices[0].value/100 <= max2)
      });
      // Pagination
      const totalPages = Math.ceil(filteredData.length / 12);
      setCount(totalPages)
      setData(filteredData)
      })
      .catch(err => {
        console.error('API Error:', err); // Xatolik yuz bersa, konsolga chiqarish
      }); 
    }
  
  }

function buyProduct(image,title,code,price,id) {
  toast.success('Tovar muvaffaqiyatli sotib olindi!', {
    position: "top-right",
    autoClose: 3000, // 3 soniya davomida ko‘rsatish
    className: 'custom-toast',
  });
  var data_push={image,title,code,price,id,count:1}
  if(localStorage.getItem('shop')){
  var last_shop=JSON.parse(localStorage.getItem('shop'))
  }else{
    var last_shop=[]
  }

  var push1=true
  for (let i = 0; i < last_shop.length; i++) {
   if (last_shop[i].id===id){
    push1=false
    last_shop[i].count++
   }
  }
  if(push1){
last_shop.push(data_push)
  }
  setCartCount(last_shop.length)
  localStorage.setItem("shop",JSON.stringify(last_shop))
}

  useEffect(()=>{
 if(id){ getProduct()}
  },[id]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
          <Head>
        <title>Katalog - RCE.uz</title>
        <meta name="description" content="RCE.uz - Eng so'nggi elektronika mahsulotlari, telefonlar, kompyuterlar va boshqa ko'plab mahsulotlar." />
        <meta name="keywords" content="elektronika, katalog, telefonlar, kompyuterlar, RCE.uz" />
        <meta property="og:title" content="Katalog - RCE.uz" />
        <meta property="og:description" content="Eng so'nggi elektronika mahsulotlarini toping." />
        <meta property="og:url" content="https://rce.uz/catalog" />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <link rel="canonical" href="https://rce.uz/catalog" />
      </Head>

      
      <div style={{padding:"20px"}}>
      <Navbar />
      <div className={s.catalog__title}>{title}</div>
      <div className={s.catalog_body}>
        <div className={s.catalog_media_button}><FaFilter className={s.catalog_media_button__icons} /> Filter narxi</div>
        <div className={s.catalog_filter}>
          <h2>Summa</h2>

          <div onMouseOut={()=>getProduct()}>
          <MultiRangeSlider
            min={0}
            max={9000000}
            
            onChange={(e) =>{setMin(e.min); setMax(e.max);
             }}
           
          /></div>
          <div className={s.catalog_filter_result}>
            <div className={s.catalog_filter_min}>{min2}</div>
            <div className={s.catalog_filter_max}>{max2}</div>
          </div>
          <div className={s.catalog_filter_line}></div>
          <div onClick={()=>{window.location.reload()}} className={s.catalog_filter_button} style={{cursor:'pointer'}}> <MdRefresh style={{ fontSize: '20px' }} /> Filterni tozalash</div>
        </div>
        <div className={s.catalog_cards}>
{data1 && data1.map((item,key)=>{
 
  
  if((currentPage-1)*12<=key && currentPage*12>key){
  return <div key={key} className={s.catalog_card}>
            <div className={s.catalog_card_image}>
            <div className={s.image_div} style={{width:'90%',height:'140px',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <img style={{cursor:'pointer'}}  onClick={()=>window.location=`/oneproduct/${item.id}`} className={s.catalog_image} src={item.images?.rows[0]?.meta?.downloadHref?`${url}/api/getimage?url=`+item.images?.rows[0]?.meta?.downloadHref : "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg"}  alt="" />
</div>
              <h5 style={{cursor:'pointer'}}  onClick={()=>window.location=`/oneproduct/${item.id}`}>{item.pathName.slice(0,30)}</h5>
              <p  style={{cursor:'pointer',height:'50px'}} onClick={()=>window.location=`/oneproduct/${item.id}`}>{item.name.slice(0,40)}{item.name.length>30?('...'):("")}</p>
              {(item.quantity || item.quantity==0)?<></>:<span className={s.count_product}><div>Sotuvda bor:</div>
            <div>{item.quantity}  dona</div></span>}
              <h1>{item.salePrices[0].value/100} so`m</h1>
              <div onClick={()=>{buyProduct(`${url}/api/getimage?url=`+`${item.images.rows[0].meta.downloadHref}`,`${item.name}`,`${item.code}`,`${item.salePrices[0].value/100}`,`${item.id}`)}} className={s.catalog_icons}>
                <TbShoppingBagPlus style={{ fontSize: '20px', color: '#6a6a6a' }} />
              </div>
            </div>
          </div>
 }
})}      
        </div>
      </div>


  {count>1?(    <Pagination
        totalPages={count}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />):("")}
       <ToastContainer />
       </div>
      <Footer1 />
    </div>
  )
}
