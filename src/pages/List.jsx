import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items, removeItem, editItem }) => {
  return <div className='grocery-list'>
    {items.map((item) => {
      const { id, title } = item
      return (
        <article key={id} className='grocery-item'>
          <p className='title'>{title}</p>
          <div className='btn-container'>
            <button type='button' className='edit-btn' onClick={() => editItem(id)}>

              <FaEdit style={{ color: '#5F432C' }} />
            </button>
            <button type='button' className='del-btn' onClick={() => removeItem(id)}>
              <FaTrash style={{ color: '#5F432C' }} />
            </button>
          </div>
        </article>
      )
    })}
  </div>
}

export default List
