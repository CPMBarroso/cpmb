"use client"
import { Eye } from "iconsax-react"
import { useEffect, useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const storedCount = localStorage.getItem("pageVisits")
    const initialCount = Number(storedCount) || 0
    setCount(initialCount + 1)
    localStorage.setItem("pageVisits", (initialCount + 1).toString())
  }, [])

  return (
    <div className="absolute bottom-5 right-10 flex items-center space-x-2 text-2xs text-zinc-500">
      <div className="select-none">{count}</div>
      <Eye className="h-4 w-4 text-zinc-500" />
    </div>
  )
}

export default Counter
