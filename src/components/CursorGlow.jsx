import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [coords, setCoords] = useState({ x: -9999, y: -9999 })
  const x = useSpring(coords.x, { stiffness: 120, damping: 20 })
  const y = useSpring(coords.y, { stiffness: 120, damping: 20 })

  useEffect(() => {
    const onMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <motion.div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 240,
        height: 240,
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(40px)',
        background:
          'radial-gradient(circle at 30% 30%, rgba(153,69,255,0.18), transparent 50%), radial-gradient(circle at 70% 70%, rgba(20,241,149,0.18), transparent 50%)',
        mixBlendMode: 'screen',
        zIndex: 1,
        translateX: x,
        translateY: y,
      }}
    />
  )
}