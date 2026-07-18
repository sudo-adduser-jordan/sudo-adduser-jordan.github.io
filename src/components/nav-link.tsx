"use client"

import { useCallback } from "react"

interface NavLinkProps {
  label: string
  href: string
  isActive: boolean
  onClick: () => void
  dashColor: string
}

export default function NavLink({ label, href, isActive, onClick, dashColor }: NavLinkProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
      onClick()
    },
    [href, onClick]
  )

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group flex items-center w-fit transition-colors duration-300 ${
        isActive
          ? "text-neutral-800 dark:text-neutral-100"
          : "text-neutral-400 dark:text-neutral-600"
      }`}
    >
      <span
        className={`h-[1px] transition-all duration-500 ${
          isActive
            ? "w-6 mr-4"
            : "w-0 mr-0 group-hover:w-6 group-hover:mr-4"
        }`}
        style={{ backgroundColor: dashColor }}
      />
      <span className="tracking-wide">{label}</span>
    </a>
  )
}
