import React from "react"

const Remark = () => {

  const handleChange = e => {
    console.log(e.target.value)
  }

  const handleSubmit = e => {
    console.log('submitted')
  }

  return (
    <div className="remark">
      <h3>Remark</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value="My Title" onChange={handleChange} />
        </label>
        <br/>
        <label>
          Body:
          <textarea value="Hello there!" onChange={handleChange} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Remark