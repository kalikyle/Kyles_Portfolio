import React from 'react'

export default function Header(){
  const handleNav = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="site-header glass">
      <div className="brand">
        <div className="logo">KTP</div>
        <div>
          <h1>Kyle Pintor</h1>
          <div className="tag">Software developer • Java & Backend • Game Dev</div>
        </div>
      </div>

      <nav className="nav">
        <a href="#about" onClick={(e)=>handleNav(e,'about')}>About</a>
        <a href="#projects" onClick={(e)=>handleNav(e,'projects')}>Projects</a>
        <a href="#skills" onClick={(e)=>handleNav(e,'skills')}>Skills</a>
        <a href="#experience" onClick={(e)=>handleNav(e,'experience')}>Experience</a>
        <a href="#contact" onClick={(e)=>handleNav(e,'contact')}>Contact</a>
      </nav>
    </header>
  )
}