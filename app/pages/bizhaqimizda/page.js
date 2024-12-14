import React from 'react';
import Navbar1 from '../../components/NavbarPage';
import Footer1 from '../../components/footer';
import s from "../../styles/bizhaqimizda.module.css";
import Image from 'next/image';
import card_image1 from "../../image/about1.png";
export default function page() {

    return (
    <div className={s.about}>
    <Navbar1/>
    <div className={s.about__title}>
      Siz etkazib beruvchi bo'lishni rejalashtiryapsizmi?
    </div>
<div className={s.about_reja}>
    <div className={s.about_reja_text}>
      <h4>
        "Radio CIty"
      </h4>
      <p>kompaniyasi ishlab chiqaruvchilarni hamkorlikka taklif etadi va elektron komponentlar va asboblar distribyutorlari. Do'kon TOP 100 ga kiritilgan Rossiyadagi eng yirik onlayn-do'konlar </p>
    </div>
  <div className={s.about_reja_cards}>
    <div className={s.about_reja_card}>
        <div className={s.about_reja_card_circle}>
          <Image src={card_image1} alt=""/>
        </div>
            <h4>
              100 000+
            </h4>
            <p>
             Potentsial xaridorlar kuniga Rossiya, Belarus, Qozog'iston va Armaniston
            </p>
    </div>
  </div>
</div>




<div className="about__title">
“Radio City” yetkazib beruvchiga qo'yiladigan talablar
</div>
<Footer1/>
</div>
  )
}  
