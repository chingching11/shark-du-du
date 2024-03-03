"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='bg-white'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
            <Link href="/" className='flex lg:flex-1'>
                <Image src="/assets/images/babyshark.jpeg" alt="logo" width={50} height={50}/>
            </Link>
            <div className="hidden lg:flex lg:gap-x-12 lg:justify-end">             
                <Link href="/" className="text-m ">Home</Link>
                <Link href="/program" className="text-m">Program</Link>
                <Link href="els" className="text-m">ELS</Link>
                <Link href="/schedule" className="text-m">Schedule/Closures</Link>
                <Link href="educator" className="text-m">Educator</Link>
                <Link href="gallery" className="text-m">Gallery</Link>
                <Link href="contact-us" className="text-m">Contact Us</Link>
            </div>
            
            {/* Mobile Navigation */}
            <div className='sm:flex hidden'>

            </div>
        </nav>
    </header>
    
  )
}

export default Nav