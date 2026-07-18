"use client"

import { useState, useEffect } from "react"
import { personal, navItems } from "@/lib/data"
import SocialLinks from "./social-links"
import NavLink from "./nav-link"
import LiveClock from "./live-clock"

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )

    for (const item of navItems) {
      const el = document.querySelector(item.href)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <aside className="w-full lg:w-[320px] xl:w-[400px] shrink-0 lg:h-screen lg:sticky lg:top-0 py-8 lg:py-24 flex flex-col justify-between z-20">
      <div className="space-y-10 lg:space-y-20">
        <div className="space-y-4">
          <h1 className="text-2xl font-medium tracking-tight text-neutral-800 dark:text-neutral-100">
            {personal.greeting}
          </h1>
          <SocialLinks />
        </div>

        <nav className="hidden lg:flex flex-col space-y-5 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              label={item.label}
              href={item.href}
              dashColor={item.dashColor}
              isActive={activeSection === item.href.replace("#", "")}
              onClick={() => setActiveSection(item.href.replace("#", ""))}
            />
          ))}
        </nav>
      </div>

      <div className="mt-10 lg:mt-0 space-y-8 hidden lg:block">
        <LiveClock />
      </div>
    </aside>
  )
}
