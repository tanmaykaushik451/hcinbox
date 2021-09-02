import React from 'react'
import sample from "../../../../../assets/sample.png"
import "./ContactCell.css"

const ContactCell = () => {
    return (
        <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
            <div className="contactcell-img mr-2">
                <img src={sample}/>
            </div>
            <div className="d-flex flex-column">
                <span>Anna White</span>
                <small>Hi can you help me with...</small>
            </div>
        </div>
        <small className="text-lightgrey">5s ago</small>
        </div>
    )
}

export default ContactCell
