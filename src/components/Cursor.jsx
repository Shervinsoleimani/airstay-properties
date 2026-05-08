import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ringEl = ringRef.current

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
    }

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1
      ring.current.y += (pos.current.y - ring.current.y) * 0.1
      ringEl.style.left = ring.current.x + 'px'
      ringEl.style.top = ring.current.y + 'px'
      raf.current = requestAnimationFrame(animate)
    }

    const grow = () => { dot.classList.add('grow'); ringEl.classList.add('grow') }
    const shrink = () => { dot.classList.remove('grow'); ringEl.classList.remove('grow') }

    document.addEventListener('mousemove', move)
    raf.current = requestAnimationFrame(animate)

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a,button,[data-hover]').forEach(el => {
        el.addEventListener('mouseenter', grow)
        el.addEventListener('mouseleave', shrink)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf.current)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="cursor" style={{ position: 'fixed', left: 0, top: 0 }}>
        <div ref={dotRef} className="cursor cursor-dot" />
      </div>
      <div ref={ringRef} className="cursor cursor-ring" style={{ position: 'fixed', left: 0, top: 0 }} />
    </>
  )
}
