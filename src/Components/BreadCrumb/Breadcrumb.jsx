import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb({ title, description, bgImage }) {
    return (
        <>
            <div
                className="breadcumb-wrapper"
                style={{ 
                    backgroundImage: `url(${bgImage || '/assets/img/bg/ptit-banner.jpg'})`, 
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "cover",
                    position: "relative"
                }}
            >
                {/* Dark overlay */}
                <div 
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        zIndex: 1
                    }}
                ></div>
                
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">{title}</h1>
                        <ul className="breadcumb-menu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>{title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Breadcrumb
