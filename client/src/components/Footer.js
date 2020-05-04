import React from "react"

const Footer = () => {

  return (
    <div className="footer">
      <p>
        <b>Quick Remark</b> © { new Date().getFullYear() } by <span> </span>
        <a href="https://beletsky.dev/" target="_blank" rel="noopener noreferrer">
          Pavel Beletsky
        </a>
      </p>
    </div>
  )
}

export default Footer