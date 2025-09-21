"use client";
import React, { useEffect, useState } from "react";
import s from "../styles/footer.module.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import url from "../host/host"; // sizning API bazaviy url
import logo from "../image/logo_footer.png";

export default function Footer() {
  const [company, setCompany] = useState(null);

  // 🔹 API dan ma’lumot olish
  const getCompany = async () => {
    try {
      const res = await axios.get(`${url}/api/company`);
      setCompany(res.data[0]); // agar bitta bo‘lsa
    } catch (err) {
      console.log("Footer API xato:", err);
    }
  };

  useEffect(() => {
    getCompany();
  }, []);

  return (
    <div className={s.footer}>
      <div className={s.footer__body}>
        <div className={s.footer__item}>
          <Image src={logo} alt="Logo" width={120} style={{marginBottom:'10px'}} />
          <h1>
            <FaPhone style={{ fontSize: "15px" }} /> {company?.phone}
          </h1>
          <p>
            <MdEmail /> {company?.email}
          </p>
        </div>

        <div className={s.footer__item}>
          <h2>Biz haqimizda</h2>
          <p>Tariximiz</p>
          <p>Magazin ma’lumotlari</p>
          <p>Rekvizitlar</p>
          <p>Hamkorlarimiz</p>
        </div>

        <div className={s.footer__item}>
          <h2>Online xarid</h2>
          <p>Qanday buyurtma berish</p>
          <p>Yetkazib berish</p>
          <p>To’lov qilish</p>
          <p>Buyurtma holati</p>
        </div>

        <div className={s.footer__item}>
          {company?.branches?.length > 0 ? (
            company.branches.map((b, i) => <p key={i}>{b.name}</p>)
          ) : (
            <>
            <h2>Online xarid</h2>
              <p>Radio City Toshkent</p>
              <p>Radio City Samarqand</p>
            </>
          )}
        </div>

        <div className={`${s.footer__item} ${s.large}`}>
          <div className={s.set__image}>
            {company?.socials?.map((scl, i) => (
              <a href={scl.link} key={i} target="_blank">
                <Image src={scl.icon} alt="social" width={30} height={30} />
              </a>
            ))}
<div className={s.footer__item}>
   <h2>Online xarid</h2>
         <div className={s.set__image}>
  <a href="https://t.me/yourchannel" target="_blank" className="telegram">
    <FaTelegramPlane />
  </a>
  <a href="https://instagram.com/yourpage" target="_blank" className="instagram">
    <FaInstagram />
  </a>
  <a href="https://youtube.com/yourchannel" target="_blank" className="youtube">
    <FaYoutube />
  </a>
</div></div>
          </div>
        </div>
      </div>

      <div className={s.footer__line}></div>
      <div className={s.footer__p}>
        {company?.footer_text || "Magazin va Optimchilar"}
      </div>
    </div>
  );
}
