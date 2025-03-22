import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">My Website</div>
      <div className="menu">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  )
}
