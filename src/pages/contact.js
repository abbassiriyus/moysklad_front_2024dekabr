"use client";
import React, { useEffect, useState } from "react";
import s from "../styles/contact.module.css";
import Navbar1 from "../components/NavbarPage";
import Footer1 from "../components/footer";
import Image from "next/image";
import socials1 from "../image/socials.png";
import socials2 from "../image/socials (1).png";
import socials3 from "../image/socials (2).png";
import axios from "axios";
import url from "@/host/host";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";

export default function page() {
  const [company, setCompany] = useState({});

  function getCompanyData() {
    axios.get(`${url}/api/company`).then(res => {
      if (res.data && res.data.length > 0) {
        setCompany(res.data[0]); // 0-chi elementni olamiz
      } else {
        toast.error('Kompaniya ma\'lumotlari topilmadi!', {
          position: "top-right",
          autoClose: 3000,
          className: 'custom-toast',
        });
      }
    }).catch(err => {
      console.error('Error fetching company data:', err);
      toast.error('Server xatosi: Kompaniya ma\'lumotlari olinmadi!', {
        position: "top-right",
        autoClose: 3000,
        className: 'custom-toast',
      });
    });
  }

  useEffect(() => {
    getCompanyData();
  }, []);

  return (
    <div>
      <Head>
        <title>Aloqa - RCE.uz</title>
        <meta name="description" content="RCE.uz - Biz bilan bog'lanish uchun aloqa ma'lumotlari." />
        <meta name="keywords" content="aloqa, RCE.uz, elektronika do'koni, bog'lanish" />
        <meta property="og:title" content="Aloqa - RCE.uz" />
        <meta property="og:description" content="Biz bilan bog'lanish uchun aloqa ma'lumotlari." />
        <meta property="og:image" content={company.image || "https://api.rce.uz/logo.png"} />
        <meta property="og:url" content="https://rce.uz/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aloqa - RCE.uz" />
        <meta name="twitter:description" content="Biz bilan bog'lanish uchun aloqa ma'lumotlari." />
        <meta name="twitter:image" content={company.image || "https://api.rce.uz/logo.png"} />
        <link rel="canonical" href="https://rce.uz/contact" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Aloqa - RCE.uz",
              description: "RCE.uz bilan bog'lanish uchun kontakt ma'lumotlari.",
              url: "https://rce.uz/contact",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: company.phone || "+998945452266",
                email: company.email || "info@rce.uz",
                contactType: "Customer Service",
                areaServed: "UZ",
                availableLanguage: ["Uzbek", "Russian", "English"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: company.address || "Surgut, st. G'alabaning 30 yilligi, 10",
                addressLocality: "Buxoro",
                addressCountry: "UZ",
              },
            }),
          }}
        />
      </Head>
      <div style={{padding:"20px"}}>
        <Navbar1/>
        <div className={s.contact__title}>
          Kontakt ma’lumotlari
        </div>
        <div className={s.contact_body}>
          <div className={s.contact_text}>
            <h5>Do'konimizdan olib ketish - bepul, tez va oson</h5>
            <h4>Manzil:</h4>
            <p>{company.address || "Surgut, st. G'alabaning 30 yilligi, 10"}</p>
            <h4>Telefon:</h4>
            <p>
              <a href={`tel:${company.phone || '+998945452266'}`}>
                {company.phone || "+998 94 545 2266"}
              </a>
            </p>
            <h4>Elektron pochta:</h4>
            <p>
              <a href={`mailto:${company.email || 'info@rce.uz'}`}>
                {company.email || "info@rce.uz"}
              </a>
            </p>
            <h4>Ish soatlari:</h4>
            <p>
              Dushanba – Shanba  9:00–20:00
              <br />
              Yakshanba                10:00–18:00
            </p>
            <div className={s.sotsial_set}>
              {company.facebook && (
                <a href={company.facebook} target="_blank" rel="noopener noreferrer">
                  <Image src={socials1} alt="Facebook" />
                </a>
              )}
              {company.telegram && (
                <a href={company.telegram} target="_blank" rel="noopener noreferrer">
                  <Image src={socials2} alt="Telegram" />
                </a>
              )}
              {company.instagram && (
                <a href={company.instagram} target="_blank" rel="noopener noreferrer">
                  <Image src={socials3} alt="Instagram" />
                </a>
              )}
              {company.youtube && (
                <a href={company.youtube} target="_blank" rel="noopener noreferrer">
                  <Image src={socials3} alt="YouTube" /> {/* socials3 ni YouTube uchun ishlatish, agar kerak bo'lsa, alohida rasm qo'shing */}
                </a>
              )}
            </div>
          </div> 
          <iframe 
            src={
              company.lan && company.lac 
                ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.461706775961!2d${company.lac}!3d${company.lan}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5009a0c8ce8e35%3A0x4afb61346e1c02f2!2sRadioCity%20Electronics!5e0!3m2!1suz!2s!4v1733661653068!5m2!1suz!2s`
                : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.461706775961!2d64.38504687663476!3d39.77419277155008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5009a0c8ce8e35%3A0x4afb61346e1c02f2!2sRadioCity%20Electronics!5e0!3m2!1suz!2s!4v1733661653068!5m2!1suz!2s"
            } 
            className={s.map_contact}  
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <ToastContainer />
      </div>
      <Footer1 />
    </div>
  )
}