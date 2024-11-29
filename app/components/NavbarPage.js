"use client";
import s from "@/app/styles/navbar.module.css"
import Image from 'next/image'
import image_sum  from "../image/kalkulyator1.png" 
import logo from "../image/logo.svg" 
import acaunt from "../image/acaunt.png" 
import bom from "../image/bom.png" 
import status_zakaz from "../image/status_zakaz 1.png" 
import korzinka from "../image/korzinka.png" 
import { CgMenuGridR } from "react-icons/cg";
import { RiMapPin2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react"
export default function Navbar() {

    var [opentogle,setOpentoggle]=useState(1)





  return (
    <div className={s.navbar_body}>
        <div className={s.navbar_top}>
            <ul className={s.navbar_top__items}>
               <a href=""><li className={s.navbar_top__item}>+ 998 94 545 2266</li></a> 
               <a href=""><li className={ s.navbar_top__item_bordered }>RadioCity Tashkiloti</li></a> 
               <a href=""><li className={s.navbar_top__item}>Yetkazib berish</li></a> 
                <a href=""><li className={s.navbar_top__item}>To`lovlar</li></a>
            </ul>
            <ul className={s.navbar_top__items_second}><Image style={{height:'22px'}} src={image_sum} alt="" /> Onlayn hisoblash</ul>
        </div>
<div className={s.navbar_bottom}>
    <div className={s.navbarlogo}>
        <Image src={logo} className={s.navbarlogo_img} alt="" />
        <div className={s.navbar_location}>
        <RiMapPin2Fill className='navbar_location__icons' /> 
        <h5 className={s.navbar__country}>
        Uzbekistan
        </h5>
        </div>
    </div>
    <ul className={s.navbar__action}>
       <li className={s.navbar__action_item} id={s.none__media}>
        <Image src={acaunt} alt="" /><br />
        Kirish
        </li> 
        <li className={s.navbar__action_item} id={s.none__media}>
        <Image src={status_zakaz} alt="" /><br />
        Buyurtma Holati
        </li> 
        <li className={s.navbar__action_item} id={s.none__media}>
        <Image src={bom} alt="" /><br />
        BOM
        </li> 
        <li className={s.navbar__action_item}>
        <div className="navbar_savat">
            <Image className={s.karzinka__image} src={korzinka} alt="" /> <br />
            </div>
        <div id={s.none__media}>Savat</div>
        </li> 
        <li  className={s.none__pk__toggle}>
        <IoMenuSharp  onClick={()=>setOpentoggle(true)}  style={{fontSize:"24px"}} />
        </li>
        <div  style={opentogle?{right:'0px'}:{right:'-120%'}} id="toollbr" className={s.menu__bar}>
        <div className="close" onClick={()=>setOpentoggle(false)}>x</div>
        salom
    </div>
    </ul>
</div>
<div className={s.navbar__filter}>
    <div className={s.navbar__filter__katalog}>
    <CgMenuGridR style={{fontSize:"18px"}} />
        <h5>Kataloglar</h5>
    </div>
    <div className={s.navbar__filter__search}>
    <CiSearch className={s.search__icons} />
    <input type="text" placeholder='2 000 000 dan ortiq tavar bor' />
    
    </div>
  
</div>
    </div>
  )
}
