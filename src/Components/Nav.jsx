import React from 'react'
import * as api from '../Utils/api'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <div>
        <ul className="nav_list">
          <Link to={'/'} className="nav_item">
            HOME
          </Link>
        </ul>
      </div>
    </>
  )
}
