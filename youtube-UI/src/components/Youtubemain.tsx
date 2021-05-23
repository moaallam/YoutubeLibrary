import axios from "axios";
import React, { FunctionComponent, useState } from 'react';
import PlaylistController from "./PlaylistController";
import VideoPlayer from "./videoPlayer"
import SearchresultController from "./SearchresultController"
const  Youtubemain:FunctionComponent<{user :string}>=({user})=>{
    const [username,setUsername]=useState(user)
    const [visible,setVisible]=useState(true)
    const [video,setVideo] = useState([])    
    const [playingvideo,setPlayingvideo]=useState('')
    function refresh(user:string){
        axios.get('http://localhost:3000/youtubeRestfulAPI/getVideos.php?user='+user).then(response=>{
           setVideo(response.data.videos)  
        })
    } 
    return <div>
        <PlaylistController user={username} setVisible={setVisible} setVideo={setVideo} video={video} setPlayingvideo={setPlayingvideo}/> 
        <div className="second">
        {visible? 
        <VideoPlayer id ={playingvideo}/>
        : 
        <SearchresultController user={username} refresh={refresh} />
        }
        </div>
        </div>
}

export default Youtubemain