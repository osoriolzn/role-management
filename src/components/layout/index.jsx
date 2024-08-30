/* eslint-disable react/prop-types */
import './layout.css'

const Layout = ({ image, form, data }) => {
  return (
    <div className="layout-container">
      <div className="layout-image">
        {image}
      </div>
      <div className="layout-form">
        {form}
      </div>
      <div className="layout-data">
        {data}
      </div>
    </div>
  )
}

export default Layout
