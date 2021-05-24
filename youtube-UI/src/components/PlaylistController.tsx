import axios from 'axios';
import { FunctionComponent, useState } from 'react';
import { useEffect } from 'react';
import PlaylistView from './PlaylistView';
const PlaylistController:FunctionComponent<{ user: string ,setVisible:any,setVideo:any,video:any ,setPlayingvideo:any}> =({user,setVisible,setVideo,video,setPlayingvideo})=>{
  const [friends,setFriends]=useState([])//array of users that the connected user can share with them
 //To call the getOtherUsers once to set the friends array
  useEffect(()=>{
    getOtherUsers(user)
}, [])

    //Delete a video from the playlist by a POST request to my youtubeRestfulAPI 
    function handleDelete(id1:string,user:string){
    axios.post('http://localhost:3000/youtubeRestfulAPI/deleteVideo.php',{id:id1,username:user}).then(response=>{
        componentDidMount(user);
    })
}
    //Extract the users except the connected user by a POST request to my youtubeRestfulAPI 
    function getOtherUsers(user:string){
    axios.post('http://localhost:3000/youtubeRestfulAPI/getOtherUsers.php',{username:user}).then(response=>{
        console.log(response);
        setFriends(response.data) 
    })
}
// Refresh the video array from data base by a GET request to my youtubeRestfulAPI
function componentDidMount(user:string){
    axios.get('http://localhost:3000/youtubeRestfulAPI/getVideos.php?user='+user).then(response=>{
       setVideo(response.data.videos);
    })
}
//To share a video , we add the video in the data base of the user chosen by a post request to my youtubeRestfulAPI 
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