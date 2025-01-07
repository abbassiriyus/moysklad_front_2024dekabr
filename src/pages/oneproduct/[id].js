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
                  <img className="asosiy_rasm" src={`${url}/api/getimage?url=`+data.images?.rows[0]?.meta?.downloadHref} alt="" />
                </div>
              )}

            </div>
            <div className={s.infor_card_2}>
              {(data.quantity || data.quantity == 0) ? <></> : <h2 className={s.count_product}><div>Sotuvda bor:</div>
                <div>{data.quantity} dona</div></h2>}
                <h3>{Array.isArray(data.salePrices) && data.salePrices.length > 0 
    ? data.salePrices[0].value / 100 
    : 'N/A'} so'm</h3>
              <p>{data.description}</p>
              <button onClick={()=>buyProduct()}>Savatga qo’shish</button>
            </div>
          </div>
          <div className={s.tovar_inf}>
            <h3>Asosiy xususiyatlar:</h3>
            <div className={s.for_circles}><div><div className={s.for_circle}></div></div>Termik ruxsat: 160 x 120 (19200 piksel)</div>
            <div className={s.for_circles}><div><div className={s.for_circle}></div></div>Issiqlik sezuvchanligi:  40 mK (25 °C da, F#=1,0)</div>
            <div className={s.for_circles}><div><div className={s.for_circle}></div></div>Haroratni o'lchash diapazoni: -20°C dan 550°C (-4°F~1022°F)</div>
            <div className={s.for_circles}><div><div className={s.for_circle}></div></div>Aniqlik: 15°C va 35°C (59°F va 95°F) orasidagi muhit harorati va 0°C (32°F) dan yuqori ob'ekt harorati uchun maksimal (±2°C/3,6°F, ±2%)</div>
            <div className={s.for_circles}><div><div className={s.for_circle}></div></div>Dastlabki oʻlchash sozlamalari: markaziy nuqta, issiq nuqta, sovuq nuqta, foydalanuvchi tomonidan belgilangan nuqta/chiziq/hudud</div>
            <div className={s.for_circles}><div><div className={s.for_circle}></div></div>Qo‘lda fokuslash</div>
            <div className={s.for_circles}><div><div className={s.for_circle}></div></div>Kadr tezligi 25 Gts</div>
            <div className={s.for_circles}><div><div className={s.for_circle}></div></div>3,5 dyuymli sensorli displeyli LCD displey</div>
          </div>
        </div>
      </div>
      </div>
             <ToastContainer />
      
      <Footer1 />
    </div>
  );
}