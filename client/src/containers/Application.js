import React from "react"
// import Temp from "../components/TEMP"
import Header from "../components/Header"
import Remark from "../components/Remark"
import Footer from "../components/Footer"
import Sidebar from "../containers/Sidebar"


const Application = () => {

  return (
    <div className="application">
      {/* <Temp /> */}
      <div className="main">
        <Header />
        <Remark />
        <Footer />
      </div>
      <Sidebar />
    </div>
  )
}

export default Application