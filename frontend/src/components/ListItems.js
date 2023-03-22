import React from 'react'
import { Link } from 'react-router-dom'

const ListItems = (props) => {

  let getTime = (note) =>{
    return new Date(note.updated_at).toLocaleDateString()
  }
  let getTitle= (note) =>{
    let title =note.split('\n')[0]
    if(title.length >42){
      return title.slice(0,42) +'...'
    }
    return title
  }

  return (
    <Link to={`/notes/${props.note.id}`}>
        <div className='notes-list-item'>
        <h3>{getTitle(props.note.body)}</h3>      
        <p>{getTime(props.note)}</p>
        </div>
    </Link>
  )
}

export default ListItems