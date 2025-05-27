'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export default function TypewriterText({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(timeout)
    }

    const currentFullText = texts[currentTextIndex]
    
    if (!isDeleting) {
      if (currentText === currentFullText) {
        setIsPaused(true)
        return
      }
      timeout = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1))
      }, typingSpeed)
    } else {
      if (currentText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        return
      }
      timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, currentText.length - 1))
      }, deletingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className="inline-block min-h-[1.5em]">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
} 