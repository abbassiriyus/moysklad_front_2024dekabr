import React from 'react';
import Navbar1 from '../components/NavbarPage';
import Footer1 from '../components/footer';
import s from "../styles/bizhaqimizda.module.css";
import Image from 'next/image';
import card_image1 from "../image/about1.png";
import card_image2 from "../image/Component 10 (1).png";
import card_image3 from "../image/Component 10 (2).png";
import card_image4 from "../image/Component 10 (3).png";
import card_image5 from "../image/Component 10 (4).png";
import card_image6 from "../image/Component 10 (5).png";
import Head from 'next/head';

// JSON-LD tuzilgan ma'lumotlar
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Radio City",
  "description": "Radio City - Buxorodagi eng ishonchli elektronika do'koni. 28 yillik tajriba bilan smartfonlar, noutbuklar va gadjetlar. Afrosiyob Ko'chasi 412, Buxoro.",
  "url": "https://rce.uz/bizhaqimizada",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Afrosiyob Ko'chasi 412",
    "addressLocality": "Buxoro",
    "addressRegion": "Buxoro viloyati",
    "postalCode": "200100",
    "addressCountry": "UZ"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+998973048888",
      "contactType": "Customer Service",
      "areaServed": "UZ",
      "availableLanguage": ["Uzbek", "Russian"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+998945452266",
      "contactType": "Customer Service",
      "areaServed": "UZ"
    }
  ],
  "email": "info@rce.uz",
  "sameAs": [
    "https://t.me/radiocityuz",
    "https://x.com/radiocityuz",
    "https://instagram.com/radiocityuz"
  ],
  "foundingDate": "1998-01-01",
  "numberOfEmployees": "100",
  "logo": "https://api.rce.uz/logo.png"
};

// Metadata obyekti
export const metadata = {
  title: "Biz haqimizda - Radio City | Buxoro Elektronika Do'koni",
  description: "Radio City - 28 yillik tajribaga ega Buxorodagi elektronika do'koni. Smartfonlar, noutbuklar va gadjetlar. Afrosiyob Ko'chasi 412, Buxoro. ☎️ +998973048888",
  keywords: ["Radio City", "elektronika do'koni", "Buxoro smartfonlar", "Afrosiyob Ko'chasi 412", "O'zbekiston gadjetlar", "onlayn xarid"],
  openGraph: {
    title: "Biz haqimizda - Radio City",
    description: "Radio City - Buxorodagi eng ishonchli elektronika do'koni. 28 yil sifatli xizmat! Buyurtma bering: rce.uz",
    url: "https://rce.uz/bizhaqimizada",
    type: "website",
    images: [
      {
        url: "https://api.rce.uz/logo.png",
        width: 1200,
        height: 630,
        alt: "Radio City do'koni Afrosiyob Ko'chasi 412, Buxoro"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio City - Buxoro Elektronika Do'koni",
    description: "28 yillik tajriba! Smartfonlar, noutbuklar va gadjetlar. Afrosiyob Ko'chasi 412, Buxoro. rce.uz",
    images: ["https://api.rce.uz/logo.png"]
  },
  alternates: {
    canonical: "https://rce.uz/bizhaqimizada"
  }
};


export default function page() {

    return (
    <div className={s.about}>
    <Head>
        <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
        <meta name="geo.region" content="UZ-Buxoro" />
        <meta name="geo.placename" content="Buxoro, O'zbekiston" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>


    <div  style={{padding:"0 20px"}}>
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
          <Image className={s.about_reja_card_image} src={card_image1} alt=""/>
        </div>
            <h4>
              100 000+
            </h4>
            <p>
             Potentsial xaridorlar kuniga Rossiya, Belarus, Qozog'iston va Armaniston
            </p>
    </div>
 
    <div className={s.about_reja_card}>
        <div className={s.about_reja_card_circle}>
          <Image className={s.about_reja_card_image} src={card_image2} alt=""/>
        </div>
            <h4>
            62 000+
            </h4>
            <p>
            buyurtmalar oylik
            </p>
    </div>
 
    <div className={s.about_reja_card}>
        <div className={s.about_reja_card_circle}>
          <Image className={s.about_reja_card_image} src={card_image3} alt=""/>
        </div>
            <h4>
            40
            </h4>
            <p>
            chakana savdo tarmog'i ofislari bo'lgan do'konlar ulgurji savdo  2020 yil sentyabr uchun
            </p>
    </div>
    <div className={s.about_reja_card}>
        <div className={s.about_reja_card_circle}>
          <Image  className={s.about_reja_card_image} src={card_image4} alt=""/>
        </div>
            <h4>
            11 000 м²
            </h4>
            <p>
            chakana savdo tarmog'i ofislari bo'lgan do'konlar ulgurji savdo 2020 yil sentyabr uchun
            </p>
    </div>
    <div className={s.about_reja_card}>
        <div className={s.about_reja_card_circle}>
          <Image className={s.about_reja_card_image} src={card_image5} alt=""/>
        </div>
            <h4>
            Radio City
            </h4>
            <p>
            Mobil ilova
            </p>
    </div>
    <div className={s.about_reja_card}>
        <div className={s.about_reja_card_circle}>
          <Image className={s.about_reja_card_image} src={card_image6} alt=""/>
        </div>
            <h4>
            Yetkazib berish
            </h4>
            <p>
            mas'uliyatli saqlash to'lovlarni qabul qilish
            </p>
    </div>
  </div>
</div>




<div className={s.about__title}>
“Radio City” yetkazib beruvchiga qo'yiladigan talablar
</div>
<ul className={s.about_ul}>
<li className={s.about_li}>
Yuridik shaxs yoki yakka tartibdagi tadbirkor

</li>
<li className={s.about_li}>
Moliyaviy shaffoflik

</li>
<li className={s.about_li}>
EDF bilan ishlash: Elektron hujjat aylanishi

</li>
<li className={s.about_li}>
Kontentning mavjudligi: fotosuratlar, tavsiflar, sertifikatlar, ko'rsatmalar va boshqalar.

</li>
<li className={s.about_li}>API interfeysi yoki .xml fayli orqali ma'lumotlar almashinuvi</li>
<li className={s.about_li}>Joriy ombor zaxiralari: kuniga kamida bir marta yangilanadi</li>
<li className={s.about_li}>1 kun ichida qadoqlash va jo'natish</li>
<li className={s.about_li}>Shikoyatlarni moslashuvchan ko'rib chiqish</li>
<li className={s.about_li}>“Radio City” omboriga yetkazib beruvchi hisobidan yetkazib berish</li>



<div className={s.aboout_p}>
Radio City yetkazib beruvchisi boʻlish uchun hamkorlik uchun ariza toʻldirishingiz kerak.
</div>
<button className={s.about__button}>So’rov qoldirish</button>


</ul>
</div>

<div className={s.about__video_big}>
<iframe className={s.about__video} src="https://www.youtube.com/embed/05BZsQh6amo?si=VgvparmIFZDhHWdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<Footer1/>
</div>
  )
}