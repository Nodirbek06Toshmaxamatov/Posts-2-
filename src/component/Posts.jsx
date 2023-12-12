import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Posts = () => {


    const [posts, setPosts] = useState([])

    var getPostsFunc = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }
    useEffect(() => {
        getPostsFunc()
    }, [])
    return (
        <>
            <h1 className='text-center'>Posts</h1>
            {
                posts.map(item => <div className='col-4 bg-dark text-light'>
                    <div className="card my-2">
                        <div className="card-header bg-info text-dark">
                            <p>{item.id}.{item.title}</p>
                        </div>
                        <div className="card-body bg-danger text-light" >
                            {item.body}
                        </div>
                    </div>
                </div>)
            }
        </>
    )
}

export default Posts