"use client";
import React, { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import url from "@/host/host";
import styles from "../styles/sliderproduct.module.css";

export default function SliderProduct({ color, data, mapdata, id }) {
  const scrollContainerRef = useRef(null);

  // Scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div>
      <main style={{ backgroundColor: color }} className={styles.top_slider}>
        <div className={styles.main_1}>
          <h1 className={styles.main_1__h1}>{data?.title}</h1>

          <div className={styles.slider_container}>
            <div className={styles.scroll_container} ref={scrollContainerRef}>
          {Array.isArray(mapdata) && mapdata.length > 0 ? (
  mapdata.map((item, key) => (
    <div
      key={key}
      onClick={() => (window.location = `/oneproduct/${item.id}`)}
      className={styles.card}
    >
      <div className={styles.card_img}>
        <img
          src={
            item.images?.rows?.[0]?.meta?.downloadHref
              ? `${url}/api/getimage?url=${item.images.rows[0].meta.downloadHref}`
              : "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg"
          }
          alt={item.name}
        />
      </div>
      <h5>{item.pathName?.slice(0, 20)}</h5>
      <p>
        {item.name?.slice(0, 40)}
        {item.name?.length > 30 ? "..." : ""}
      </p>
      {item.quantity || item.quantity === 0 ? null : (
        <div className={styles.count_product}>
          <div>Sotuvda bor:</div>
          <div>{item.quantity} dona</div>
        </div>
      )}
      <h2>{item.salePrices?.[0]?.value / 100} so‘m</h2>
    </div>
  ))
) : (
  <p>Ma'lumot topilmadi</p>
)}

            </div>
          </div>
        </div>

        <div className={styles.main_2}>
          <div className={styles.button_roll}>
            <FaArrowLeftLong onClick={scrollLeft} className={styles.custom_prev} />
            <FaArrowRightLong onClick={scrollRight} className={styles.custom_next} />
          </div>

          <div className={styles.section2}>
            <div className={styles.wer12}>
              <h2>{data?.h1}</h2>
              <p>{data?.p}</p>
            </div>
            <button
              onClick={() =>
                (window.location = `/catalog/${id}?title=${data?.title}`)
              }
              className={styles.catalog_button}
            >
              Tanlovga o'ting
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}