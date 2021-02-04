import React, { useEffect, useState } from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import axios from '../axios'
import Pusher from 'pusher-js'

const Feed = () => {

    const [postsData,setPostsData]=useState([])



    const syncFeed=()=>{
        axios.get('/retrieve/posts').then((res)=>{
            console.log(res.data)
            setPostsData(res.data)
        })
    }
useEffect(()=>{
    syncFeed
})


    return (
        <div className='feed'>
            
            <MessageSender/>

            <Post
                profilePic='https://i.imgur.com/FQbpyAY.jpg'
                message='This is a caption'
                timestamp='time'
                imgName='imgName'
                username='Avishak'
            />

            {/*
                postData.map(entry=>(
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        userName={entry.user}
                    />
                ))
                */}
            
        </div>
    )
}

export default Feed