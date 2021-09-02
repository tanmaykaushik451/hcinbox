import React, { useState } from 'react'
import "./Sidebar.css"

const Sidebar = (props) => {

  const { open } = props;

  return (
    <nav id="sidebar" className={!open ? "active" : null}>
      <div className="p-3 d-flex flex-column">

        {/* header */}
        <div className="d-flex align-items-center">
          <h6 className="text-darkgrey text-bold">WorkSpace 1</h6><i className="fas fa-inbox ml-3 text-darkgrey"></i>
        </div>

        {/* options */}
        <div className="d-flex flex-column mt-3">
          <div className="d-flex align-items-center mb-1">
            <i className="fas fa-search text-lightgrey"></i><span className="text-lightgrey ml-3">Search</span>
          </div>
          <div className="d-flex align-items-center mb-1">
            <i className="far fa-bell text-lightgrey"></i><span className="text-lightgrey ml-3">Notification</span>
          </div>
          <div className="d-flex align-items-center mb-1">
            <i className="fas fa-cog text-lightgrey"></i><span className="text-lightgrey ml-3">Settings</span>
          </div>
        </div>

        <div className="d-flex flex-column my-2">
          <div className="d-flex justify-content-between py-1">
            <span className="text-bold">Favourites</span><span className="badge badge-pill badge-primary">1000</span>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <div>
              <i className="fas fa-angle-right  pr-2"></i><span className="text-lightgrey">Sales Performance</span>
            </div>
            <span className="badge badge-pill badge-light">500</span>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <div>
              <i className="fas fa-angle-right  pr-2"></i><span className="text-lightgrey">Leads SKU-1234</span>
            </div>
            <span className="badge badge-pill badge-light">500</span>
          </div>
        </div>


        <div className="d-flex flex-column my-2">
          <div className="d-flex justify-content-between py-1">
            <span className="text-bold">All Leads</span><span className="badge badge-pill badge-success">1000</span>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <div>
              <i className="fas fa-angle-right  pr-2"></i><span className="text-lightgrey">By Category</span>
            </div>
            <span className="badge badge-pill badge-light">500</span>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <div>
              <i className="fas fa-angle-right  pr-2"></i><span className="text-lightgrey">By Region</span>
            </div>
            <span className="badge badge-pill badge-light">500</span>
          </div>
        </div>

        <div className="d-flex flex-column my-2">
          <div className="d-flex justify-content-between py-1">
            <span className="text-bold">All Tasks</span><span className="badge badge-pill badge-warning">80</span>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <div>
              <i className="fas fa-angle-right  pr-2"></i><span className="text-lightgrey">Returns</span>
            </div>
            <span className="badge badge-pill badge-light">20</span>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <div>
              <i className="fas fa-angle-right  pr-2"></i><span className="text-lightgrey">Refunds</span>
            </div>
            <span className="badge badge-pill badge-light">30</span>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <div>
              <i className="fas fa-angle-right  pr-2"></i><span className="text-lightgrey">Refunds for..</span>
            </div>
            <span className="badge badge-pill badge-light">30</span>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Sidebar
