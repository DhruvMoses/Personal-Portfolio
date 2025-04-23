import React from 'react'

export default function Card(props) {
    return (
        <div className='timeline_item'>
            <i className={`fa ${props.icon}`}></i>
            <span className='timeline_date' style={{ color: '#aaa' }}>{props.year}</span>
            <h3 className='timeline_title' style={{ color: '#fff', fontWeight: 600 }}>{props.title}</h3>
            <p className='timeline_text' style={{ color: '#aaa' }}>{props.desc}</p>
        </div>
    )
}
