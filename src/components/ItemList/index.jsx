import React from 'react'
import "./styles.css"

const ItemList = ({title, link_url, description}) => {
  return (
    <div className='item-list'>
        <strong><a href={link_url} target='_blank' rel="noreferrer">{title}</a></strong>
        <p>{description}</p>
        <hr/>
    </div>
  )
}

export default ItemList;