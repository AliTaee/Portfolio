import React, { memo, useState } from "react"

const NightTheme = () => {
  const [theme, setTheme] = useState(() => {
    let currentTheme = null
    if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      currentTheme = localStorage.getItem("theme")
    }

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
    let localStorageTheme = "light"
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark")
      localStorageTheme = "dark"
      setTheme(true)
    } else {
      document.documentElement.setAttribute("data-theme", "light")
      setTheme(false)
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", localStorageTheme)
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
