import axios from 'axios';
import React, { FunctionComponent, useState } from 'react';
import PlaylistView from './PlaylistView';
const PlaylistController:FunctionComponent<{ user: string ,setVisible:any,setVideo:any,video:any ,setPlayingvideo:any}> =({user,setVisible,setVideo,video,setPlayingvideo})=>{
  const [friends,setFriends]=useState([])
  function handleDelete(id1:string,user:string){
    axios.post('http://localhost:3000/youtubeRestfulAPI/deleteVideo.php',{id:id1,username:user}).then(response=>{
        componentDidMount(user);
    })
}
function getOtherUsers(user:string){
    axios.post('http://localhost:3000/youtubeRestfulAPI/getOtherUsers.php',{username:user}).then(response=>{
        console.log(response);
        setFriends(response.data)  
    })
}
function componentDidMount(user:string){
    axios.get('http://localhost:3000/youtubeRestfulAPI/getVideos.php?user='+user).then(response=>{
       setVideo(response.data.videos);
    })
    getOtherUsers(user);
}

function shareVideo(title: string, id: string,name:string){
    axios.post('http://localhost:3000/youtubeRestfulAPI/addVideo.php', {title: title,id: id,user: name}).then(response=>{
        console.log(response);
    })
} 

  return < PlaylistView 
  user={user}
  setVisible={setVisible}
  setPlayingvideo={setPlayingvideo}
  handleDelete={handleDelete}
  shareVideo={shareVideo}
  video={video}
  friends={friends}
  />;
  
} 



export default PlaylistController