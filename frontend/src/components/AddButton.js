import React from 'react'
import { ReactComponent as Addicon } from '../assets/add.svg'
import { Link } from 'react-router-dom'

const AddButton = () => {
  return (
    <Link to='/notes/new'className='floating-button'>
    <Addicon/>
    </Link>
  )
}

export default AddButton