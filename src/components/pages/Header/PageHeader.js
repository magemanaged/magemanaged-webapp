import React from 'react'
import './PageHeader.css'

function PageHeader(props) {
  return (
    <div className="page-header">
        <div className="page-title">
            {props.title}
        </div>
        <div className="page-update">
            {props.update}
        </div>
        <div className="page-description">
            {props.description}
        </div>
  </div>
  )
}

export default PageHeader