import logo from '@/app/logo.svg'
import Image from 'next/image'
import React from 'react'

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center gap-2 ${className || ''}`}>
    <Image src={logo} alt="" className="h-12 w-12" unoptimized />
    <span>Vembric</span>
  </div>
)
