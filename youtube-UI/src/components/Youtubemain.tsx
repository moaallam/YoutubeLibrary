import axios from "axios";
import React, { FunctionComponent, useEffect, useState } from 'react';
import PlaylistController from "./PlaylistController";
import VideoPlayer from "./videoPlayer"
import SearchresultController from "./SearchresultController"
const  Youtubemain:FunctionComponent<{user :string}>=({user})=>{
    const [visible,setVisible]=useState(true)//TO switch from video player to search pannel and vice-versa
    const [video,setVideo] = useState([]) //To store the video extracting from the database
    const [playingvideo,setPlayingvideo]=useState('')//to store the id of the video that we will paly
    //TO refresh the video array from the data base by a GET request to my youtubeRestfulAPI
    function refresh(user:string){
        axios.get('http://localhost:3000/youtubeRestfulAPI/getVideos.php?user='+user).then(response=>{
           setVideo(response.data.videos)  
        })
    } 
    //To extarct the video in the first time
    useEffect(()=>{
        refresh(user)
    }, [])

    return <div>
        <PlaylistController user={user} setVisible={setVisible} setVideo={setVideo} video={video} setPlayingvideo={setPlayingvideo}/> 
        <div className="second">
        {visible? 
        <VideoPlayer id ={playingvideo}/>
        : 
        <SearchresultController user={user} refresh={refresh} />
        }
        </div>
        </div>
}

export default Youtubemain