import React, { useEffect, useState } from 'react'

export default function BackToTop(){
  const [show,setShow] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setShow(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])
  return show ? (
    <button className="back-to-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>↑</button>
  ) : null
}