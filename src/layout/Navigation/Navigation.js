import React from 'react'
import "./Navigation.css"

const Navigation = (props) => {

    const { open, toggleMenu } = props;


    return (
        <>
            <a className="navbar-brand menubtn" href="#" onClick={() => toggleMenu()}><i class="fas fa-bars"></i></a>
        <nav className="navbar navbar-expand-lg">
            <div className="d-flex flex-column w-100">
                <div className="d-flex justify-content-md-between justify-content-sm-center align-items-center">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-white">
                            <li className="breadcrumb-item" aria-current="page"><a className="text-dark" href="#">All Leads</a></li>
                            <li className="breadcrumb-item" aria-current="page"><a className="text-dark" href="#">By Category</a></li>
                            <li className="breadcrumb-item" aria-current="page">Wallpapers</li>
                        </ol>
                    </nav>
                    <div>
                        <button className="btn btn-primary btn-sm mr-2">Save View</button>
                        <button className="btn btn-light btn-sm"><i className="fas fa-ellipsis-h"></i></button>
                    </div>
                </div>
            <div>
                <h5 className="ml-3">Wallpapers</h5>
            </div>
            </div>

        </nav>
        </>

    )
}

export default Navigation
