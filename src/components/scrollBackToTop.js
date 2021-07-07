import React, { memo, useEffect } from "react"
import ArrowUpIcon from "../assets/icons/arrow-up.svg"

const ScrollBackToTop = () => {
  useEffect(() => {
    document.onscroll = function () {
      scrollFunction()
    }
  }, [])

  function scrollFunction() {
    const toTopButton = document.getElementById("scrollBackToTop")
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      toTopButton.style.display = "flex"
    } else {
      toTopButton.style.display = "none"
    }
  }

  function topFunction() {
    const rootElement = document.documentElement

    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      className="scroll-back-top"
      onClick={topFunction}
      id="scrollBackToTop"
      title="Go to top"
      type="button"
    >
      <img src={ArrowUpIcon} alt="back to top icon" />
    </button>
  )
}

export default memo(ScrollBackToTop)
