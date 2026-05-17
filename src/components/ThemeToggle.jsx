import { useDarkMode } from '../context/DarkModeContext'

export default function ThemeToggle() {
  const { dark, toggle } = useDarkMode()

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}
