'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
    '/portfolio1.jpg',
    '/portfolio2.jpg',
    '/portfolio3.jpg',
    // '/project1.jpg',
    // '/project3.jpg',
    // '/project2.jpg',
]

export default function BackgroundCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-20' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Background ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
} 