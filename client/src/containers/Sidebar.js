import React from "react"
import Menu from "../components/Menu"
import Collection from "../components/Collection"

const Sidebar = () => {

  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      <Menu />
      <Collection />
    </div>
  )
}

export default Sidebar