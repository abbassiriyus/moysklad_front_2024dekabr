"use client";
import React, { useEffect, useState } from "react";
import s from "./Information.module.css";

import Navbar1 from "../../components/NavbarPage";
import Footer1 from "../../components/footer";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import url from "@/host/host";
import { toast, ToastContainer } from "react-toastify";
import { useCart } from "@/host/CartContext";
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";

export default function User() {
  var router = useRouter()
    const { setCartCount } = useCart();
  
  var { id } = router.query
  var [data, setData] = useState({})
  function getData() {
    axios.get(`${url}/api/oneproduct/${id}`).then(res => {
      setData(res.data)
      console.log(res.data);

    })
  }
function buyProduct() {
  // `}`,`${}`,`${item.code}`,`${item.salePrices[0].value/100}`,`${item.id}`
  toast.success('Tovar muvaffaqiyatli sotib olindi!', {
    position: "top-right",
    autoClose: 3000, // 3 soniya davomida ko‘rsatish
    className: 'custom-toast',
  });
  var data_push={image:`${url}/api/getimage?url=${data.images.rows[0].meta.downloadHref}`,title:data.name,code:data.code,price:data.salePrices[0].value/100,id:data,id,count:1}
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


  useEffect(() => {
    if (id) {
      getData()
    }
  }, [id])

  return (
    <div>
    <Head>
        <title>{data.name} - RCE.uz</title>
        <meta name="description" content={data.description || "Mahsulot haqida batafsil ma'lumot."} />
        <meta name="keywords" content={`${data.name}, ${data.code}, RCE.uz`} />
        <meta property="og:title" content={data.name} />
        <meta property="og:description" content={data.description || "Mahsulot haqida batafsil ma'lumot."} />
        <meta property="og:image" content={`${url}/api/getimage?url=${data.images?.rows[0]?.meta?.downloadHref}`} />
        <meta property="og:url" content={`https://rce.uz/oneproduct/${id}`} />
        <link rel="canonical" href={`https://rce.uz/oneproduct/${id}`} />
      </Head>
      <div style={{padding:"20px"}}>
      <Navbar1 />
      <div className={s.Informations_page}>
        <div className={s.Informations_main}>
          <h1>
            {data.name}
          </h1>
          <div className={s.infor_cards}>
            <div className={s.infor_card_1}>
              {data.images?.rows?.length >= 3 ? (<div className={s.for_images}>
                <div className={s.for_sliders}>
                <div className={s.for_image_1}>
                  <div className={s.for_cent_img}>
                    <img onClick={()=>document.querySelector('.asosiy_rasm').src=`${url}/api/getimage?url=`+data.images?.rows[0]?.meta?.downloadHref} src={`${url}/api/getimage?url=`+data.images?.rows[0]?.meta?.downloadHref} alt="" /></div>
                  <div className={s.for_cent_img}>
                    <img onClick={()=>document.querySelector('.asosiy_rasm').src=`${url}/api/getimage?url=`+data.images?.rows[1]?.meta?.downloadHref} src={`${url}/api/getimage?url=`+data.images?.rows[1]?.meta?.downloadHref} alt="" /></div>
                  <div className={s.for_cent_img}>
                    <img onClick={()=>document.querySelector('.asosiy_rasm').src=`${url}/api/getimage?url=`+data.images?.rows[2]?.meta?.downloadHref} src={`${url}/api/getimage?url=`+data.images?.rows[2]?.meta?.downloadHref} alt="" /></div>
                  </div></div>
                <div className={s.for_image_2}>
                  <img className="asosiy_rasm" src={`${url}/api/getimage?url=`+data.images?.rows[0]?.meta?.downloadHref} alt="" />
                </div>
              </div>) : (
                <div className={s.for_image_2}>
                  <img className="asosiy_rasm" src={data.images?.rows[0]?.meta?.downloadHref?`${url}/api/getimage?url=`+data.images?.rows[0]?.meta?.downloadHref: "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg" } alt="" />
                </div>
              )}

            </div>
            <div className={s.infor_card_2}>
              {(data.quantity || data.quantity == 0) ? <></> : <h2 style={{display:'flex',gap:'3px'}} className={s.count_product}><div>Sotuvda bor:</div>
                <div>{data.quantity} dona</div></h2>}
                <h3>{Array.isArray(data.salePrices) && data.salePrices.length > 0 
    ? data.salePrices[0].value / 100 
    : 'N/A'} so'm</h3>
              
              <button onClick={()=>buyProduct()}>Savatga qo’shish</button>
            </div>
          </div>
          <div className={s.tovar_inf}>
            {data.description?<h3>Asosiy xususiyatlar:</h3>:<h3></h3>}
            {data.description?.split('#').map((item,key)=>{
              return  <div className={s.for_circles}><div><div className={s.for_circle}></div></div>{item}</div>
            })}
          

          </div>
        </div>
      </div>
      </div>
             <ToastContainer />
      
      <Footer1 />
    </div>
  );
}