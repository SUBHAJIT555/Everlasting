import { motion, useSpring, frame } from "motion/react"
import { useEffect, useRef, useState } from "react"
import type { RefObject } from "react"

export default function Cursor() {
  // Disable on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null

  const ref = useRef<HTMLDivElement>(null)
  const { x, y } = useFollowPointer(ref)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [data-cursor='hover']")) {
        setActive(true)
      }
    }

    const onMouseOut = () => setActive(false)

    window.addEventListener("mouseover", onMouseOver)
    window.addEventListener("mouseout", onMouseOut)

    return () => {
      window.removeEventListener("mouseover", onMouseOver)
      window.removeEventListener("mouseout", onMouseOut)
    }
  }, [])

  return (
   <motion.div
  ref={ref}
  style={{ x, y }}
  animate={{ scale: active ? 1.8 : 1 }}
  transition={{ type: "spring", stiffness: 80, damping: 18 }}
  className="
    pointer-events-none
    fixed top-0 left-0 z-[99999]
    h-10 w-10
    rounded-full
    bg-white
    mix-blend-difference
  "
/>
  )
}

const spring = {
  stiffness: 80,
  damping: 10,
  mass: 0.8,
}

function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring)
  const y = useSpring(0, spring)

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (!ref.current) return
      const el = ref.current

      frame.read(() => {
        x.set(e.clientX - el.offsetWidth / 2)
        y.set(e.clientY - el.offsetHeight / 2)
      })
    }

    window.addEventListener("pointermove", handleMove)
    return () => window.removeEventListener("pointermove", handleMove)
  }, [])

  return { x, y }
}
