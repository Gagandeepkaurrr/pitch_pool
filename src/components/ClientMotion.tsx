'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ClientMotionProps {
  children: ReactNode
  className?: string
  initial?: any
  animate?: any
  transition?: any
}

export function ClientMotion({
  children,
  className,
  initial,
  animate,
  transition,
}: ClientMotionProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  )
} 