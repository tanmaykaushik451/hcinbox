import React from 'react'
import sample from "../../../../../assets/sample.png"
import "./AssignedCell.css"


const AssignedCell = () => {
    return (
        <div className="d-flex">
        <div className="assignedcell-img">
            <img src={sample} />
        </div>
        <div className="assignedcell-img" style={{marginLeft:"-4px"}}>
            <img src={sample} />
        </div>
        <div className="assignedcell-img" style={{marginLeft:"-4px"}}>
            <img src={sample} />
        </div>
        <div className="assignedcell-img"style={{marginLeft:"-4px"}}>
            <img src={sample} />
        </div>
        </div>
    )
}

export default AssignedCell
