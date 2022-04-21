import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'

export default function Header() {
  return (
    <div>
      <Link to="/">
        <h3 className="header_logo">
          Sam218 <span className="logo_feature"> App </span>
        </h3>
      </Link>
    </div>
  )
}
