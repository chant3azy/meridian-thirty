"use client"

import { motion, useReducedMotion } from "framer-motion"
import { fadeUp, fadeUpReduced } from "@/lib/motion"

type FadeInProps = {
  children: React.ReactNode
  className?: string
  delayIndex?: number
  once?: boolean
}

export function FadeIn({
  children,
  className,
  delayIndex = 0,
  once = true,
}: FadeInProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      custom={delayIndex}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={reduceMotion ? fadeUpReduced : fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  )
}
