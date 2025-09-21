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
  const router = useRouter();
  const { setCartCount } = useCart();
  const { id } = router.query;
  const [data, setData] = useState({});
  const [company, setCompany] = useState({}); // Kompaniya ma'lumotlari uchun state

  // Mahsulot ma'lumotlarini olish
  function getData() {
    axios.get(`${url}/api/oneproduct/${id}`).then(res => {
      setData(res.data);
      console.log(res.data);
    }).catch(err => {
      console.error('API Error:', err);
      toast.error('Mahsulot ma\'lumotlari olinmadi!', {
        position: "top-right",
        autoClose: 3000,
        className: 'custom-toast',
      });
    });
  }

  // Kompaniya ma'lumotlarini olish
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

  function buyProduct() {
    toast.success('Tovar muvaffaqiyatli sotib olindi!', {
      position: "top-right",
      autoClose: 3000,
      className: 'custom-toast',
    });
    const data_push = {
      image: `${url}/api/getimage?url=${data.images?.rows[0]?.meta?.downloadHref}`,
      title: data.name,
      code: data.code,
      price: data.salePrices?.[0]?.value / 100,
      id: data.id,
      count: 1
    };
    let last_shop = localStorage.getItem('shop') ? JSON.parse(localStorage.getItem('shop')) : [];
    let push1 = true;
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
    if (id) {
      getData();
      getCompanyData(); // Kompaniya ma'lumotlarini olish
    }
  }, [id]);

  return (
    <div>
      <Head>
        <title>{data.name ? `${data.name} - RCE.uz` : "Mahsulot - RCE.uz"}</title>
        <meta
          name="description"
          content={
            data.description
              ? `${data.description.slice(0, 150)}... Buxoroda xarid qiling!`
              : `Yuqori sifatli ${data.name || "elektronika mahsuloti"}. Buxoroda tez yetkazib berish!`
          }
        />
        <meta
          name="keywords"
          content={`${data.name || "Elektronika"}, ${data.code || "N/A"}, Buxoro, O‘zbekiston, RCE.uz, ${data.pathName || "Mahsulot"}`}
        />
        <meta property="og:title" content={data.name || "Mahsulot - RCE.uz"} />
        <meta
          property="og:description"
          content={
            data.description
              ? `${data.description.slice(0, 150)}... Buxoroda xarid qiling!`
              : `Yuqori sifatli ${data.name || "elektronika mahsuloti"}.`
          }
        />
        <meta
          property="og:image"
          content={
            data.images?.rows[0]?.meta?.downloadHref
              ? `${url}/api/getimage?url=${data.images.rows[0].meta.downloadHref}`
              : "https://api.rce.uz/logo.png"
          }
        />
        <meta property="og:url" content={`https://rce.uz/oneproduct/${id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.name || "Mahsulot - RCE.uz"} />
        <meta
          name="twitter:description"
          content={
            data.description
              ? `${data.description.slice(0, 150)}...`
              : `Yuqori sifatli ${data.name || "elektronika mahsuloti"}.`
          }
        />
        <meta
          name="twitter:image"
          content={
            data.images?.rows[0]?.meta?.downloadHref
              ? `${url}/api/getimage?url=${data.images.rows[0].meta.downloadHref}`
              : "https://api.rce.uz/logo.png"
          }
        />
        <link rel="canonical" href={`https://rce.uz/oneproduct/${id}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: data.name || "Mahsulot",
              image: data.images?.rows[0]?.meta?.downloadHref
                ? `${url}/api/getimage?url=${data.images.rows[0].meta.downloadHref}`
                : "https://api.rce.uz/logo.png",
              description: data.description || `Yuqori sifatli ${data.name || "elektronika mahsuloti"}.`,
              sku: data.code || "N/A",
              brand: { "@type": "Brand", name: data.name?.split(" ")[0] || "RCE" },
              offers: {
                "@type": "Offer",
                priceCurrency: "UZS",
                price: data.salePrices?.[0]?.value
                  ? data.salePrices[0].value / 100
                  : "0",
                availability: data.quantity > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
              },
              barcode: data.barcodes?.[0]?.ean13 || "N/A",
              weight: data.weight || "0",
              category: data.pathName || "Elektronika",
            }),
          }}
        />
      </Head>

      <div style={{ padding: "20px" }}>
        <Navbar1 />
        <div className={s.Informations_page}>
          <div className={s.Informations_main}>
            <h1>{data.name || "Mahsulot nomi"}</h1>
            <div className={s.infor_cards}>
              <div className={s.for_images}>
                {data.images?.rows?.length >= 3 ? (
                  <>
                    <div className={s.for_sliders}>
                      {data.images.rows.slice(0, 3).map((img, index) => (
                        <div key={index} className={s.for_cent_img}>
                          <img
                            style={{ width: '100%' }}
                            onClick={() => document.querySelector('.asosiy_rasm').src = `${url}/api/getimage?url=${img.meta.downloadHref}`}
                            src={`${url}/api/getimage?url=${img.meta.downloadHref}`}
                            alt={img.title || "Mahsulot rasmi"}
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                    <div className={s.for_image_2}>
                      <img
                        className="asosiy_rasm"
                        style={{ width: '100%' }}
                        src={data.images?.rows[0]?.meta?.downloadHref
                          ? `${url}/api/getimage?url=${data.images.rows[0].meta.downloadHref}`
                          : "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg"}
                        alt={data.name || "Mahsulot rasmi"}
                        loading="lazy"
                      />
                    </div>
                  </>
                ) : (
                  <div className={s.for_image_2}>
                    <img
                      className="asosiy_rasm"
                      style={{ width: '100%' }}
                      src={data.images?.rows[0]?.meta?.downloadHref
                        ? `${url}/api/getimage?url=${data.images.rows[0].meta.downloadHref}`
                        : "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg"}
                      alt={data.name || "Mahsulot rasmi"}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
              <div className={s.infor_card_2}>
                {data.quantity !== undefined && (
                  <h2 className={s.count_product}>
                    <span>Sotuvda bor:</span>
                    <span>{data.quantity} dona</span>
                  </h2>
                )}
                <h3>
                  {Array.isArray(data.salePrices) && data.salePrices.length > 0
                    ? `${(data.salePrices[0].value / 100).toLocaleString()} so‘m`
                    : "N/A"}
                </h3>
                <div className={s.tovar_inf}>
                  {data.description && (
                    <div className={s.description_section}>
                      <h3>Asosiy xususiyatlar:</h3>
                      {data.description.split('#').map((item, key) => (
                        <div key={key} className={s.for_circles}>
                          <div className={s.for_circle}></div>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className={s.additional_info}>
                    <h3>Qo'shimcha ma'lumotlar:</h3>
                    <ul>
                      <li><strong>Kod:</strong> {data.code || "N/A"}</li>
                      <li><strong>Barcode:</strong> {data.barcodes?.[0]?.ean13 || "N/A"}</li>
                      <li><strong>Kategoriya:</strong> {data.pathName || "N/A"}</li>
                      <li><strong>Mahsulot turi:</strong> {data.paymentItemType || "N/A"}</li>
                      <li><strong>Og‘irlik:</strong> {data.weight ? `${data.weight} kg` : "N/A"}</li>
                      {data.attributes?.length > 0 && (
                        <li><strong>Saqlash joyi:</strong> {data.attributes[0].value.name || "N/A"}</li>
                      )}
                    </ul>
                  </div>
                </div>
                <button onClick={buyProduct}>Savatga qo‘shish</button>
              </div>
              <div className={s.contact_section}>
                <h3>Biz bilan bog'lanish:</h3>
                <ul>
                  <li><strong>Manzil:</strong> {company.address || "Surgut, st. G'alabaning 30 yilligi, 10"}</li>
                  <li><strong>Telefon:</strong> <a href={`tel:${company.phone || '+998945452266'}`}>{company.phone || "+998 94 545 2266"}</a></li>
                  <li><strong>Elektron pochta:</strong> <a href={`mailto:${company.email || 'info@rce.uz'}`}>{company.email || "info@rce.uz"}</a></li>
                  <li><strong>Ish soatlari:</strong><br />
                    Dushanba – Shanba: 9:00–20:00<br />
                    Yakshanba: 10:00–18:00
                  </li>
                  {company.facebook && <li><strong>Facebook:</strong> <a className={s.social_link} href={company.facebook} target="_blank" rel="noopener noreferrer">Bizning Facebook</a></li>}
                  {company.telegram && <li><strong>Telegram:</strong> <a className={s.social_link} href={company.telegram} target="_blank" rel="noopener noreferrer">Bizning Telegram</a></li>}
                  {company.youtube && <li><strong>YouTube:</strong> <a className={s.social_link} href={company.youtube} target="_blank" rel="noopener noreferrer">Bizning YouTube</a></li>}
                  {company.instagram && <li><strong>Instagram:</strong> <a className={s.social_link} href={company.instagram} target="_blank" rel="noopener noreferrer">Bizning Instagram</a></li>}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer1 />
    </div>
  );
}