import React from 'react'
import Table from './components/Table'
import "./Home.css"

const Home = () => {
  return (
    <div className="d-flex flex-column mt-2">
      <div className="d-flex ml-3 pb-2 home-pills">
        <div className="mr-4">
          <i className="fas fa-table mr-2 text-primary"></i><span className="text-primary text-bold">Table</span>
        </div>
        <div className="mr-4">
          <i className="fas fa-layer-group mr-2 text-lightgrey"></i><span className="text-lightgrey text-bold">Group</span>
        </div>
        <div className="mr-4">
          <i className="fas fa-filter mr-2 text-lightgrey"></i><span className="text-lightgrey text-bold">Filter</span>
        </div>
        <div className="mr-4">
          <i className="fas fa-sort mr-2 text-lightgrey"></i><span className="text-lightgrey text-bold">Sort</span>
        </div>
        <div className="mr-4">
          <i className="fas fa-eye mr-2 text-lightgrey"></i><span className="text-lightgrey text-bold">Hide Fields</span>
        </div>
      </div>
      <div>
        <Table/>
      </div>
    </div>
  )
}

export default Home
