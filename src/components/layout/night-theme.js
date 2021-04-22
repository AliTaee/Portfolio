import React, { memo, useState } from "react"

const NightTheme = () => {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null

    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme)

      if (currentTheme === "dark") {
        return true
      } else {
        return false
      }
    }
  })

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark")
      localStorage.setItem("theme", "dark")
      setTheme(true)
    } else {
      document.documentElement.setAttribute("data-theme", "light")
      localStorage.setItem("theme", "light")
      setTheme(false)
    }
  }

  return (
    <label className="theme-switch" htmlFor="night-theme">
      <input
        checked={theme}
        type="checkbox"
        id="night-theme"
        onChange={switchTheme}
      />
      <div className="slider round"></div>
    </label>
  )
}

export default memo(NightTheme)
