import React from 'react'

const Post = ({id, title, body}) => {
    return (
        <div className='card m-2'>
            <div className="card-title">
                <span><strong>Título: </strong> {title} </span>
            </div>

            <div className="card-body">
                <span><strong>Cuerpo: </strong> {body} </span>
            </div>
        </div>
    )
}

export default Post
