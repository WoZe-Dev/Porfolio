import { useEffect, useState } from 'react'

/**
 * Retourne true si la balise <html> possède la classe "dark".
 * Compatible Tailwind (strategy "class") et next-themes.
 */
export default function usePrefersDarkClass(): boolean {
  const [isDark, setIsDark] = useState<boolean>(
    () => document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    const html = document.documentElement

    const observer = new MutationObserver(() =>
      setIsDark(html.classList.contains('dark'))
    )

    observer.observe(html, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return isDark
}
