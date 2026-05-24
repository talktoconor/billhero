"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "accent" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm font-medium",
  md: "px-6 py-3 text-base font-semibold",
  lg: "px-8 py-4 text-lg font-semibold",
} as const

const variantClasses = {
  primary:
    "bg-[#166534] text-white hover:bg-[#15803D] shadow-md hover:shadow-lg",
  accent:
    "bg-[#D97706] text-white hover:bg-[#B45309] shadow-md hover:shadow-lg",
  outline:
    "border-2 border-[#166534] text-[#166534] bg-transparent hover:bg-[#166534] hover:text-white",
} as const

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg transition-all duration-200",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Link>
  )
}
