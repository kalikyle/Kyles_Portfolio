import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function SkillBar({name,percent}){
  const ref = useRef(null)
  const controls = useAnimation()
  const [,setVisible] = useState(false)

  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){ setVisible(true); controls.start({ width: percent }) }
      })
    },{ threshold: 0.4 })
    if(ref.current) obs.observe(ref.current)
    return ()=>obs.disconnect()
  },[controls,percent])

  return (
    <div className="skill-block glass" ref={ref}>
      <div className="skill-name">{name}</div>
      <div className="bar"><motion.div className="fill" animate={controls} initial={{ width: '0%' }} style={{ width: '0%' }} /></div>
    </div>
  )
}