import React from 'react'
import './Posts.css'
import {PostsData} from '../../Data/PostsData.js'


const Posts = () => {
  return (
    <div className="Posts">
        {PostsData.map((posts, id)=>{
            return <Posts/>
        })}

    </div>
  )
}

export default Posts