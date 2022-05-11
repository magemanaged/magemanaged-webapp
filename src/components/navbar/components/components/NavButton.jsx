import React from 'react'
import './NavButton.css'
import { Link } from 'react-router-dom'

export const NavButton = (props) => {

  return (
    <>
    <Link to={props.linkto ? props.linkto : '/'} style={{ textDecoration: 'none' }}>
    <div className={`nav-btn-wrapper ${props.selected == props.name ? 'selected' : 'deselected'}`}>
        <div className="content-wrapper">
          <div className="page-icon">
            {props.icon}
          </div>
          <div className="page-name">
            {props.name}
          </div>
        </div>
      </div>
    </Link>
    </>
  )
}