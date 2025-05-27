'use client'

import { useState } from 'react'

interface SkillCardProps {
  name: string
  level: number
  icon: string
  description: string
}

export default function SkillCard({ name, level, icon, description }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{icon}</span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
          </div>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{level}%</span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${level}%` }}
          />
        </div>

        <div
          className={`absolute inset-0 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
} 