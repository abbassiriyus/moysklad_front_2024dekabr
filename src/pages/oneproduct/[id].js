"use client";
import React from "react";
import s from "./Information.module.css";
import img1 from "../../image/image39.png"

import img2 from "../../image/image40.png"
import img3 from "../../image/image41.png"
import img4 from "../../image/image42.png"
import Navbar1 from "../../components/NavbarPage";
import Footer1 from "../../components/footer";
import Image from "next/image";
import { useRouter } from "next/router";
export default function User() {
  var router=useRouter()
  var { id }=router.query
  
function getData() {
  
}

  return (
    <div>
        <Navbar1/>
      <div className={s.Informations_page}>
        <div className={s.Informations_main}>
          <h1>
            Hikmicro - M10 + tekshirish, M10 25Hz -20...550°C (160x120) issiqlik
            tasvirlagichi (Rossiya Federatsiyasi Davlat reestri)
          </h1>
          <div className={s.infor_cards}>
            <div className={s.infor_card_1}>
              <div className={s.for_images}>
                <div className={s.for_image_1}>
                  <div className={s.for_cent_img}><Image src={img1} alt="" /></div>
                  <div className={s.for_cent_img}><Image src={img2} alt="" /></div>
                  <div className={s.for_cent_img}><Image src={img3} alt="" /></div>
                </div>
                <div className={s.for_image_2}>
                  <Image src={img4} alt="" />
                </div>
              </div>
            </div>
            <div className={s.infor_card_2}>
              <h2>Sotuvda:   50 dona</h2>
              <h3>93 000 sum</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              <button>Savatga qo’shish</button>
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
      <Footer1/>
    </div>
  );
}