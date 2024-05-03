import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-40 inline-block z-0 p-32 pt-0 b'>
        <footer className='flex items-center justify-between py-8 text-base font-medium'>
            <span>{new Date().getFullYear()} &copy; All Right Reserved</span>
            <Link href={"/"}> Code by ❤️ Pandu Putra</Link>
            <Link href={"/"}> Design by ❤️ Pandu Putra </Link>
        </footer>
    </div>
  )
}

export default Footer