import { useEffect } from 'react'

export default function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    const els = document.querySelectorAll('.animate-on-scroll')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
