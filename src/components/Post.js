import React from 'react'

export default ({post}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="title"> {post.title}</h5>
            </div>
        </div>
    )
}