"use client"

import { useEffect, useState } from "react"
import { personal } from "@/lib/data"

export default function LiveClock() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    function update() {
      const now = new Date()
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: personal.timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      setTime(formatter.format(now))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <p className="text-xs text-neutral-400 dark:text-neutral-600 tracking-wider font-mono tabular-nums cursor-default w-fit">
      {personal.location} · {time}
    </p>
  )
}
