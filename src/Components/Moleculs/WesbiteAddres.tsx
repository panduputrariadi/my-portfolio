import navLinks from '@/constants/navLink'
import Link from 'next/link'
import React from 'react'

const WesbiteAddres = () => {
  return (
    <nav>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-block mx-4 group"
          >
            <span className="nav-link relative over:underline">
              <span className="transition-all duration-300 overflow-hidden">
                {link.label}
              </span>
            </span>
          </Link>
        ))}
      </nav>
  )
}

export default WesbiteAddres